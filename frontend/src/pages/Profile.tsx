import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Car, Heart, Settings, User } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    toast.success("Đã cập nhật thông tin");
  };

  // Mock data
  const userPurchases = [
    {
      id: 1,
      car: "2023 BMW M4 Competition",
      date: "15/03/2024",
      price: "$89,900",
      status: "Đã giao xe",
    },
  ];

  const userBookings = [
    {
      id: 1,
      car: "2024 Porsche 911 Turbo S",
      date: "20/03/2024",
      time: "10:00 AM",
      status: "Đã xác nhận",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                NV
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nguyễn Văn A
              </h1>
              <p className="text-muted-foreground">nguyenvana@email.com</p>
            </div>
          </div>

          <Tabs defaultValue="info" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="info" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Thông tin
              </TabsTrigger>
              <TabsTrigger value="purchases" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                Đơn hàng
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Lịch hẹn
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Yêu thích
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Thông tin cá nhân</CardTitle>
                  <Button
                    variant="outline"
                    onClick={() => editing ? handleSave() : setEditing(true)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    {editing ? "Lưu" : "Chỉnh sửa"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Họ và tên</Label>
                      <Input 
                        id="fullName" 
                        defaultValue="Nguyễn Văn A" 
                        disabled={!editing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input 
                        id="phone" 
                        defaultValue="0912345678" 
                        disabled={!editing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      defaultValue="nguyenvana@email.com" 
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Input 
                      id="address" 
                      defaultValue="123 Đường ABC, Quận 1, TP.HCM" 
                      disabled={!editing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Ngày sinh</Label>
                    <Input 
                      id="dob" 
                      type="date" 
                      defaultValue="1990-01-01" 
                      disabled={!editing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="purchases">
              <Card>
                <CardHeader>
                  <CardTitle>Lịch sử mua xe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userPurchases.map((purchase) => (
                      <div
                        key={purchase.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold">{purchase.car}</h3>
                          <p className="text-sm text-muted-foreground">
                            Ngày mua: {purchase.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{purchase.price}</p>
                          <Badge variant="default">{purchase.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Lịch hẹn xem xe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold">{booking.car}</h3>
                          <p className="text-sm text-muted-foreground">
                            {booking.date} - {booking.time}
                          </p>
                        </div>
                        <Badge variant="default">{booking.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Xe yêu thích</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    Xem trang yêu thích để quản lý danh sách xe bạn quan tâm
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
