import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Переход к Agentic AI: Почему рабочие процессы меняются",
    date: "15 мая 2024",
    category: "Тренды",
    author: "Елена Ванс",
    imageId: "blog-1"
  },
  {
    title: "Этика в эпоху генеративного интеллекта",
    date: "28 апреля 2024",
    category: "Инсайты",
    author: "Маркус Торн",
    imageId: "service-strategy"
  }
];

export function KnowledgeHub() {
  return (
    <section id="knowledge" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-headline font-bold mb-4">База знаний</h2>
            <p className="text-muted-foreground text-lg">
              Передовые инсайты и глубокое погружение в технологии, формирующие наше завтра.
            </p>
          </div>
          <button className="text-primary font-bold hover:underline flex items-center gap-2">
            Читать блог <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {articles.map((article, index) => {
            const image = PlaceHolderImages.find((img) => img.id === article.imageId);
            return (
              <Card key={index} className="overflow-hidden border-none shadow-md group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative h-64 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none font-bold">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest mb-2">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <span>{article.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">
                    По мере развития искусственного интеллекта переход от простых чат-ботов к сложным автономным агентам переопределяет подход предприятий к автоматизации...
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
