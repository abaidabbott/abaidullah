
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
  Brain,
} from "lucide-react"
import axios from "axios"
import CalendlyModal from "./CalendlyModal"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  isTyping?: boolean
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
    "Hello! I'm Abaid, your AI assistant. How can I help you today?",
    "Hi there! Welcome to my portfolio. What can I assist you with?",
    "Greetings! I'm here to help you with any questions about our services.",
  ],
  services: {
    web: "We offer comprehensive Web Apps services including React, Next.js, Vue.js, and full-stack solutions. Would you like to know more about a specific technology?",
    mobile:
      "Our mobile development expertise covers iOS, Android, React Native, and Flutter. We can build native or cross-platform apps. What type of mobile solution are you looking for?",
    ai: "We specialize in AI/ML solutions including chatbots, predictive analytics, computer vision, and NLP. What AI challenge are you trying to solve?",
    devops:
      "Our DevOps services include CI/CD, cloud migration, containerization, and infrastructure automation. How can we help optimize your development workflow?",
    security:
      "We provide cybersecurity solutions including penetration testing, security audits, and compliance consulting. What security concerns do you have?",
  },
  contact:
    "You can reach us through multiple channels:\n📧 Email: bestabaidullahbutt@gmail.com\n📞 Phone: +92 (311) 1715499\n💬 Live Chat: Right here!\n📅 Schedule: Book a consultation\n\nWould you like me to help you with any of these options?",
  quote:
    "I'd be happy to help you get a project quote! To provide an accurate estimate, I'll need some details:\n\n1. What type of project? (Web, Mobile, AI, etc.)\n2. Project scope and timeline\n3. Your budget range\n4. Any specific requirements\n\nShould I send you our detailed project form via email?",
}

export default function Chatbot() {
  const [state, setState] = useState<ChatbotState>({
    isOpen: true,
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
  const calendlyURL = "https://calendly.com/bestabaidullahbutt"

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state.isOpen && state.messages.length === 0) {
      // Initialize with greeting
      addBotMessage(predefinedResponses.greeting[0], {
        actions: [
          { type: "email", label: "Send Email", data: { subject: "Inquiry from Website" } },
          { type: "schedule", label: "Schedule Call", data: { type: "consultation" } },
        ],
      })
    }
  }, [state.isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [state.messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

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

    // Simulate typing delay
    setState((prev) => ({ ...prev, isTyping: true }))

    setTimeout(
      async () => {
        let response = ""
        let actions: MessageAction[] = []
        const metadata = { confidence: 0.8, intent: "general" }

        // Intent detection and response generation
        if (lowerMessage.includes("service") || lowerMessage.includes("what do you")) {
          response =
            "We offer a comprehensive range of technology services:\n\n🌐 **Web Apps** - React, Next.js, Vue.js\n📱 **Mobile Apps** - iOS, Android, React Native\n🤖 **AI & Machine Learning** - Custom AI solutions\n☁️ **DevOps & Cloud** - AWS, Digital Ocean, GCP and VPS\n🔒 **Cybersecurity** - Security audits & consulting\n🎨 **UI/UX Design** - User-centered design\n\nWhich service interests you most?"
          metadata.intent = "services_inquiry"
          actions = [
            { type: "email", label: "Get Service Details", data: { subject: "Service Information Request" } },
            { type: "schedule", label: "Discuss Services", data: { type: "services_consultation" } },
          ]
        } else if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
          response = predefinedResponses.quote
          metadata.intent = "quote_request"
          actions = [
            {
              type: "email",
              label: "Send Quote Form",
              data: { subject: "Project Quote Request", template: "quote_form" },
            },
            { type: "schedule", label: "Quote Discussion", data: { type: "quote_consultation" } },
          ]
        } else if (
          lowerMessage.includes("contact") ||
          lowerMessage.includes("reach") ||
          lowerMessage.includes("phone")
        ) {
          response = predefinedResponses.contact
          metadata.intent = "contact_inquiry"
          actions = [
            {
              type: "email",
              label: "Send Contact Info",
              data: { subject: "Contact Information", template: "contact_info" },
            },
            { type: "call", label: "Call Now", data: { phone: "+92 (311) 1715499" } },
          ]
        } else if (
          lowerMessage.includes("schedule") ||
          lowerMessage.includes("meeting") ||
          lowerMessage.includes("call")
        ) {
          response =
            "I'd be happy to help you schedule a consultation! We offer:\n\n📅 **Free Consultation** (30 min) - Project discussion\n🎯 **Technical Deep Dive** (60 min) - Detailed planning\n💼 **Executive Briefing** (45 min) - Strategic overview\n\nWhat type of meeting would work best for you?"
          metadata.intent = "schedule_request"
          actions = [
            { type: "schedule", label: "Book Free Consultation", data: { type: "free_consultation" } },
            {
              type: "email",
              label: "Send Calendar Link",
              data: { subject: "Meeting Scheduler", template: "calendar_link" },
            },
          ]
        } else if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
          response = predefinedResponses.services.web
          metadata.intent = "web_development"
        } else if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
          response = predefinedResponses.services.mobile
          metadata.intent = "mobile_development"
        } else if (
          lowerMessage.includes("ai") ||
          lowerMessage.includes("machine learning") ||
          lowerMessage.includes("ml")
        ) {
          response = predefinedResponses.services.ai
          metadata.intent = "ai_services"
        } else if (lowerMessage.includes("DevOps Services") || lowerMessage.includes("cloud")) {
          response = predefinedResponses.services.devops
          metadata.intent = "devops_services"
        } else if (lowerMessage.includes("security") || lowerMessage.includes("cybersecurity")) {
          response = predefinedResponses.services.security
          metadata.intent = "security_services"
        } else if (lowerMessage.includes("email") || lowerMessage.includes("send")) {
          response =
            "I can help you with email-related actions:\n\n📧 **Send Information** - Service details, pricing, case studies\n📋 **Project Forms** - Detailed requirement gathering\n📅 **Calendar Links** - Schedule meetings\n📞 **Contact Details** - Direct team contacts\n\nWhat would you like me to send you?"
          metadata.intent = "email_request"
          actions = [
            {
              type: "email",
              label: "Company Brochure",
              data: { subject: "abaidabbott Expereience information ", template: "brochure" },
            },
            {
              type: "email",
              label: "Service Portfolio",
              data: { subject: "Our Services Portfolio", template: "portfolio" },
            },
          ]
        } else {
          // General AI response
          const newMessage = { role: "user", content: message };
          const updatedMessages = [...state.messages, newMessage];
          const general = await generalReponse(updatedMessages)
          response = general.response

          actions = general.actions || []
          metadata.intent = general.intent
          metadata.confidence = general.confidence
        }

        addBotMessage(response, { actions, metadata })
      },
      1000 + Math.random() * 1000,
    ) // Realistic typing delay
  }
  const generalReponse = async (updatedMessages: any) => {
    const reply = await axios.post("https://softkai.vercel.app/api/chat-bot", updatedMessages).then((res: any) => res.data)
    return reply
  }

  const handleSendMessage = () => {
    if (!state.currentInput.trim()) return

    addUserMessage(state.currentInput)
    processUserMessage(state.currentInput)
  }

  const handleQuickAction = (query: string) => {
    addUserMessage(query)
    processUserMessage(query)
  }

  const handleActionClick = async (action: MessageAction) => {
    switch (action.type) {
      case "email":
        await handleEmailAction(action.data)
        break;
      case "call": {
        const phone = state.context.phoneNumber || "+92 (311) 1715499"

        addBotMessage(
          `📞 You can reach us at:\n\n**${phone}**\n\nTapping the button below will start the call.`,
          {
            actions: [
              {
                type: "link",
                label: "Call Now",
                data: { url: `tel:${phone}` },
              },
              {
                type: "email",
                label: "Request Callback",
                data: { subject: "Callback Request", template: "callback_form" },
              },
            ],
            metadata: {
              intent: "call_request",
              confidence: 0.9,
            },
          }
        )

        break
      }
      case "schedule":
        await handleScheduleAction(action.data)
        break
      case "download":
        // Handle download
        break
      case "link":
        window.open(action.data.url, "_blank")
        break
    }
  }
  const handleEmailAction = async (emailData: any) => {
    const userEmail = state.context.userEmail || "abaidullahbuttcs@gmail.com" // fallback if missing
    setState((prev) => ({ ...prev, isTyping: true }))

    try {
      await axios.post("https://softkai.vercel.app/api/send-email", {
        to: userEmail,
        subject: emailData.subject,
        body: `Here is the information you requested: ${emailData.template || "No template content."}`,
      })

      addBotMessage(
        `✅ Email sent successfully!\n\n📧 **Subject**: ${emailData.subject}\n📬 **Sent to**: ${userEmail}\n⏰ **Delivery**: Immediate\n\nYou should receive it within the next few minutes. Please check your spam folder if you don't see it in your inbox.`,
        {
          actions: [{ type: "email", label: "Send Another", data: { subject: "Follow-up Information" } }],
        }
      )
      
    } catch (error) {
      console.error("Email error", error)
      addBotMessage(`❌ Failed to send email. Please try again later.`)
    } finally {
      setState((prev) => ({ ...prev, isTyping: false }))
    }
  }

  const handleScheduleAction = async (scheduleData: any) => {
    setState((prev) => ({ ...prev, isTyping: true, scheduleData }))
    // 1. Trigger the modal
    setShowCalendly(true)
    // 2. Add confirmation message
    setTimeout(() => {
      addBotMessage(
        `📅 Your booking assistant is ready!\n\nUse the calendar popup to choose a time slot that fits your schedule.\n\n⏰ Duration: 30-60 min\n👥 Attendees: You + Expert\n📍 Format: Video or Phone\n\nIf you close the popup, you can also use the link below.`,
        {
          actions: [
            {
              type: "link",
              label: "Open in New Tab",
              data: { url: calendlyURL },
            },
            {
              type: "email",
              label: "Request Manual Booking",
              data: { subject: "Need help scheduling", template: "manual_booking" },
            },
          ],
          metadata: {
            intent: "schedule_request",
            confidence: 0.95,
          },
        }
      )

      setState((prev) => ({ ...prev, isTyping: false }))
    }, 1200)
  }



  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
    // Show toast notification
  }

  const toggleChatbot = () => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  }

  const toggleMinimize = () => {
    setState((prev) => ({ ...prev, isMinimized: !prev.isMinimized }))
  }

  const clearChat = () => {
    setState((prev) => ({
      ...prev,
      messages: [],
      context: { ...prev.context, conversationStage: "greeting" },
    }))
    // Re-initialize with greeting
    setTimeout(() => {
      addBotMessage(predefinedResponses.greeting[1])
    }, 100)
  }

  const handleUserInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("userName") as string;
    const phone = data.get("phoneNumber") as string;
    const email = data.get("email") as string;

    const isValid = {
      name: /^[a-zA-Z\s]{2,}$/.test(name),
      phone: /^\+?[0-9\s\-().]{7,}$/.test(phone),
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    };

    if (!isValid.name || !isValid.phone || !isValid.email) {
      alert("Please enter valid name, phone, and email.");
      return;
    }

    setState((prev) => ({
      ...prev,
      context: { ...prev.context, userName: name, phoneNumber: phone, userEmail: email, email },
    }));
  };



  if (!state.isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChatbot}
          className=" rounded-full bg-black hover:from-teal-500 hover:to-cyan-500 text-black shadow-2xl hover:shadow-[#0f2658]/25 transition-all duration-300 group"
          style={{
            animation: "pulse 2s infinite",
          }}
        >
          <MessageCircle className="w-12 h-12 group-hover:scale-110 transition-transform duration-200 text-white" />
        </button>

        {/* Floating notification */}
        <div className="absolute -top-12 -left-32 bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Need help? Chat with our AI assistant!
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div >
      <section
        className={`bg-gray-900/95 backdrop-blur-md border border-white border-2 rounded-xl  shadow-2xl transition-all duration-300 ${state.isMinimized ? "w-auto h-auto" : "w-auto h-[600px] "
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Abaid AI</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={toggleMinimize} className="text-gray-400 hover:text-white">
              {state.isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button onClick={clearChat} className="text-gray-400 hover:text-white">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={toggleChatbot} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!state.isMinimized && (
          <>
            {/* Chat Messages */}
            {!state.context?.userEmail ? (<form onSubmit={handleUserInfoSubmit} className="flex flex-col space-y-2 p-4">

              <div className="text-center py-8">
                <Sparkles className="w-12 h-12 text-[#0f2658] mx-auto mb-4" />
                <h4 className="text-white font-medium mb-2">Welcome to Abaid AI!</h4>
                <p className="text-gray-400 text-sm">I'm here to help you with abaidabbott services and inquiries.</p>
              </div>

              <input
                name="userName"
                placeholder="Your Name"
                className="bg-gray-700 border-white border-2 text-white placeholder-gray-400 text-sm p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3283ca] transition-all duration-200"
              />

              <input
                name="phoneNumber"
                placeholder="Your Phone Number"
                className="bg-gray-700 border-white border-2 text-white placeholder-gray-400 text-sm p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3283ca] transition-all duration-200"
              />

              <input
                name="email"
                placeholder="Your Email"
                className="bg-gray-700 border-white border-2 text-white placeholder-gray-400 text-sm p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3283ca] transition-all duration-200"
              />

              <button
                type="submit"
                className="text-xs border-white border-2 hover:bg-white/10 justify-center p-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                Save Info
              </button>
            </form>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">


                  {state.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.type === "user"
                          ? "bg-[#3283ca]"
                          : "bg-gray-800 text-white border border-white/10"
                          }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === "bot" && <Bot className="w-5 h-5 text-[#0f2658] mt-0.5 flex-shrink-0" />}
                          <div className="flex-1">
                            <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>

                            {message.metadata && (
                              <div className="mt-2 flex items-center space-x-2 text-xs opacity-70">
                                <Brain className="w-3 h-3" />
                                <span>Confidence: {Math.round((message.metadata.confidence || 0) * 100)}%</span>
                                {message.metadata.intent && (
                                  <span className="px-2 py-1 bg-white/10 rounded">{message.metadata.intent}</span>
                                )}
                              </div>
                            )}

                            {message.actions && message.actions.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {message.actions.map((action, index) => (
                                  <button
                                    key={index}


                                    onClick={() => handleActionClick(action)}
                                    className="text-xs border-white border-2 hover:bg-white/10 border-white/30 text-white hover:bg-white hover:text-black rounded-lg px-3 py-1 flex items-center transition-colors duration-200"
                                  >
                                    {action.type === "email" && <Mail className="w-3 h-3 mr-1" />}
                                    {action.type === "call" && <Phone className="w-3 h-3 mr-1" />}
                                    {action.type === "schedule" && <Calendar className="w-3 h-3 mr-1" />}
                                    {action.label}
                                  </button>
                                ))}
                              </div>
                            )}

                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-xs opacity-50">
                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </span>
                              {message.type === "bot" && (
                                <div className="flex items-center space-x-1">
                                  <button


                                    onClick={() => copyMessage(message.content)}
                                    className="p-1 h-auto text-gray-400 hover:text-white"
                                  >
                                    <Copy className="w-3 h-3" />
                                  </button>
                                  <button


                                    className="p-1 h-auto text-gray-400 hover:text-green-400"
                                  >
                                    <ThumbsUp className="w-3 h-3" />
                                  </button>
                                  <button className="p-1 h-auto text-gray-400 hover:text-red-400">
                                    <ThumbsDown className="w-3 h-3" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {state.isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 border border-white/10 rounded-2xl px-4 py-3 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-5 h-5 text-[#0f2658]" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#0f2658] rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-[#0f2658] rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#0f2658] rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />



                  {/* Input */}

                </div>
                {state.messages.length <= 1 ? (
                  <div className="px-4 pb-2">
                    <div className="text-xs text-gray-300 mb-2">Quick Actions:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(action.query)}
                          className="text-xs border-white border-2 hover:bg-white/10 justify-start p-1 rounded-lg text-white hover:bg-white hover:text-black flex items-center"
                        >
                          <action.icon className="w-3 h-3 mr-2" />
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : <div className="p-4 border-t border-white/10">
                  <div className="flex space-x-2">
                    <input
                      ref={inputRef}
                      value={state.currentInput}
                      onChange={(e) => setState((prev) => ({ ...prev, currentInput: e.target.value }))}
                      // onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask me anything about my Experience..."
                      className="bg-gray-700 border-white border-2 text-white placeholder-gray-400 text-sm p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3283ca] transition-all duration-200"
                      disabled={state.isTyping}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!state.currentInput.trim() || state.isTyping}
                      className="bg-[#3283ca] hover:from-teal-500 hover:to-cyan-500 text-black rounded-lg p-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-2 text-xs text-gray-500 text-center">Powered by Abaid AI • Secure & Private</div>
                </div>}

              </>
            )}
          </>
        )}

      </section>
      <CalendlyModal url={calendlyURL} open={showCalendly} onClose={() => setShowCalendly(false)} />


    </div>
  )
}
