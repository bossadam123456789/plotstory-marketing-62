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
        className="w-full h-[30vh] md:h-[50vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/5d3dc6c9-13f3-43e7-8e32-6638c87553d5.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
          <div className="text-center text-white space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight">Premium Land Plots</h1>
            <p className="text-lg md:text-xl font-light">Exclusive Real Estate Opportunity</p>
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