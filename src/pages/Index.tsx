import Hero from "@/components/Hero";
import PlotMap from "@/components/PlotMap";
import PropertyInfo from "@/components/PropertyInfo";
import ContactForm from "@/components/ContactForm";
import VideoPresentation from "@/components/VideoPresentation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <VideoPresentation />
      <Hero />
      <PropertyInfo />
      <PlotMap />
      <ContactForm />
    </main>
  );
};

export default Index;