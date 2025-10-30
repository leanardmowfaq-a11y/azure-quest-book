import { Shield, Heart, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Our boat meets the highest safety standards with experienced captain",
    },
    {
      icon: Heart,
      title: "Comfort & Relaxation",
      description: "Comfortable seating and peaceful atmosphere for a memorable river journey",
    },
    {
      icon: Users,
      title: "Perfect for Groups",
      description: "Accommodates up to 8 passengers, ideal for families and friends",
    },
    {
      icon: Award,
      title: "Scenic Routes",
      description: "Experience the most beautiful sections of the river with our guided tours",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer peaceful river cruises with safety, comfort, and professionalism. Perfect for families, friends, and special occasions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
