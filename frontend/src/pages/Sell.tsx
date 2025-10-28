import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle } from "lucide-react";

const Sell = () => {
  const benefits = [
    "Định giá xe miễn phí",
    "Quy trình bán xe nhanh chóng",
    "Thanh toán an toàn",
    "Hỗ trợ pháp lý đầy đủ",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bán Xe
          </h1>
          <p className="text-muted-foreground">
            Bán xe của bạn một cách dễ dàng và nhanh chóng
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <p className="font-semibold">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Thông tin xe của bạn</CardTitle>
            <CardDescription>
              Điền thông tin chi tiết để chúng tôi có thể định giá chính xác
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="make">Hãng xe</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn hãng xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                    <SelectItem value="tesla">Tesla</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Dòng xe</Label>
                <Input id="model" placeholder="Ví dụ: C-Class" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Năm sản xuất</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn năm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileage">Số km đã đi</Label>
                <Input id="mileage" type="number" placeholder="Ví dụ: 15000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Giá mong muốn (USD)</Label>
              <Input id="price" type="number" placeholder="Ví dụ: 45000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Mô tả</Label>
              <Textarea 
                id="description" 
                placeholder="Mô tả tình trạng xe, trang bị, lịch sử bảo dưỡng..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>Hình ảnh xe</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Kéo thả hoặc click để tải ảnh lên
                </p>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Gửi thông tin
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Sell;
