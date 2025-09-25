import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AnatomySelector from "@/components/AnatomySelector";
import InsuranceComparison from "@/components/InsuranceComparison";
import BlockchainVerification from "@/components/BlockchainVerification";
import EducationHub from "@/components/EducationHub";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [selectedAnatomy, setSelectedAnatomy] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<"select" | "compare" | "verify">("select");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {currentStep === "select" && (
        <>
          <HeroSection onGetStarted={() => setCurrentStep("select")} />
          <AnatomySelector 
            selectedAreas={selectedAnatomy}
            onAreasChange={setSelectedAnatomy}
            onNext={() => setCurrentStep("compare")}
          />
        </>
      )}
      
      {currentStep === "compare" && (
        <InsuranceComparison 
          selectedAreas={selectedAnatomy}
          onBack={() => setCurrentStep("select")}
          onSelectPlan={() => setCurrentStep("verify")}
        />
      )}
      
      {currentStep === "verify" && (
        <BlockchainVerification 
          selectedAreas={selectedAnatomy}
          onBack={() => setCurrentStep("compare")}
        />
      )}
      
      <EducationHub />
    </div>
  );
};

export default Index;