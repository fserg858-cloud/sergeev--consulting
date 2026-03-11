"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, MessageCircle, Send, X, User } from "lucide-react";
import { askAIPulseChatbot } from "@/ai/flows/ask-ai-pulse-chatbot";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "bot";
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Здравствуйте! Я AI-ассистент Sergeev Consulting. Как я могу помочь вам сегодня разобраться в наших услугах или концепциях AI?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await askAIPulseChatbot({ query: userMsg });
      setMessages(prev => [...prev, { role: "bot", content: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", content: "Извините, возникли проблемы с подключением. Пожалуйста, попробуйте позже." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-accent/20 bg-secondary/95 backdrop-blur-xl animate-in slide-in-from-bottom-5 rounded-[2rem] overflow-hidden">
          <CardHeader className="bg-primary text-white p-5 flex flex-row items-center justify-between border-b border-accent/10">
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-xl text-accent">
                <Bot size={20} />
              </div>
              <CardTitle className="text-sm font-black uppercase tracking-widest">AI Инсайт</CardTitle>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-full transition-colors text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 overflow-hidden bg-background/40">
            <ScrollArea className="h-full p-6" ref={scrollRef}>
              <div className="space-y-6">
                {messages.map((msg, i) => (
                  <div key={i} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
                    <div className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border",
                      msg.role === "user" ? "bg-accent border-accent text-accent-foreground" : "bg-primary border-accent/20 text-accent"
                    )}>
                      {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={cn(
                      "px-4 py-3 rounded-2xl text-sm max-w-[80%] shadow-sm",
                      msg.role === "user" 
                        ? "bg-accent text-accent-foreground rounded-tr-none" 
                        : "bg-secondary text-white rounded-tl-none border border-accent/10"
                    )}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                      <Bot size={16} />
                    </div>
                    <div className="bg-secondary px-4 py-3 rounded-2xl rounded-tl-none border border-accent/10 flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 border-t border-accent/10 bg-primary/20">
            <form 
              className="flex w-full gap-2" 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            >
              <Input
                placeholder="Спросите об AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 h-12 bg-background/50 border-accent/20 text-white rounded-xl placeholder:text-muted-foreground/50 focus:ring-accent/50"
              />
              <Button size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 w-12 shrink-0 rounded-xl" type="submit" disabled={isLoading}>
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-2xl shadow-[0_20px_50px_rgba(198,138,83,0.3)] bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-110 active:scale-95 group border-none"
        >
          <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
        </Button>
      )}
    </div>
  );
}