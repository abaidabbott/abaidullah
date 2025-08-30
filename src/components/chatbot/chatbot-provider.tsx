

import type React from "react"
import { createContext, useContext, useState } from "react"
// import Chatbot from "./chatbot"

interface ChatbotContextType {
  isEnabled: boolean
  toggleChatbot: () => void
  sendMessage: (message: string) => void
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error("useChatbot must be used within a ChatbotProvider")
  }
  return context
}

interface ChatbotProviderProps {
  children: React.ReactNode
  enabled?: boolean
}

export function ChatbotProvider({ children, enabled = true }: ChatbotProviderProps) {
  const [isEnabled, setIsEnabled] = useState(enabled)

  const toggleChatbot = () => {
    setIsEnabled((prev) => !prev)
  }

  const sendMessage = (message: string) => {
    // This would trigger the chatbot to process a message
    // Implementation depends on your chatbot state management
    console.log("Sending message to chatbot:", message)
  }

  return (
    <ChatbotContext.Provider value={{ isEnabled, toggleChatbot, sendMessage }}>
      {children}
      {/* {isEnabled && <Chatbot  />} */}
    </ChatbotContext.Provider>
  )
}

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error("useChatbotContext must be used within a ChatbotProvider")
  }
  return context
}