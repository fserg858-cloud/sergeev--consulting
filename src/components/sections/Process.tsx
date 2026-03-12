
"use client";

import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Бесплатный разбор",
    time: "20–30 минут",
    description: "Находим потерю денег/времени, подбираем 1 пилот, считаем окупаемость. Это не консалтинг ради консалтинга."
  },
  {
    step: "02",
    title: "Платный пилот",
    time: "7–10 дней",
    description: "Внедрение одного конкретного механизма под ключ в вашу текущую систему."
  },
  {
    step: "03",
    title: "Замер результата",
    time: "Сразу после",
    description: "Смотрим сухие цифры до/после внедрения AI-механизма."
  },
  {
    step: "04",
    title: "Масштабирование",
    time: "Перспектива",
    description: "Если пилот дает результат — расширяем AI на другие узлы вашего бизнеса."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Как мы работаем</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-white">
            Путь к результату <br /><span className="text-muted-foreground/40 italic">из 4 прозрачных шагов</span>
          </h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((item, i) => (
              <div key={i} className="relative group">
                <div className="premium-glass p-6 lg:p-8 rounded-[2rem] border border-white/5 group-hover:border-accent/40 transition-all h-full flex flex-col">
                  <div className="text-5xl font-black text-accent/20 mb-6 group-hover:text-accent/40 transition-colors">
                    {item.step}
                  </div>
                  <div className="flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-widest mb-4">
                    <CheckCircle2 size={12} />
                    {item.time}
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 leading-tight">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
