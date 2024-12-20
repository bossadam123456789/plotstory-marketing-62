import Hero from "@/components/Hero";
import PlotMap from "@/components/PlotMap";
import PropertyInfo from "@/components/PropertyInfo";
import ContactForm from "@/components/ContactForm";
import VideoPresentation from "@/components/VideoPresentation";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sand to-white">
      <div className="max-w-[2000px] mx-auto">
        <VideoPresentation />
        <Hero />
        <PropertyInfo />
        <PlotMap />
        <ContactForm />
      </div>
    </main>
  );
};

export default Index;