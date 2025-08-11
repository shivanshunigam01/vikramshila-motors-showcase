import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const offers = [
  { id: 1, title: "₹0 Down Payment", desc: "Start your journey today", expires: "2025-12-31" },
  { id: 2, title: "7.5% ROI", desc: "Lowest interest rate", expires: "2025-11-30" },
  { id: 3, title: "₹10,000 Exchange Bonus", desc: "Upgrade and save", expires: "2025-10-15" },
];

export default function Offers() {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section id="offers" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4" data-sr="fade-up">
        <header className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Current Schemes & Offers</h2>
          <p className="text-muted-foreground mt-1">Limited-time benefits — claim now</p>
        </header>
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
          <CarouselContent>
            {offers.map((o) => (
              <CarouselItem key={o.id} className="basis-full md:basis-1/3">
                <div className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold">{o.title}</h3>
                  <p className="text-muted-foreground mt-1">{o.desc}</p>
                  <p className="mt-4 text-sm">Valid till: {new Date(o.expires).toLocaleDateString()}</p>
                  <div className="mt-6">
                    <Button
                      variant="accent"
                      onClick={() => {
                        const msg = encodeURIComponent(`Hello Vikramshila Automobiles, I want to claim the offer: ${o.title}.`);
                        window.open(`https://wa.me/?text=${msg}`, "_blank");
                      }}
                    >
                      Claim This Offer
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
