import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Нейронный движок для финансовых хабов",
    category: "FinTech Архитектура",
    impact: "Рост скорости ликвидности на 35%",
    imageId: "portfolio-fintech",
    tags: ["Real-time", "Private Cloud"]
  },
  {
    title: "Система диагностического зрения 2.0",
    category: "Biotech Интеллект",
    impact: "Точность диагностики 92%",
    imageId: "portfolio-healthcare",
    tags: ["Computer Vision", "Ethics"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-4">Кейсы</h2>
            <h3 className="text-4xl sm:text-5xl font-headline font-black leading-tight text-white">
              Влияние в <br /><span className="text-muted-foreground/20 italic text-white/40">глобальном масштабе</span>
            </h3>
          </div>
          <div className="premium-glass px-8 py-4 rounded-full text-white font-black uppercase text-xs tracking-widest cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all flex items-center gap-3 border border-accent/30">
            Весь портфель <ExternalLink size={16} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, index) => {
            const image = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-2xl shadow-black border-2 border-white/5">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-accent text-accent-foreground h-20 w-20 rounded-full shadow-2xl flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <ArrowUpRight size={32} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {project.tags.map(tag => (
                      <Badge key={tag} className="bg-accent/20 backdrop-blur-md text-accent border border-accent/30 font-bold text-[10px] uppercase tracking-widest py-1 px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-accent" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white group-hover:text-accent transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg font-medium flex items-center gap-3 italic">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    Ключевой результат: {project.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}