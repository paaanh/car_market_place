import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Gauge, Fuel, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "@/contexts/FavoritesContext";
import { cn } from "@/lib/utils";

interface CarCardProps {
  id: number;
  image: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  featured?: boolean;
}

const CarCard = ({ 
  id,
  image, 
  make, 
  model, 
  year, 
  price, 
  mileage, 
  fuelType,
  transmission,
  featured 
}: CarCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isLiked = isFavorite(id);
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${year} ${make} ${model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        <Button
          size="icon"
          variant="secondary"
          className={cn(
            "absolute top-4 right-4 transition-all",
            isLiked ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
        >
          <Heart className={cn("h-4 w-4", isLiked && "fill-primary text-primary")} />
        </Button>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {year} {make} {model}
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ${price.toLocaleString()}
          </p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gauge className="h-4 w-4 text-primary" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Fuel className="h-4 w-4 text-primary" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{transmission}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/car/${id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-[var(--glow-primary)] transition-all">
            Xem chi tiết
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
