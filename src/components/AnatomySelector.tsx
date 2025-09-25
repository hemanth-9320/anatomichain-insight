import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User, Heart, Brain, Bone, Eye } from "lucide-react";

interface AnatomySelectorProps {
  selectedAreas: string[];
  onAreasChange: (areas: string[]) => void;
  onNext: () => void;
}

const bodyAreas = [
  { id: "head", name: "Head & Brain", icon: Brain, position: { top: "10%", left: "50%" }, color: "primary" },
  { id: "eyes", name: "Eyes & Vision", icon: Eye, position: { top: "15%", left: "45%" }, color: "blockchain" },
  { id: "heart", name: "Heart & Cardiovascular", icon: Heart, position: { top: "30%", left: "50%" }, color: "trust" },
  { id: "lungs", name: "Lungs & Respiratory", icon: User, position: { top: "35%", left: "40%" }, color: "primary" },
  { id: "stomach", name: "Digestive System", icon: User, position: { top: "45%", left: "50%" }, color: "blockchain" },
  { id: "bones", name: "Bones & Joints", icon: Bone, position: { top: "60%", left: "50%" }, color: "trust" },
  { id: "legs", name: "Legs & Mobility", icon: User, position: { top: "75%", left: "50%" }, color: "primary" },
];

const AnatomySelector = ({ selectedAreas, onAreasChange, onNext }: AnatomySelectorProps) => {
  const toggleArea = (areaId: string) => {
    if (selectedAreas.includes(areaId)) {
      onAreasChange(selectedAreas.filter(id => id !== areaId));
    } else {
      onAreasChange([...selectedAreas, areaId]);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Select Your Areas of Concern</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Click on the body areas you want insurance coverage for. Our AI will match you with the best plans.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Interactive Body Map */}
        <div className="relative">
          <Card className="p-8 bg-gradient-to-br from-secondary/20 to-accent/20 border-2 border-dashed border-muted">
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-primary/5 to-blockchain/5 rounded-full">
              {/* Body Outline */}
              <div className="absolute inset-4 border-2 border-muted rounded-full flex items-center justify-center">
                <User className="h-48 w-48 text-muted-foreground/30" />
              </div>
              
              {/* Clickable Areas */}
              {bodyAreas.map((area) => {
                const Icon = area.icon;
                const isSelected = selectedAreas.includes(area.id);
                const colorClasses = {
                  primary: isSelected 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                    : 'bg-card hover:bg-muted border-2 border-muted hover:border-primary text-muted-foreground hover:text-primary',
                  blockchain: isSelected 
                    ? 'bg-blockchain text-blockchain-foreground shadow-lg scale-110' 
                    : 'bg-card hover:bg-muted border-2 border-muted hover:border-blockchain text-muted-foreground hover:text-blockchain',
                  trust: isSelected 
                    ? 'bg-trust text-trust-foreground shadow-lg scale-110' 
                    : 'bg-card hover:bg-muted border-2 border-muted hover:border-trust text-muted-foreground hover:text-trust'
                };
                return (
                  <button
                    key={area.id}
                    onClick={() => toggleArea(area.id)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
                      colorClasses[area.color as keyof typeof colorClasses]
                    }`}
                    style={area.position}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
        
        {/* Selection Summary */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Selected Areas ({selectedAreas.length})</h3>
            <div className="space-y-3">
              {selectedAreas.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Click on body areas to select your insurance priorities
                </p>
              ) : (
                <div className="grid gap-2">
                  {selectedAreas.map((areaId) => {
                    const area = bodyAreas.find(a => a.id === areaId);
                    if (!area) return null;
                    return (
                      <div key={areaId} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <div className="flex items-center gap-3">
                          <area.icon className={`h-5 w-5 ${
                            area.color === 'primary' ? 'text-primary' :
                            area.color === 'blockchain' ? 'text-blockchain' :
                            'text-trust'
                          }`} />
                          <span className="font-medium">{area.name}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleArea(areaId)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          ✕
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Card>
          
          {selectedAreas.length > 0 && (
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-blockchain/5 border-primary/20">
              <h4 className="font-semibold mb-3">Coverage Insights</h4>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p>• {selectedAreas.length} specialized coverage areas selected</p>
                <p>• AI matching will prioritize these areas in plan comparison</p>
                <p>• Blockchain verification ensures accurate coverage details</p>
              </div>
              
              <Button 
                onClick={onNext} 
                className="w-full bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90"
                disabled={selectedAreas.length === 0}
              >
                Find My Insurance Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnatomySelector;