import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Shield, DollarSign, Star, Check } from "lucide-react";

interface InsuranceComparisonProps {
  selectedAreas: string[];
  onBack: () => void;
  onSelectPlan: () => void;
}

const mockPlans = [
  {
    id: "basic",
    name: "Essential Care",
    provider: "HealthFirst",
    monthlyPremium: 89,
    deductible: 2000,
    coverage: 80,
    rating: 4.2,
    features: ["Basic preventive care", "Emergency coverage", "Generic medications"],
    matchScore: 75,
    blockchainVerified: true,
  },
  {
    id: "premium",
    name: "Complete Protection",
    provider: "MediSecure",
    monthlyPremium: 156,
    deductible: 1000,
    coverage: 90,
    rating: 4.7,
    features: ["Comprehensive coverage", "Specialist visits", "Brand medications", "Dental included"],
    matchScore: 94,
    blockchainVerified: true,
  },
  {
    id: "family",
    name: "Family Guardian",
    provider: "CareNetwork",
    monthlyPremium: 203,
    deductible: 1500,
    coverage: 85,
    rating: 4.5,
    features: ["Family coverage", "Maternity care", "Mental health", "Vision included"],
    matchScore: 82,
    blockchainVerified: true,
  },
];

const InsuranceComparison = ({ selectedAreas, onBack, onSelectPlan }: InsuranceComparisonProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Selection
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Insurance Plan Comparison</h2>
          <p className="text-muted-foreground">Plans matched to your selected areas: {selectedAreas.join(", ")}</p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {mockPlans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`p-6 transition-all duration-300 cursor-pointer ${
              selectedPlan === plan.id 
                ? 'border-primary shadow-lg bg-primary/5' 
                : 'hover:border-primary/50 hover:shadow-md'
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Plan Header */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <Badge variant="secondary">{plan.provider}</Badge>
                  {plan.blockchainVerified && (
                    <Badge className="bg-trust text-trust-foreground">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{plan.rating}</span>
                  </div>
                  <div className={`font-medium ${plan.matchScore >= 90 ? 'text-trust' : plan.matchScore >= 80 ? 'text-blockchain' : 'text-primary'}`}>
                    {plan.matchScore}% Match
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">${plan.monthlyPremium}</div>
                    <div className="text-sm text-muted-foreground">Monthly Premium</div>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">${plan.deductible.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Annual Deductible</div>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{plan.coverage}%</div>
                    <div className="text-sm text-muted-foreground">Coverage After Deductible</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-trust" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Button */}
              <div className="lg:w-48">
                <Button 
                  className={`w-full ${
                    selectedPlan === plan.id 
                      ? 'bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90' 
                      : ''
                  }`}
                  variant={selectedPlan === plan.id ? "default" : "outline"}
                >
                  {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {selectedPlan && (
        <div className="mt-8 flex justify-center">
          <Button 
            size="lg" 
            onClick={onSelectPlan}
            className="bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90 px-8"
          >
            Proceed to Blockchain Verification
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default InsuranceComparison;