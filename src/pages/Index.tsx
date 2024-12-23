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
      <div 
        className="w-full h-[50vh] md:h-[70vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 p-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">Premium Land Plots</h1>
            <p className="text-xl md:text-2xl font-light">Exclusive Real Estate Opportunity</p>
          </div>
        </div>
      </div>
      <NewsBar />
      <div className="max-w-[2000px] mx-auto">
        <VideoPresentation />
        <Hero />
        <PropertyInfo />
        <PlotMap />
        <div className="container mx-auto px-4 py-16">
          <LocationMap />
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Index;