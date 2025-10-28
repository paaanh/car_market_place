import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const Buy = () => {
  const cars = [
    {
      id: 1,
      image: "/placeholder.svg",
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2023,
      price: 45000,
      mileage: "5,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      featured: true,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      make: "BMW",
      model: "3 Series",
      year: 2023,
      price: 42000,
      mileage: "8,000 km",
      fuelType: "Diesel",
      transmission: "Automatic",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      make: "Audi",
      model: "A4",
      year: 2022,
      price: 38000,
      mileage: "12,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      featured: true,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 48000,
      mileage: "3,000 km",
      fuelType: "Electric",
      transmission: "Automatic",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      make: "Porsche",
      model: "Cayenne",
      year: 2023,
      price: 75000,
      mileage: "2,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      featured: true,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      make: "Lexus",
      model: "RX 350",
      year: 2022,
      price: 52000,
      mileage: "15,000 km",
      fuelType: "Hybrid",
      transmission: "Automatic",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mua Xe
          </h1>
          <p className="text-muted-foreground">
            Khám phá bộ sưu tập xe cao cấp của chúng tôi
          </p>
        </div>

        <FilterBar />

        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Hiển thị {cars.length} kết quả
          </p>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Bộ lọc nâng cao
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Buy;
