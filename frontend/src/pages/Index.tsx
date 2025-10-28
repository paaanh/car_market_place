import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import CarCard from "@/components/CarCard";

const Index = () => {
  // Mock data for featured cars
  const featuredCars = [
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <FilterBar />

        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 AutoLux. Premium automotive marketplace.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
