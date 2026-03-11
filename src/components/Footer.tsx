import { Cpu, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-white py-24 relative overflow-hidden border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-3 bg-accent rounded-2xl text-accent-foreground shadow-xl shadow-accent/10">
                <Cpu size={28} strokeWidth={2.5} />
              </div>
              <span className="font-headline text-2xl font-black tracking-tighter text-white">Sergeev Consulting</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed font-medium italic">
              "Мы не просто предсказываем будущее. Мы проектируем системы, которые его строят."
            </p>
            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="h-12 w-12 rounded-xl bg-accent/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all group border border-accent/10"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-accent mb-10">Возможности</h4>
            <ul className="space-y-6 text-muted-foreground font-bold text-sm uppercase tracking-[0.2em]">
              {[
                { name: "Услуги", href: "#services" },
                { name: "Портфолио", href: "#portfolio" },
                { name: "Команда", href: "#team" },
                { name: "База знаний", href: "#knowledge" }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-accent transition-all flex items-center gap-2 group">
                    {item.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-accent mb-10">Поддержка</h4>
            <ul className="space-y-6 text-muted-foreground font-bold text-sm uppercase tracking-[0.2em]">
              {["Конфиденциальность", "Условия", "Cookie Policy", "Контакты"].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-accent transition-all">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground/40 text-xs font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Sergeev Consulting | Сергеев Консалтинг.</p>
          <p className="text-accent/40 tracking-[0.4em]">Спроектировано для совершенства</p>
        </div>
      </div>
    </footer>
  );
}