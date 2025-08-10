import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { vehicles, formatINR } from "@/data/vehicles";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FinanceCalculator from "@/components/FinanceCalculator";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VehicleDetails() {
  const { slug } = useParams();
  const vehicle = useMemo(() => vehicles.find((v) => v.slug === slug), [slug]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Vehicle not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative">
          <div className="container mx-auto px-0 md:px-4">
            <div className="relative h-[56vw] max-h-[520px] w-full overflow-hidden rounded-none md:rounded-lg">
              <img src={vehicle.images[0]} alt={`${vehicle.name} hero image`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="relative z-10 flex h-full items-end p-6 md:p-12">
                <div>
                  <h1 className="text-3xl md:text-5xl font-semibold">{vehicle.name}</h1>
                  <p className="mt-2 text-muted-foreground max-w-2xl">{vehicle.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button variant="hero">Book Test Drive</Button>
                    <Button variant="accent">Book Now</Button>
                    <Button variant="outline">Download Brochure</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {vehicle.images.map((img, i) => (
                      <CarouselItem key={i} className="basis-full md:basis-1/2">
                        <img src={img} alt={`${vehicle.name} gallery ${i + 1}`} className="w-full rounded-lg object-cover" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <h2 className="mt-8 text-2xl font-semibold">Specifications & Variants</h2>
                <div className="mt-4 overflow-x-auto rounded-lg border">
                  <table className="min-w-full text-sm">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left">Variant</th>
                        <th className="px-4 py-3 text-left">Engine</th>
                        <th className="px-4 py-3 text-left">Payload</th>
                        <th className="px-4 py-3 text-left">Mileage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3">Base</td>
                        <td className="px-4 py-3">1.4L Diesel</td>
                        <td className="px-4 py-3">750 kg</td>
                        <td className="px-4 py-3">20 km/l</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Plus</td>
                        <td className="px-4 py-3">1.5L Diesel</td>
                        <td className="px-4 py-3">900 kg</td>
                        <td className="px-4 py-3">19 km/l</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="mt-10 text-2xl font-semibold">Customer Reviews</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <blockquote className="rounded-lg border p-4 text-sm">
                    “Fantastic payload and mileage for city deliveries.” — R. Kumar
                  </blockquote>
                  <blockquote className="rounded-lg border p-4 text-sm">
                    “Sales and finance were quick and transparent.” — S. Singh
                  </blockquote>
                </div>
              </div>

              <aside>
                <div className="rounded-lg border p-6">
                  <div className="text-sm text-muted-foreground">Starting at</div>
                  <div className="text-3xl font-semibold">{formatINR(vehicle.price)}</div>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button variant="hero">Book Test Drive</Button>
                    <Button variant="accent">Book Now</Button>
                    <Button variant="outline">Download Price List</Button>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border p-6">
                  <h3 className="text-xl font-semibold">Quick EMI Estimate</h3>
                  <p className="text-sm text-muted-foreground">Example: 48 mo at 9.5% p.a.</p>
                  <div className="mt-4 text-2xl font-semibold">
                    {(() => {
                      const p = vehicle.price * 0.85; // 15% down
                      const r = 9.5 / 12 / 100;
                      const n = 48;
                      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                      return `₹ ${Math.round(emi).toLocaleString("en-IN")}/mo`;
                    })()}
                  </div>
                  <div className="mt-4">
                    <Button variant="accent">Apply for Finance</Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur p-3 md:hidden">
        <div className="container mx-auto flex gap-3">
          <Button className="flex-1" variant="hero">Book Test Drive</Button>
          <Button className="flex-1" variant="accent">Book Now</Button>
        </div>
      </div>
    </div>
  );
}
