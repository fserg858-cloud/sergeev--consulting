
"use client";

import { ShieldCheck, Zap, BarChart3 } from "lucide-react";

const principles = [
  {
    title: "Не ломаем то, что работает",
    description: "Внедряем AI только туда, где уже есть процесс, но он недожимает клиентов или сжигает время команды.",
    icon: Zap
  },
  {
    title: "Хирургия, а не поэзия",
    description: "Мы не обещаем абстрактный рост продаж. Мы считаем окупаемость в простых цифрах на вашем процессе.",
    icon: BarChart3
  },
  {
    title: "Честность на старте",
    description: "Если до запуска пилота цифры не сходятся — мы прямо об этом говорим и не берем проект.",
    icon: ShieldCheck
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Наш подход</h2>
          <h3 className="text-4xl sm:text-5xl font-headline font-black text-white mb-8">
            Мы не продаем <br /><span className="text-muted-foreground/40 italic">«AI ради AI»</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <div key={i} className="premium-glass p-10 rounded-[2.5rem] border border-accent/10 hover:border-accent/30 transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground font-medium leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
