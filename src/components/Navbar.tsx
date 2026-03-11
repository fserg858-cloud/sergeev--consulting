
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Подход", href: "#approach" },
  { name: "Решения", href: "#solutions" },
  { name: "Процесс", href: "#process" },
  { name: "Цены", href: "#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="premium-glass rounded-2xl px-6 h-16 flex justify-between items-center border border-white/10 shadow-lg">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-accent rounded-xl text-accent-foreground transition-all group-hover:scale-110 shadow-lg shadow-accent/20">
              <Cpu size={22} className="group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-headline text-lg font-black tracking-tighter text-white leading-tight uppercase">
              Sergeev <span className="text-accent italic font-medium">Consulting</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.25em] font-black text-muted-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all hover:translate-y-[-2px] text-[10px] uppercase font-black tracking-widest px-6 h-10">
              <Link href="#contact">Начать разбор</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-accent p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute w-full px-4 pt-2 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="premium-glass rounded-2xl p-6 shadow-2xl border border-white/10">
          <div className="space-y-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent text-accent-foreground mt-4 rounded-xl font-black text-xs uppercase tracking-widest">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Начать разбор
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
