import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-6 py-2 glass-panel rounded-full text-sm font-medium text-primary uppercase tracking-wider">
            Museum Digital Kemuhamadiyahan
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up text-glow">
          BAB V
        </h1>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Pedoman Hidup Islami
          <br />
          <span className="text-primary">Warga Muhammadiyah</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Jelajahi perjalanan historis, hakikat, dan implementasi pedoman hidup Islami
          yang membimbing umat dalam menjalankan kehidupan sehari-hari sesuai ajaran Islam
        </p>

        <button
          onClick={scrollToContent}
          className="group animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
          aria-label="Scroll ke konten"
        >
          <div className="glass-panel px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-primary/10 transition-all duration-300">
            <span className="font-medium">Mulai Eksplorasi</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
