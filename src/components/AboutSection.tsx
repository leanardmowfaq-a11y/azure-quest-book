import { Shield, Heart, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our boats meet the highest safety standards with experienced crew",
    },
    {
      icon: Heart,
      title: "Comfort & Luxury",
      description: "Premium amenities and comfortable spaces for an unforgettable experience",
    },
    {
      icon: Users,
      title: "Professional Crew",
      description: "Certified captains and staff dedicated to your perfect journey",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in maritime tourism and customer service",
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
            We're committed to providing exceptional boat experiences with safety, comfort, and professionalism at the forefront of everything we do.
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
