import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ExhibitSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: ReactNode;
  accentColor?: string;
}

const ExhibitSection = ({ 
  id, 
  title, 
  subtitle, 
  icon: Icon, 
  children,
  accentColor = "primary"
}: ExhibitSectionProps) => {
  return (
    <section id={id} className="min-h-screen py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      
      {/* Glow Effect */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-${accentColor}/10 rounded-full blur-[100px] animate-float`}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 glass-panel rounded-2xl mb-6 glow-effect">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-glow">
            {title}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Content */}
        <div className="exhibit-card">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ExhibitSection;
