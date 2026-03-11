import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Д-р Елена Ванс",
    role: "Главный AI-архитектор",
    specialty: "Neural Networks & Generative AI",
    imageId: "team-member-1"
  },
  {
    name: "Маркус Торн",
    role: "Руководитель стратегии",
    specialty: "Digital Transformation & Ethics",
    imageId: "team-member-2"
  }
];

const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));

export function Team() {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold mb-4">Эксперты Sergeev Consulting</h2>
          <p className="text-muted-foreground text-lg">
            Наша многопрофильная команда сочетает глубокую техническую экспертизу со стратегическим бизнес-мышлением.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {teamMembers.map((member, index) => {
            const image = imageMap.get(member.imageId);
            return (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-48 rounded-2xl overflow-hidden shrink-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-accent font-semibold">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground">
                    Специализация в <span className="text-primary font-medium">{member.specialty}</span> с более чем 15-летним опытом работы в индустрии.
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
