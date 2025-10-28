import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Share2, 
  Fuel, 
  Gauge, 
  Calendar, 
  Cog,
  MapPin,
  CheckCircle2,
  Phone,
  Mail
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = {
    id: id,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 45000,
    mileage: 5000,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Hà Nội, Việt Nam",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  };

  const specs = [
    { label: "Năm sản xuất", value: car.year, icon: Calendar },
    { label: "Số km", value: `${car.mileage.toLocaleString()} km`, icon: Gauge },
    { label: "Nhiên liệu", value: car.fuelType, icon: Fuel },
    { label: "Hộp số", value: car.transmission, icon: Cog },
  ];

  const features = [
    "Hệ thống âm thanh cao cấp",
    "Camera 360 độ",
    "Cửa sổ trời toàn cảnh",
    "Ghế da cao cấp",
    "Hệ thống định vị GPS",
    "Cảm biến đỗ xe",
    "Điều hòa tự động",
    "Phanh ABS, EBD",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={car.image} 
                alt={`${car.make} ${car.model}`}
                className="w-full h-[500px] object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Nổi bật
              </Badge>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary" className="backdrop-blur-lg bg-background/50">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="backdrop-blur-lg bg-background/50">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {car.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Hình ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                />
              ))}
            </div>

            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="specs">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="specs">Thông số</TabsTrigger>
                    <TabsTrigger value="features">Trang bị</TabsTrigger>
                    <TabsTrigger value="description">Mô tả</TabsTrigger>
                  </TabsList>
                  <TabsContent value="specs" className="space-y-4 mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                          <spec.icon className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">{spec.label}</p>
                            <p className="font-semibold">{spec.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="description" className="mt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Mercedes-Benz C-Class là biểu tượng của sự sang trọng và hiệu suất. 
                      Với thiết kế tinh tế, nội thất cao cấp và công nghệ tiên tiến, 
                      chiếc xe này mang đến trải nghiệm lái xe đẳng cấp. Xe được bảo dưỡng 
                      định kỳ tại đại lý chính hãng, đầy đủ giấy tờ pháp lý.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-2">
                  {car.make} {car.model}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{car.location}</span>
                </div>
                <Separator className="my-4" />
                <p className="text-4xl font-bold text-primary mb-6">
                  ${car.price.toLocaleString()}
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/80" 
                    size="lg"
                    onClick={() => navigate("/payment", { state: { car } })}
                  >
                    Mua ngay
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => navigate("/booking", { state: { car } })}
                  >
                    Đặt lịch xem xe
                  </Button>
                  <Button className="w-full" size="lg" variant="secondary">
                    <Phone className="mr-2 h-4 w-4" />
                    Gọi ngay
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Tính toán khoản vay</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Giá xe</span>
                    <span className="font-semibold">${car.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trả trước (20%)</span>
                    <span className="font-semibold">${(car.price * 0.2).toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thanh toán/tháng</span>
                    <span className="font-bold text-primary">~$650/tháng</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarDetail;
