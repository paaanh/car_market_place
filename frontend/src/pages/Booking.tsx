import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const carDetails = location.state?.car || {
    make: "BMW",
    model: "M4 Competition",
    year: 2024,
  };

  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("10:00");

  const timeSlots = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error("Vui lòng chọn ngày");
      return;
    }

    toast.success("Đặt lịch thành công!");
    navigate("/success", { 
      state: { 
        type: "booking",
        car: carDetails,
        date: date.toLocaleDateString("vi-VN"),
        time: timeSlot
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Đặt Lịch Xem Xe
          </h1>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin đặt lịch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Họ và tên *</Label>
                        <Input id="fullName" required />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Số điện thoại *</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          Chọn ngày *
                        </Label>
                        <div className="flex justify-center border rounded-lg p-4">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            className="rounded-md"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Chọn giờ *
                        </Label>
                        <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((slot) => (
                              <div key={slot} className="flex items-center">
                                <RadioGroupItem value={slot} id={slot} className="peer sr-only" />
                                <Label
                                  htmlFor={slot}
                                  className="flex items-center justify-center w-full p-3 border rounded-lg cursor-pointer hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 transition-colors"
                                >
                                  {slot}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Ghi chú</Label>
                        <Textarea 
                          id="notes" 
                          placeholder="Nhập các yêu cầu đặc biệt hoặc câu hỏi của bạn"
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary/80"
                    >
                      Xác nhận đặt lịch
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Car Info Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Thông tin xe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Car" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {carDetails.year} {carDetails.make} {carDetails.model}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Showroom sẽ liên hệ với bạn để xác nhận lịch hẹn
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
