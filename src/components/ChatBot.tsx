import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  type Message = {
    type: "bot" | "user";
    content: string;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hi! Need help choosing where to start? 👋"
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { type: "user", content: message }]);
    
    // Simple bot responses
    setTimeout(() => {
      let response = "";
      const msg = message.toLowerCase();
      
      if (msg.includes("beginner") || msg.includes("start") || msg.includes("new")) {
        response = "Perfect! I'd recommend starting with 'No CS? Start Here' - it's designed specifically for complete beginners! 🚀";
      } else if (msg.includes("dsa") || msg.includes("algorithm") || msg.includes("data structure")) {
        response = "Sounds like you're ready for DSA Box! It covers everything from arrays to advanced algorithms 💪";
      } else if (msg.includes("web") || msg.includes("website") || msg.includes("frontend")) {
        response = "Web Dev Box is perfect for you! Learn HTML, CSS, React and build amazing projects 🎨";
      } else {
        response = "I can help you choose! Are you a complete beginner, interested in algorithms (DSA), or want to build websites? 🤔";
      }
      
      setMessages(prev => [...prev, { type: "bot", content: response }]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 mb-4 backdrop-blur-glass bg-card/95 border-border/50 shadow-strong animate-slide-up">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Code Helper</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[80%] p-3 rounded-lg text-sm
                      ${msg.type === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question..."
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} size="sm" className="bg-gradient-primary">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
      
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full bg-gradient-primary shadow-medium 
          hover:shadow-strong transition-all duration-300 animate-float
          ${isOpen ? 'rotate-180' : ''}
        `}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </Button>
    </div>
  );
};

export default ChatBot;