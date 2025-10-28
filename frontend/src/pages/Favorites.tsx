import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Heart } from "lucide-react";

// Mock data - same as Buy page
const allCars = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
    make: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: 89900,
    mileage: "2,500 mi",
    fuelType: "Gasoline",
    transmission: "Auto",
    featured: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1617531653520-b3e9e22d50e5?w=800&q=80",
    make: "Mercedes",
    model: "AMG GT",
    year: 2023,
    price: 145000,
    mileage: "1,200 mi",
    fuelType: "Gasoline",
    transmission: "Auto",
    featured: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    make: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: 218000,
    mileage: "500 mi",
    fuelType: "Gasoline",
    transmission: "Auto",
    featured: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800&q=80",
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 109990,
    mileage: "3,100 mi",
    fuelType: "Electric",
    transmission: "Auto",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1580414057673-3a9bafd6f7b4?w=800&q=80",
    make: "Audi",
    model: "RS7 Sportback",
    year: 2023,
    price: 125500,
    mileage: "4,800 mi",
    fuelType: "Gasoline",
    transmission: "Auto",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    make: "Lamborghini",
    model: "Huracán",
    year: 2023,
    price: 274390,
    mileage: "1,900 mi",
    fuelType: "Gasoline",
    transmission: "Auto",
  },
];

const Favorites = () => {
  const { favorites } = useFavorites();
  const favoriteCars = allCars.filter((car) => favorites.includes(car.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Xe Yêu Thích
          </h1>
          <p className="text-muted-foreground">
            Danh sách các xe bạn đã lưu
          </p>
        </div>

        {favoriteCars.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart className="h-20 w-20 text-muted-foreground/40 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Chưa có xe yêu thích</h2>
            <p className="text-muted-foreground">
              Nhấn vào biểu tượng trái tim trên các xe để thêm vào danh sách yêu thích
            </p>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              {favoriteCars.length} xe trong danh sách
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Favorites;
