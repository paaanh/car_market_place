import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Find Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dream Car
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Browse thousands of premium vehicles from trusted dealers
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 bg-card p-4 rounded-xl border border-border shadow-xl">
            <Input
              placeholder="Search by make, model, or keyword..."
              className="flex-1 bg-background border-border"
            />
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-[var(--glow-primary)] transition-all">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
