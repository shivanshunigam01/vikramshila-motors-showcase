import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/data/vehicles";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section id="home" className="relative">
      <div className="container mx-auto px-0 md:px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {heroImages.map((src, idx) => (
              <CarouselItem key={idx}>
                <div className="relative h-[56vw] max-h-[520px] w-full overflow-hidden rounded-none md:rounded-lg">
                  <img
                    src={src}
                    alt={`Hero banner ${
                      idx + 1
                    } showcasing commercial vehicles`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                  <div className="relative z-10 flex h-full items-center px-6 md:px-12 text-primary-foreground">
                    <div className="max-w-2xl animate-enter" data-sr="fade-up">
                      <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Premium Commercial Vehicles for Every Business
                      </h1>
                      <p className="mt-3 text-muted-foreground md:text-lg">
                        Explore SCV, Pickup, LCV, ICV, MCV, Winger and Buses —
                        engineered for performance and profitability.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button variant="hero">Book Test Drive</Button>
                        <Button variant="accent">View Current Offers</Button>
                        <Button className="bg-sky-400 text-black hover:bg-yellow-400 transition-colors">
                          Download Brochure
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
