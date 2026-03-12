
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-background">
      <div className="hero-glow top-[-200px] right-[-200px] opacity-100" />
      <div className="hero-glow bottom-[-200px] left-[-200px] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8 mx-auto lg:mx-0">
              <Sparkles size={14} className="animate-pulse text-accent" />
              <span>Разбор воронки бесплатно</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-black leading-[1.1] mb-8 text-gradient">
              Бесплатно найдем узкое место, где ваш бизнес <span className="text-accent italic">теряет деньги</span>, и устраним его с помощью AI за 7–10 дней.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
              Без перестройки процессов с нуля, найма новых людей и долгих теорий. Внедряем один понятный пилот под ключ. Первый шаг — бесплатный разбор воронки (20-30 мин).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 px-10 rounded-2xl text-lg font-black shadow-2xl shadow-accent/20 transition-all hover:scale-105 border-none">
                <Link href="#contact" className="flex items-center gap-2">
                  Записаться на разбор <ArrowRight size={20} />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm uppercase tracking-widest px-4">
                <CheckCircle2 size={18} className="text-accent" />
                <span>20–30 минут</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="premium-glass p-8 rounded-[2.5rem] border border-accent/20 rotate-3 translate-y-8">
              <div className="space-y-6">
                <div className="h-2 w-24 bg-accent/30 rounded-full" />
                <div className="h-2 w-full bg-muted/20 rounded-full" />
                <div className="h-2 w-3/4 bg-muted/20 rounded-full" />
                <div className="pt-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-accent uppercase mb-1">Status</div>
                    <div className="text-white font-bold text-lg">AI Pilot Active</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 premium-glass p-6 rounded-[2rem] border border-accent/20 -rotate-6 shadow-2xl">
              <div className="text-3xl font-black text-white mb-1">+35%</div>
              <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Efficiency boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
