import { useEffect, useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

function calculateEMI(principal: number, annualRate: number, months: number) {
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / months;
  const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  return emi;
}

export default function FinanceCalculator({ defaultPrice = 650000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPayment, setDownPayment] = useState(Math.round(defaultPrice * 0.15));
  const [tenure, setTenure] = useState(48); // months
  const [interest, setInterest] = useState(9.5); // annual %

  const loanAmount = Math.max(price - downPayment, 0);
  const emi = useMemo(() => calculateEMI(loanAmount, interest, tenure), [loanAmount, interest, tenure]);

  return (
    <section id="finance" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4" data-sr="fade-up">
        <header className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Finance Calculator</h2>
          <p className="text-muted-foreground mt-1">Estimate your monthly EMI instantly</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="price">Vehicle Price (₹)</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label>Down Payment (₹)</Label>
                <span className="text-sm text-muted-foreground">{downPayment.toLocaleString("en-IN")}</span>
              </div>
              <Slider min={0} max={price} step={5000} value={[downPayment]} onValueChange={(v) => setDownPayment(v[0])} />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label>Tenure (months)</Label>
                <span className="text-sm text-muted-foreground">{tenure} mo</span>
              </div>
              <Slider min={12} max={84} step={6} value={[tenure]} onValueChange={(v) => setTenure(v[0])} />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label>Interest Rate (% p.a.)</Label>
                <span className="text-sm text-muted-foreground">{interest}%</span>
              </div>
              <Slider min={6} max={18} step={0.5} value={[interest]} onValueChange={(v) => setInterest(v[0])} />
            </div>
          </div>

          <div className="rounded-lg border p-6 bg-card/70">
            <h3 className="text-xl font-semibold">Your EMI</h3>
            <p className="mt-1 text-muted-foreground">Based on your selections</p>
            <div className="mt-6 text-4xl font-semibold">₹ {Math.round(emi).toLocaleString("en-IN")}/mo</div>
            <p className="mt-2 text-sm text-muted-foreground">Loan amount: ₹ {loanAmount.toLocaleString("en-IN")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="accent"
                onClick={() => {
                  const msg = encodeURIComponent(
                    `Hello Vikramshila Automobiles, please share finance details. Price: ₹${price.toLocaleString("en-IN")}, Down Payment: ₹${downPayment.toLocaleString("en-IN")}, Tenure: ${tenure} months, Interest: ${interest}%.`
                  );
                  window.open(`https://wa.me/?text=${msg}`, "_blank");
                }}
              >
                Send to WhatsApp
              </Button>
              <Button
                variant="hero"
                onClick={() => toast({ title: "Application Received", description: "Our team will contact you shortly." })}
              >
                Apply for Finance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
