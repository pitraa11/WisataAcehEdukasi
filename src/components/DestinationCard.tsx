import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
}

export const DestinationCard = ({
  id,
  name,
  location,
  category,
  description,
  imageUrl,
}: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-foreground/80 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/destination/${id}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Lihat Informasi Lengkap
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
