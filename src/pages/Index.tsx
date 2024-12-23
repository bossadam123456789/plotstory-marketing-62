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
        className="w-full h-[40vh] md:h-[70vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
          <div className="text-center text-white space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-6xl font-light tracking-tight">Premium Land Plots</h1>
            <p className="text-lg md:text-2xl font-light">Exclusive Real Estate Opportunity</p>
          </div>
        </div>
      </div>
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