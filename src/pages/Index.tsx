import Hero from "@/components/Hero";
import PlotMap from "@/components/PlotMap";
import PropertyInfo from "@/components/PropertyInfo";
import ContactForm from "@/components/ContactForm";
import VideoPresentation from "@/components/VideoPresentation";
import LocationMap from "@/components/LocationMap";
import NewsBar from "@/components/NewsBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sand to-white">
      <div className="flex flex-col">
        <NewsBar />
        <VideoPresentation />
        <Hero />
        <PropertyInfo />
        <PlotMap />
        <div className="container mx-auto">
          <LocationMap />
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Index;