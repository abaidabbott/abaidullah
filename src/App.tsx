import Home from './pages/Home';
import './index.css';
import { ChatbotProvider } from './components/chatbot/chatbot-provider';

function App() {
  return <ChatbotProvider><Home /></ChatbotProvider>;
}

export default App;
