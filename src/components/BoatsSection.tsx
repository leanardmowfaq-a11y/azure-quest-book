import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock } from "lucide-react";
import luxuryBoat from "@/assets/boat-luxury.jpg";
import sailingBoat from "@/assets/boat-sailing.jpg";
import fishingBoat from "@/assets/boat-fishing.jpg";
import catamaranBoat from "@/assets/boat-catamaran.jpg";

const BoatsSection = () => {
  const boats = [
    {
      name: "Luxury Cruiser",
      type: "Premium Yacht",
      image: luxuryBoat,
      price: "$299/hour",
      capacity: "12 guests",
      description: "Experience ultimate luxury with our flagship yacht featuring premium amenities and elegant design.",
    },
    {
      name: "Ocean Sailor",
      type: "Sailing Yacht",
      image: sailingBoat,
      price: "$199/hour",
      capacity: "8 guests",
      description: "Feel the wind in your sails with our beautiful sailing yacht, perfect for romantic getaways.",
    },
    {
      name: "Adventure Fisher",
      type: "Fishing Charter",
      image: fishingBoat,
      price: "$249/tour",
      capacity: "6 guests",
      description: "Equipped with professional fishing gear for an exciting deep-sea fishing adventure.",
    },
    {
      name: "Island Explorer",
      type: "Catamaran",
      image: catamaranBoat,
      price: "$349/hour",
      capacity: "16 guests",
      description: "Spacious catamaran perfect for large groups and island-hopping adventures.",
    },
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="boats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of premium boats, each offering a unique experience on the water.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boats.map((boat, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-ocean transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full font-semibold text-sm">
                    {boat.price}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <span className="text-sm text-secondary font-medium">{boat.type}</span>
                <h3 className="text-2xl font-bold text-foreground mb-2">{boat.name}</h3>
                <p className="text-muted-foreground mb-4">{boat.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{boat.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Flexible</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button onClick={scrollToBooking} className="w-full bg-secondary hover:bg-secondary/90">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoatsSection;
