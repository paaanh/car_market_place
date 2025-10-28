import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, CreditCard, Home, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";

const Success = () => {
  const location = useLocation();
  const { type, car, date, time } = location.state || {};

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#8B5CF6", "#EC4899", "#F59E0B"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8B5CF6", "#EC4899", "#F59E0B"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const isPayment = type === "payment";
  const isBooking = type === "booking";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <CheckCircle2 className="h-24 w-24 text-primary animate-in zoom-in duration-500" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {isPayment && "Thanh toán thành công!"}
            {isBooking && "Đặt lịch thành công!"}
            {!isPayment && !isBooking && "Hoàn tất!"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            {isPayment && "Đơn hàng của bạn đã được xác nhận và đang được xử lý"}
            {isBooking && "Lịch hẹn của bạn đã được ghi nhận"}
          </p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              {car && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    {isPayment && <CreditCard className="h-5 w-5 text-primary flex-shrink-0" />}
                    {isBooking && <Calendar className="h-5 w-5 text-primary flex-shrink-0" />}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {isPayment ? "Xe đã mua" : "Xe đặt lịch"}
                      </p>
                      <p className="font-semibold">
                        {car.year} {car.make} {car.model}
                      </p>
                    </div>
                  </div>

                  {isPayment && car.price && (
                    <div className="flex items-center gap-3 text-left">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Tổng thanh toán</p>
                        <p className="font-semibold text-primary">
                          ${(car.price + 500 + car.price * 0.1).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {isBooking && date && time && (
                    <div className="flex items-center gap-3 text-left">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Thời gian hẹn</p>
                        <p className="font-semibold">
                          {date} - {time}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm">
                  {isPayment && "Chúng tôi đã gửi email xác nhận đến địa chỉ của bạn với chi tiết đơn hàng."}
                  {isBooking && "Chúng tôi sẽ liên hệ với bạn qua email và điện thoại để xác nhận lịch hẹn."}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <Home className="h-4 w-4" />
                Về trang chủ
              </Button>
            </Link>
            <Link to="/profile">
              <Button className="gap-2 bg-gradient-to-r from-primary to-primary/80">
                Xem đơn hàng của tôi
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;
