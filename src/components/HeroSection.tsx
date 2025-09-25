import { ArrowRight, Shield, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blockchain/5 to-trust/5">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-primary transform rotate-12"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-blockchain transform -rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-trust transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-trust/10 border border-trust/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-trust" />
            <span className="text-sm font-medium text-trust-foreground">Blockchain-Verified Security</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Health Insurance
            <span className="block bg-gradient-to-r from-primary via-blockchain to-trust bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Select your areas of concern on an interactive body map, compare transparent insurance plans, 
            and secure your coverage with blockchain-verified integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90 text-lg px-8 py-6"
              onClick={onGetStarted}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visual Selection</h3>
              <p className="text-muted-foreground">Point and click on body areas that concern you most for personalized insurance matching</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-blockchain/20 hover:border-blockchain/40 transition-all duration-300">
              <div className="p-3 bg-blockchain/10 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-blockchain" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Blockchain Security</h3>
              <p className="text-muted-foreground">Every policy and claim is cryptographically verified for complete transparency</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-trust/20 hover:border-trust/40 transition-all duration-300">
              <div className="p-3 bg-trust/10 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-trust" />
              </div>
              <h3 className="font-semibold text-lg mb-2">User-Centric</h3>
              <p className="text-muted-foreground">Designed for real people, not insurance experts. Simple, clear, and empowering</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;