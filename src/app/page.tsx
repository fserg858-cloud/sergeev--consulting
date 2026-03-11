
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Approach } from "@/components/sections/Approach";
import { Solutions } from "@/components/sections/Solutions";
import { ROISection } from "@/components/sections/ROISection";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { ContactForm } from "@/components/sections/ContactForm";
import { ChatWidget } from "@/components/sections/ChatWidget";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Approach />
        <Solutions />
        <ROISection />
        <Pricing />
        <Process />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster />
    </div>
  );
}
