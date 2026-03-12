"use client";

import { useState } from "react";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      telegram: formData.get("telegram"),
      business: formData.get("business"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSent(true);
        (event.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full max-w-xl mx-auto">
      <div>
        <input type="text" name="name" required placeholder="Полное имя" 
               className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors" />
      </div>
      <div>
        <input type="text" name="telegram" required placeholder="Ник в Telegram (@username)" 
               className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors" />
      </div>
      <div>
        <textarea name="business" required placeholder="Кратко о бизнесе и текущей задаче" rows={4} 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"></textarea>
      </div>
      <button type="submit" disabled={isLoading || isSent} 
              className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50">
        {isLoading ? "Отправка..." : isSent ? "✅ Заявка ушла. Мы свяжемся с вами." : "Записаться на разбор"}
      </button>
    </form>
  );
}
