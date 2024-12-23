import Hero from "@/components/Hero";
import PlotMap from "@/components/PlotMap";
import PropertyInfo from "@/components/PropertyInfo";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import NewsBar from "@/components/NewsBar";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Index = () => {
  const handleCall = () => {
    window.location.href = 'tel:+254729113327';
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sand to-white">
      <div className="flex flex-col">
        <NewsBar />
        <Hero />
        <PropertyInfo />
        <PlotMap />
        <div className="container mx-auto">
          <LocationMap />
        </div>
        <ContactForm />
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-medium flex items-center gap-2 shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Index;