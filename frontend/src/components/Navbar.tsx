import { Car, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { favorites } = useFavorites();
  
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AutoLux
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/buy" className="text-foreground hover:text-primary transition-colors">
              Mua xe
            </Link>
            <Link to="/sell" className="text-foreground hover:text-primary transition-colors">
              Bán xe
            </Link>
            <Link to="/finance" className="text-foreground hover:text-primary transition-colors">
              Tài chính
            </Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors">
              Giới thiệu
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
