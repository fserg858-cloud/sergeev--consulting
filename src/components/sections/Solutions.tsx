
"use client";

import { MessageSquare, Users, UserCog, Scan, Repeat, Clock } from "lucide-react";

const solutions = [
  {
    title: "Бот на обработку заявок",
    description: "Мгновенный ответ и квалификация лида, пока он не остыл.",
    icon: MessageSquare
  },
  {
    title: "Реанимация старой базы",
    description: "Возвращаем тех, кто «молчал как мертвый карп».",
    icon: Users
  },
  {
    title: "AI-помощник для менеджера",
    description: "Ускоряет ответы и забирает рутину у вашей команды.",
    icon: UserCog
  },
  {
    title: "Сбор контактов офлайн",
    description: "Перевод трафика из физических точек в оцифрованную базу.",
    icon: Scan
  },
  {
    title: "Повторные касания",
    description: "Автоматический дожим клиента сразу после покупки.",
    icon: Repeat
  },
  {
    title: "Автоответы 24/7",
    description: "Устранение потерь заявок в нерабочее время и праздники.",
    icon: Clock
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Меню решений</h2>
            <h3 className="text-4xl sm:text-5xl font-headline font-black text-white">
              6 точек роста, которые <br /><span className="text-muted-foreground/40 italic">запускаются за неделю</span>
            </h3>
          </div>
          <p className="text-lg text-muted-foreground font-medium max-w-sm border-l-2 border-accent pl-6 py-2">
            Клиент узнает свою боль в конкретных механизмах, которые мы внедряем под ключ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div key={i} className="bg-secondary/40 p-8 rounded-[2rem] border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-accent/5 transition-transform group-hover:scale-110 group-hover:text-accent/10">
                <item.icon size={120} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
