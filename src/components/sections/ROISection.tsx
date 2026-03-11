
"use client";

import { Calculator, TrendingUp, Wallet } from "lucide-react";

export function ROISection() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Экономика внедрения</h2>
            <h3 className="text-4xl sm:text-5xl font-headline font-black text-white mb-8 leading-tight">
              Считаем окупаемость <br /><span className="text-accent italic">до того, как вы заплатите</span>
            </h3>
            
            <div className="premium-glass p-8 rounded-3xl border border-accent/20 mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground">
                  <Calculator size={24} />
                </div>
                <span className="font-black text-white uppercase tracking-widest text-sm">Формула прибыли</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gradient text-center py-4 border-y border-white/10">
                Окупаемость = <span className="text-accent">ΔПрибыль</span> / <span className="text-white">Cost</span>
              </div>
              <p className="mt-6 text-muted-foreground text-sm font-medium text-center">
                Мы беремся за проект только если ΔПрибыль в месяц превышает стоимость пилота
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="premium-glass p-10 rounded-[3rem] border border-white/5 relative shadow-2xl">
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-accent flex items-center justify-center text-accent-foreground shadow-xl">
                <TrendingUp size={32} />
              </div>
              <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <Wallet className="text-accent" /> Пример расчета
              </h4>
              <div className="space-y-6 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Два менеджера тратят <span className="text-white font-bold">2 часа в день</span> на рутинные ответы. Это 88 часов в месяц.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  При стоимости часа 500–800 ₽ бизнес теряет до <span className="text-accent font-black">70 000 ₽ ежемесячно</span>.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white font-black italic">
                    "AI-ассистент окупается сразу, дальше — приносит чистую экономию."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
