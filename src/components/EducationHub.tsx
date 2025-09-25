import { Book, Video, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationHub = () => {
  const resources = [
    {
      type: "guide",
      title: "Understanding Blockchain Insurance",
      description: "Learn how blockchain technology ensures transparency and security in health insurance",
      icon: Book,
      duration: "5 min read",
      category: "Blockchain Basics",
    },
    {
      type: "video",
      title: "How to Choose the Right Coverage",
      description: "Interactive tutorial on selecting insurance plans based on your anatomy selections",
      icon: Video,
      duration: "8 min watch",
      category: "Coverage Guide",
    },
    {
      type: "article",
      title: "Claims Process Explained",
      description: "Step-by-step guide to filing and tracking claims with blockchain verification",
      icon: FileText,
      duration: "3 min read",
      category: "Claims Help",
    },
    {
      type: "community",
      title: "Community Forum",
      description: "Connect with other users and get answers to your insurance questions",
      icon: Users,
      duration: "Join now",
      category: "Community",
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "guide": return "text-primary";
      case "video": return "text-blockchain";
      case "article": return "text-trust";
      case "community": return "text-secondary-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "Blockchain Basics": return "default";
      case "Coverage Guide": return "secondary";
      case "Claims Help": return "outline";
      default: return "secondary";
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Education & Resources</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Empower yourself with knowledge. Learn about insurance, blockchain technology, and make informed decisions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col h-full">
                <div className={`p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  resource.type === "guide" ? "bg-primary/10" :
                  resource.type === "video" ? "bg-blockchain/10" :
                  resource.type === "article" ? "bg-trust/10" :
                  "bg-secondary"
                }`}>
                  <Icon className={`h-6 w-6 ${getIconColor(resource.type)}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={getBadgeVariant(resource.category)} className="text-xs">
                      {resource.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{resource.duration}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                
                <div className="mt-4">
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Newsletter Signup */}
      <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-blockchain/5 border-primary/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Stay Informed</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates on blockchain insurance technology and policy changes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-to-r from-primary to-blockchain hover:from-primary/90 hover:to-blockchain/90">
              Subscribe
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default EducationHub;