
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  telegram: z.string().min(2, "Ник в Telegram обязателен"),
  business: z.string().optional(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      telegram: "",
      business: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в Telegram для согласования времени разбора.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles size={14} className="animate-pulse" />
            <span>Финальный шаг</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-headline font-black text-white mb-6 text-gradient">Давайте проверим вашу воронку</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            За 20 минут бесплатно покажем, где AI даст быстрый и измеримый эффект именно в вашем бизнесе.
          </p>
        </div>

        <div className="premium-glass p-8 sm:p-12 rounded-[3rem] border border-accent/20 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-black uppercase text-xs tracking-widest ml-2">Полное имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} className="h-16 bg-background/50 border-white/10 rounded-2xl text-white px-6 focus:ring-accent/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telegram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-black uppercase text-xs tracking-widest ml-2">Ник в Telegram</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {...field} className="h-16 bg-background/50 border-white/10 rounded-2xl text-white px-6 focus:ring-accent/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-black uppercase text-xs tracking-widest ml-2">Кратко о бизнесе</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Примеры: Онлайн-школа, хотим реанимировать базу. Мебельный салон, ищем бота для заявок."
                        className="min-h-[120px] bg-background/50 border-white/10 rounded-2xl text-white p-6 focus:ring-accent/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent text-accent-foreground py-8 rounded-2xl text-xl font-black shadow-2xl shadow-accent/30 hover:scale-[1.02] transition-transform border-none">
                Записаться на разбор <Send className="ml-2 h-6 w-6" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
