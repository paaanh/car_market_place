import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingDown, Shield, Clock } from "lucide-react";
import { useState } from "react";

const Finance = () => {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [downPayment, setDownPayment] = useState(6000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate] = useState(4.5);

  const monthlyPayment = ((loanAmount - downPayment) * (interestRate / 100 / 12)) / 
    (1 - Math.pow(1 + (interestRate / 100 / 12), -loanTerm));

  const features = [
    {
      icon: TrendingDown,
      title: "Lãi suất thấp",
      description: "Lãi suất cạnh tranh từ 3.9%",
    },
    {
      icon: Clock,
      title: "Duyệt nhanh",
      description: "Phê duyệt trong 24 giờ",
    },
    {
      icon: Shield,
      title: "Linh hoạt",
      description: "Kỳ hạn từ 12-84 tháng",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tài Chính
          </h1>
          <p className="text-muted-foreground">
            Giải pháp tài chính ô tô linh hoạt và thuận tiện
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Tính toán khoản vay
              </CardTitle>
              <CardDescription>
                Ước tính khoản thanh toán hàng tháng của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Giá xe: ${loanAmount.toLocaleString()}</Label>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={10000}
                  max={100000}
                  step={1000}
                />
              </div>

              <div className="space-y-2">
                <Label>Trả trước: ${downPayment.toLocaleString()}</Label>
                <Slider
                  value={[downPayment]}
                  onValueChange={(value) => setDownPayment(value[0])}
                  min={0}
                  max={loanAmount * 0.5}
                  step={1000}
                />
              </div>

              <div className="space-y-2">
                <Label>Thời hạn: {loanTerm} tháng</Label>
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  min={12}
                  max={84}
                  step={12}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Lãi suất (%)</Label>
                <Input id="interest" type="number" value={interestRate} readOnly />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kết quả ước tính</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-primary/10 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Thanh toán hàng tháng</p>
                <p className="text-4xl font-bold text-primary">
                  ${monthlyPayment.toFixed(2)}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Số tiền vay</span>
                  <span className="font-semibold">
                    ${(loanAmount - downPayment).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trả trước</span>
                  <span className="font-semibold">${downPayment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tổng lãi suất</span>
                  <span className="font-semibold">
                    ${(monthlyPayment * loanTerm - (loanAmount - downPayment)).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="font-semibold">Tổng thanh toán</span>
                  <span className="font-bold text-primary">
                    ${(monthlyPayment * loanTerm + downPayment).toFixed(2)}
                  </span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Đăng ký vay ngay
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Finance;
