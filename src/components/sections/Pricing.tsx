
"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Стоимость и условия</h2>
          <h3 className="text-4xl sm:text-5xl font-headline font-black text-white">Прозрачные условия</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="premium-glass p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-accent/20 flex flex-col justify-between">
            <div>
              <div className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-6">Старт</div>
              <h4 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight text-gradient">Разбор воронки</h4>
              <div className="text-4xl sm:text-5xl font-black text-white mb-10">0 ₽</div>
              <ul className="space-y-6 mb-12">
                {["Аудит текущей воронки", "Поиск узких мест", "Расчет ROI пилота", "План внедрения за неделю"].map(item => (
                  <li key={item} className="flex items-center gap-4 text-muted-foreground font-bold">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Check size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="w-full bg-accent text-accent-foreground h-16 rounded-2xl font-black text-lg shadow-xl shadow-accent/20 border-none">
              <Link href="#contact">Записаться на разбор</Link>
            </Button>
          </div>

          <div className="bg-secondary/60 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/5 flex flex-col justify-between mt-8 lg:mt-0">
            <div>
              <div className="text-muted-foreground font-black uppercase tracking-[0.3em] text-xs mb-6">Результат</div>
              <h4 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">Разработка пилота</h4>
              <div className="text-3xl sm:text-4xl font-black text-white mb-4">от 60 000 ₽</div>
              <div className="text-muted-foreground font-medium mb-10">до 120 000 ₽ (зависит от сложности)</div>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="premium-glass p-6 rounded-2xl border border-white/5">
                  <div className="text-[10px] font-black text-accent uppercase mb-1">Срок</div>
                  <div className="text-white font-black">7–10 дней</div>
                </div>
                <div className="premium-glass p-6 rounded-2xl border border-white/5">
                  <div className="text-[10px] font-black text-accent uppercase mb-1">Оплата</div>
                  <div className="text-white font-black">50% Предоплата</div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-medium text-center italic">
              "Внедряем один конкретный механизм, который окупает себя в первый месяц работы."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
