import { GoogleAuth } from "google-auth-library"

// Standard Vertex AI endpoint for Gemini
// Note: Requires a Service Account JSON in GOOGLE_APPLICATION_CREDENTIALS 
// or GOOGLE_SERVICE_ACCOUNT_KEY env variable.
const AUTH_SCOPE = "https://www.googleapis.com/auth/cloud-platform"
const PROJECT_ID = process.env.GOOGLE_PROJECT_ID || "my-project"
const REGION = process.env.GOOGLE_REGION || "us-central1"
const MODEL_ID = "gemini-2.5-flash" 

const API_ENDPOINT = `https://${REGION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${REGION}/publishers/google/models/${MODEL_ID}:streamGenerateContent`

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { message, history, userContext } = req.body

  try {
    // 1. Get Google Auth Token via JWT Exchange (secure server-side)
    const auth = new GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}"),
      scopes: [AUTH_SCOPE]
    })
    const client = await auth.getClient()
    const tokenResponse = await client.getAccessToken()
    const accessToken = tokenResponse.token

    if (!accessToken) throw new Error("Failed to generate access token")

    // 2. Format request for Vertex AI
    const apiHistory = history.map((m: any) => ({
      role: m.role === "model" ? "model" : "user",
      parts: m.parts
    }))

    const payload = {
       contents: [
         {
           role: "user",
           parts: [{ text: `System context: You are Abaid Abbott, Solo/Lead Developer. Timezone: ET. Web/Mobile/AI expert. No bolding. JSON Only.` }]
         },
         {
           role: "user",
           parts: [{ text: `User context: ${userContext}` }]
         },
         ...apiHistory,
         {
           role: "user",
           parts: [{ text: message }]
         }
       ],
       generationConfig: {
         maxOutputTokens: 1024,
         temperature: 0.7,
         responseMimeType: "application/json" // Native JSON output
       }
    }

    // 3. Request Vertex AI using token
    const apiResponse = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!apiResponse.ok) {
        const errText = await apiResponse.text()
        throw new Error(errText || "Vertex AI API Error")
    }

    const data = await apiResponse.json()
    // Extract textual response and parse if needed
    let outputText = ""
    if (data[0] && data[0].candidates && data[0].candidates[0]) {
       outputText = data[0].candidates[0].content.parts[0].text
    } else if (data.candidates && data.candidates[0].content) {
       outputText = data.candidates[0].content.parts[0].text
    }
    
    // Vertex AI may return raw string of JSON if JSON mode is on
    try {
      const parsed = JSON.parse(outputText)
       return res.status(200).json(parsed)
    } catch {
       return res.status(200).json({ response: outputText, intent: "ai_text" })
    }

  } catch (error: any) {
    console.error("Vertex auth/proxy error:", error)
    return res.status(500).json({ 
       error: "Internal server error connecting to AI.",
       message: error.message 
    })
  }
}
