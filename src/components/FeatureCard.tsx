import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: "primary" | "secondary" | "success";
  href: string;
}

const colorVariants = {
  primary: {
    bg: "bg-gradient-primary",
    shadow: "shadow-soft hover:shadow-medium",
    icon: "text-primary-foreground",
    accent: "bg-primary/10"
  },
  secondary: {
    bg: "bg-gradient-secondary", 
    shadow: "shadow-soft hover:shadow-medium",
    icon: "text-accent-foreground",
    accent: "bg-accent/20"
  },
  success: {
    bg: "bg-gradient-success",
    shadow: "shadow-soft hover:shadow-medium", 
    icon: "text-success-foreground",
    accent: "bg-success/10"
  }
};

const FeatureCard = ({ title, description, icon, color, href }: FeatureCardProps) => {
  const variant = colorVariants[color];
  
  return (
    <a href={href} className="block group">
      <Card className={`
        relative overflow-hidden backdrop-blur-glass bg-card/80 border-0 
        ${variant.shadow} transition-all duration-300 ease-bounce
        hover:scale-105 hover:-translate-y-2 cursor-pointer h-full
      `}>
        <div className="p-8 h-full flex flex-col">
          {/* Icon Background */}
          <div className={`
            w-16 h-16 rounded-2xl ${variant.bg} ${variant.accent} 
            flex items-center justify-center mb-6 
            group-hover:animate-glow transition-all duration-300
          `}>
            <div className={variant.icon}>
              {icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {description}
            </p>
          </div>
          
          {/* Arrow Icon */}
          <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-smooth">
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          {/* Decorative gradient */}
          <div className={`
            absolute -top-24 -right-24 w-48 h-48 ${variant.bg} 
            rounded-full opacity-5 group-hover:opacity-10 
            transition-opacity duration-300 blur-2xl
          `} />
        </div>
      </Card>
    </a>
  );
};

export default FeatureCard;