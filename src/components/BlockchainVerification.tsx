import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Hash, CheckCircle, Clock, Database } from "lucide-react";

interface BlockchainVerificationProps {
  selectedAreas: string[];
  onBack: () => void;
}

const BlockchainVerification = ({ selectedAreas, onBack }: BlockchainVerificationProps) => {
  const [verificationStep, setVerificationStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [transactionHash, setTransactionHash] = useState("");

  const steps = [
    { id: "hash", label: "Generating Policy Hash", icon: Hash },
    { id: "blockchain", label: "Submitting to Blockchain", icon: Database },
    { id: "verify", label: "Cryptographic Verification", icon: Shield },
    { id: "complete", label: "Verification Complete", icon: CheckCircle },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (verificationStep < steps.length - 1) {
        setVerificationStep(prev => prev + 1);
        setProgress(prev => prev + 25);
      }
    }, 2000);

    if (verificationStep === 1) {
      setTransactionHash("0x" + Math.random().toString(16).slice(2, 18));
    }

    return () => clearInterval(timer);
  }, [verificationStep, steps.length]);

  const isComplete = verificationStep === steps.length - 1;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Comparison
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Blockchain Verification</h2>
          <p className="text-muted-foreground">Securing your insurance policy on the blockchain</p>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Verification Progress */}
        <Card className="p-8 bg-gradient-to-br from-blockchain/5 to-trust/5 border-blockchain/20">
          <div className="text-center mb-6">
            <div className="p-4 bg-blockchain/10 rounded-full w-fit mx-auto mb-4">
              <Shield className="h-12 w-12 text-blockchain" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Blockchain Security in Progress</h3>
            <p className="text-muted-foreground">
              Your policy is being cryptographically secured for maximum transparency and trust
            </p>
          </div>
          
          <Progress value={progress} className="mb-6" />
          
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === verificationStep;
              const isCompleted = index < verificationStep;
              
              return (
                <div 
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                    isActive ? 'bg-blockchain/10 border border-blockchain/20' :
                    isCompleted ? 'bg-trust/10 border border-trust/20' :
                    'bg-muted/30'
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    isCompleted ? 'bg-trust text-trust-foreground' :
                    isActive ? 'bg-blockchain text-blockchain-foreground animate-pulse' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className={`font-medium ${isActive || isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.label}
                    </span>
                  </div>
                  <div>
                    {isCompleted && <CheckCircle className="h-5 w-5 text-trust" />}
                    {isActive && <Clock className="h-5 w-5 text-blockchain animate-spin" />}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        
        {/* Transaction Details */}
        {transactionHash && (
          <Card className="p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Hash className="h-5 w-5 text-blockchain" />
              Transaction Details
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction Hash:</span>
                <Badge variant="secondary" className="font-mono text-xs">
                  {transactionHash}...
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network:</span>
                <span>Ethereum Mainnet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coverage Areas:</span>
                <span>{selectedAreas.length} areas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Verification Status:</span>
                <Badge className={isComplete ? "bg-trust text-trust-foreground" : "bg-blockchain text-blockchain-foreground"}>
                  {isComplete ? "Verified" : "Processing"}
                </Badge>
              </div>
            </div>
          </Card>
        )}
        
        {/* Success State */}
        {isComplete && (
          <Card className="p-8 bg-gradient-to-br from-trust/5 to-primary/5 border-trust/20 text-center">
            <div className="p-4 bg-trust/10 rounded-full w-fit mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-trust" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Verification Complete!</h3>
            <p className="text-muted-foreground mb-6">
              Your insurance policy has been successfully secured on the blockchain. 
              You now have immutable proof of coverage with complete transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-trust to-primary hover:from-trust/90 hover:to-primary/90">
                Download Policy Certificate
              </Button>
              <Button variant="outline">
                View on Blockchain Explorer
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default BlockchainVerification;