import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Database, LineChart, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Стратегическая карта AI",
    description: "Высокоуровневый архитектурный консалтинг для согласования инициатив AI с 10-летним видением вашего предприятия.",
    icon: BrainCircuit,
    benefits: ["Доминирование на рынке", "Управление рисками", "Векторы роста"]
  },
  {
    title: "Автономные системы",
    description: "Разработка самооптимизирующихся AI-агентов, которые обрабатывают сложные циклы принятия решений без вмешательства человека.",
    icon: Zap,
    benefits: ["Эластичное масштабирование", "Нулевая задержка", "Операционная гибкость"]
  },
  {
    title: "Глубокая аналитика данных",
    description: "Превращение необработанных исторических данных в предиктивные движки, выявляющие скрытые рыночные возможности.",
    icon: LineChart,
    benefits: ["Прогнозируемый ROI", "Обнаружение аномалий", "Синтез трендов"]
  },
  {
    title: "Инфраструктура Next-Gen",
    description: "Создание основ высокопроизводительных вычислений, необходимых для хостинга LLM и частных нейронных сетей.",
    icon: Database,
    benefits: ["Усиленная приватность", "Multi-Cloud операции", "Эффективность вычислений"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Экспертиза</h2>
            <h3 className="text-4xl sm:text-5xl font-headline font-black leading-tight text-white">
              Куем будущее <br /><span className="text-muted-foreground/40 italic">когнитивного бизнеса</span>
            </h3>
          </div>
          <p className="text-lg text-muted-foreground font-medium max-w-sm border-l-2 border-accent pl-6 py-2">
            Мы не просто продаем софт. Мы создаем мощные технологические преимущества для современной эпохи.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary/40 border-none shadow-2xl hover:bg-secondary/60 transition-all duration-500 group rounded-[2.5rem] overflow-hidden hover:-translate-y-2 border-gradient">
              <CardHeader className="p-8 pb-0">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500 shadow-inner">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <CardTitle className="text-2xl font-black tracking-tight mb-4 text-white">{service.title}</CardTitle>
                <CardDescription className="text-base font-medium leading-relaxed text-muted-foreground group-hover:text-white/80 transition-colors">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-6">
                <div className="space-y-3 pt-4 border-t border-accent/10">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 text-accent font-black text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Подробнее <ArrowRight size={14} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}