import { calendlyUrl, registerBookingTool } from "../../lib/booking"
import type { BookingContext } from "../../lib/booking"
import { getWhatsAppUrl } from "../../lib/contact"
import { useState, useRef, useEffect } from "react"
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Mail,
  Phone,
  Calendar,
  FileText,
  Zap,
  Minimize2,
  Maximize2,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Sparkles,
} from "lucide-react"
import CalendlyModal from "./CalendlyModal"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  actions?: MessageAction[]
  metadata?: {
    confidence?: number
    intent?: string
    entities?: any[]
  }
}

interface MessageAction {
  type: "email" | "call" | "schedule" | "download" | "link"
  label: string
  data: any
}

interface ChatbotState {
  isOpen: boolean
  isMinimized: boolean
  messages: Message[]
  isTyping: boolean
  currentInput: string
  context: {
    userName?: string
    userEmail?: string
    phoneNumber?: string
    sessionId: string
    conversationStage: "greeting" | "inquiry" | "details" | "resolution"
    lastIntent?: string
  }
}

const quickActions = [
  { label: "Our Services", icon: Zap, query: "What services do you offer?" },
  { label: "Get Quote", icon: FileText, query: "I need a project quote" },
  { label: "Schedule Call", icon: Calendar, query: "Schedule a consultation call" },
  { label: "Contact Info", icon: Phone, query: "How can I contact your team?" },
]

const predefinedResponses = {
  greeting: [
    "Hello! I'm Abaid, your AI/ML and Full Stack Developer. How can I help you today?",
    "Hi there! Welcome to my portfolio. What can I assist with?",
  ],
  services: {
    web: "We offer comprehensive Web Apps services including React, Next.js, Vue.js, and full-stack solutions. Would you like to know more about a specific technology?",
    mobile: "Our mobile development expertise covers iOS, Android, React Native, and Flutter. We can build native or cross-platform apps. What type of mobile solution are you looking for?",
  },
  contact: "You can reach me through multiple channels:\n📧 Email: bestabaidullahbutt@gmail.com\n💬 Live Chat: Right here\n📅 Schedule: Book a consultation\nWhatsApp: use the website button and it will open the best number for your region.",
  quote: "I'd be happy to help you get a project quote! To provide an accurate estimate, I'll need some details:\n\n1. What type of project? (Web, Mobile, AI, etc.)\n2. Project scope and timeline\n3. Your budget range\n4. Any specific requirements",
}

export default function Chatbot() {
  const [state, setState] = useState<ChatbotState>({
    isOpen: false,
    isMinimized: false,
    messages: [],
    isTyping: false,
    currentInput: "",
    context: {
      sessionId: Math.random().toString(36).substring(7),
      conversationStage: "greeting",
      userName: "",
      phoneNumber: "",
      userEmail: "",
    },
  })
  const [showCalendly, setShowCalendly] = useState(false)
  const calendlyURL = calendlyUrl

  useEffect(() => registerBookingTool(
    (document as Document & { modelContext?: BookingContext }).modelContext,
    () => setShowCalendly(true),
  ), [])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state.isOpen && state.messages.length === 0) {
      addBotMessage(predefinedResponses.greeting[0], {
        actions: [
          { type: "email", label: "Send Email", data: { subject: "Inquiry from Website" } },
          { type: "schedule", label: "Schedule Call", data: { type: "consultation" } },
        ],
      })
    }
  }, [state.isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [state.messages])

  const addBotMessage = (content: string, options?: { actions?: MessageAction[]; metadata?: any }) => {
    const message: Message = {
      id: Date.now().toString(),
      type: "bot",
      content,
      timestamp: new Date(),
      actions: options?.actions,
      metadata: options?.metadata,
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      isTyping: false,
    }))
  }

  const addUserMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      currentInput: "",
    }))
  }

  const processUserMessage = async (message: string) => {
    const lowerMessage = message.toLowerCase()
    setState((prev) => ({ ...prev, isTyping: true }))

    // Quick Rules
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you")) {
      addBotMessage("I handle a lot of tech stuff:\n\n🌐 Web & Mobile - React, Next.js, React Native, Flutter\n🤖 AI & ML - Custom AI models and smart automation\n☁️ DevOps & Cloud - Infrastructure and Monitoring\n🔒 Security - Audits and secure auth\n🎨 UI/UX - User centered design\n\nI recently built a HIPAA patient portal and a companion mobile app. Anything specific you're looking for?", {
        actions: [
          { type: "email", label: "Get Details", data: { subject: "Service Inquiry" } },
          { type: "schedule", label: "Discuss Services", data: { type: "consultation" } },
        ],
        metadata: { intent: "services", confidence: 1.0 }
      })
      return
    }

    if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      addBotMessage(predefinedResponses.quote, {
        actions: [
          { type: "email", label: "Request Form", data: { subject: "Quote Request" } },
          { type: "schedule", label: "Book Meeting", data: { type: "quote" } },
        ],
        metadata: { intent: "quote", confidence: 1.0 }
      })
      return
    }

    // AI Fallback via Proxy API (Secure)
    try {
      const history = state.messages.map(m => ({
        role: m.type === "bot" ? "model" : "user",
        parts: [{ text: m.content }]
      }))

      const userContext = `User: ${state.context.userName} (${state.context.userEmail}).`
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: history.slice(-8),
          userContext
        })
      })

      if (!response.ok) throw new Error("API call failed")
      
      const data = await response.json()
      addBotMessage(data.response, { actions: data.actions, metadata: { intent: data.intent, confidence: 0.9 } })

    } catch (error) {
      console.error("Chat Error", error)
      addBotMessage("I'm having trouble connecting! Please schedule a calender or email me directly.")
    } finally {
      setState((prev) => ({ ...prev, isTyping: false }))
    }
  }

  const handleSendMessage = () => {
    if (!state.currentInput.trim()) return
    const input = state.currentInput
    addUserMessage(input)
    processUserMessage(input)
  }

  const handleQuickAction = (query: string) => {
    addUserMessage(query)
    processUserMessage(query)
  }

  const handleActionClick = async (action: MessageAction) => {
    switch (action.type) {
      case "email":
        setState((prev) => ({ ...prev, isTyping: true }))
        setTimeout(() => {
          addBotMessage(`✅ I've noted your interest in ${action.data.subject}. I'll follow up at ${state.context.userEmail || "your email"} soon!`)
          setState((prev) => ({ ...prev, isTyping: false }))
        }, 1000)
        break
      case "call":
        window.open(getWhatsAppUrl(), "_blank")
        break
      case "schedule":
        setShowCalendly(true)
        addBotMessage("📅 Calendar opened! Please pick a time that works for you.")
        break
      case "link":
        window.open(action.data.url, "_blank")
        break
    }
  }

  const copyMessage = (content: string) => navigator.clipboard.writeText(content)
  const toggleChatbot = () => setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  const toggleMinimize = () => setState((prev) => ({ ...prev, isMinimized: !prev.isMinimized }))
  const clearChat = () => {
    setState((prev) => ({ ...prev, messages: [] }))
    setTimeout(() => addBotMessage(predefinedResponses.greeting[1]), 100)
  }

  const handleUserInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("userName") as string;
    const phone = data.get("phoneNumber") as string;
    const email = data.get("email") as string;
    if (!name || !email) return alert("Please fill at least name and email.");
    setState((prev) => ({
      ...prev,
      context: { ...prev.context, userName: name, phoneNumber: phone, userEmail: email },
    }));
  };

  if (!state.isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={toggleChatbot} className="rounded-full bg-black p-3 text-white shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle className="w-10 h-10" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <section className={`bg-gray-900/95 backdrop-blur-md border border-white border-2 rounded-xl shadow-2xl transition-all ${state.isMinimized ? "h-auto w-auto" : "h-[600px] w-[380px]"}`}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Bot className="text-black w-6 h-6" /></div>
            <div>
              <h3 className="text-white font-semibold">Abaid Ullah</h3>
              <div className="flex items-center space-x-1"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div><span className="text-xs text-gray-400">AI Assistant</span></div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <button onClick={toggleMinimize}>{state.isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}</button>
            <button onClick={clearChat}><RotateCcw className="w-4 h-4" /></button>
            <button onClick={toggleChatbot}><X className="w-4 h-4" /></button>
          </div>
        </div>

        {!state.isMinimized && (
          <div className="flex flex-col h-[520px]">
             {!state.context.userEmail ? (
                <form onSubmit={handleUserInfoSubmit} className="p-6 flex flex-col space-y-4">
                  <div className="text-center mb-4">
                    <Sparkles className="w-12 h-12 text-white mx-auto mb-2" />
                    <h4 className="text-white font-medium">Chat with Abaid</h4>
                    <p className="text-gray-400 text-sm">Please provide your details to start.</p>
                  </div>
                  <input name="userName" placeholder="Name" className="bg-gray-800 border-white border-2 text-white p-3 rounded-lg focus:ring-1 focus:ring-black outline-none" required />
                  <input name="email" type="email" placeholder="Email" className="bg-gray-800 border-white border-2 text-white p-3 rounded-lg focus:ring-1 focus:ring-black outline-none" required />
                  <input name="phoneNumber" placeholder="Phone (optional)" className="bg-gray-800 border-white border-2 text-white p-3 rounded-lg focus:ring-1 focus:ring-black outline-none" />
                  <button type="submit" className="bg-black hover:bg-gray-800 border-white border-2 text-white p-3 rounded-lg font-medium transition-colors">Start Chatting</button>
                </form>
             ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {state.messages.map((m) => (
                    <div key={m.id} className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl p-3 ${m.type === "user" ? "bg-black text-white" : "bg-gray-800 text-white border border-white/10"}`}>
                        <div className="text-sm whitespace-pre-wrap">{m.content}</div>
                        {m.actions && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {m.actions.map((a, i) => (
                              <button key={i} onClick={() => handleActionClick(a)} className="text-xs bg-white/10 hover:bg-white/20 border border-white border-2 px-3 py-1.5 rounded-lg transition-colors flex items-center">
                                {a.type === "email" && <Mail className="w-3 h-3 mr-1" />}
                                {a.type === "schedule" && <Calendar className="w-3 h-3 mr-1" />}
                                {a.label}
                              </button>
                            ))}
                          </div>
                        )}
                        <div className="mt-2 flex items-center justify-between opacity-50 text-[10px]">
                           <span>{m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                           {m.type === "bot" && <div className="flex space-x-2">
                              <button onClick={() => copyMessage(m.content)}><Copy className="w-3 h-3" /></button>
                              <ThumbsUp className="w-3 h-3 cursor-pointer" />
                              <ThumbsDown className="w-3 h-3 cursor-pointer" />
                           </div>}
                        </div>
                      </div>
                    </div>
                  ))}
                  {state.isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-2xl p-3 flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t border-white/10">
                  {state.messages.length <= 1 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                       {quickActions.map((a, i) => (
                         <button key={i} onClick={() => handleQuickAction(a.query)} className="text-[10px] text-gray-400 border-white border-2 p-2 rounded-lg hover:bg-white/5 text-left flex items-center">
                           <a.icon className="w-3 h-3 mr-2 text-white" /> {a.label}
                         </button>
                       ))}
                    </div>
                  )}
                  <div className="flex space-x-2">
                     <input 
                       ref={inputRef} 
                       value={state.currentInput} 
                       onChange={(e) => setState(p => ({ ...p, currentInput: e.target.value }))} 
                       onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                       placeholder="Message Abaid..." 
                       className="flex-1 bg-gray-800 border-white border-2 text-white text-sm p-3 rounded-xl focus:ring-1 focus:ring-black outline-none"
                     />
                     <button onClick={handleSendMessage} disabled={!state.currentInput.trim() || state.isTyping} className="bg-black hover:bg-gray-800 border-white border-2 text-white p-3 rounded-xl disabled:opacity-50 transition-colors">
                       <Send className="w-5 h-5" />
                     </button>
                  </div>
                  <p className="text-[10px] text-gray-500 text-center mt-3">Powered by Gemini AI • Secure & Private</p>
                </div>
              </>
             )}
          </div>
        )}
      </section>
      <CalendlyModal url={calendlyURL} open={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  )
}
