import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productCategories, vehicles, formatINR } from "@/data/vehicles";
import TestDriveDialog from "@/components/TestDriveDialog";

export default function ProductGrid() {
  return (
    <section id="products" className="py-12 md:py-16">
      <div className="container mx-auto px-4" data-sr="fade-up">
        <header className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Product Showcase</h2>
          <p className="text-muted-foreground mt-1">Explore our complete range</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productCategories.map((cat) => (
            <Card key={cat.key} className="group overflow-hidden hover-scale">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={cat.image} alt={`${cat.name} category vehicle`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{cat.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">Built for business — performance, safety and comfort.</p>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-2">
                <div className="flex gap-2">
                  <TestDriveDialog
                    trigger={<Button className="flex-1" variant="hero">Book Test Drive</Button>}
                    vehicleName={cat.name}
                  />
                  <a
                    className="flex-1"
                    href={`https://wa.me/?text=${encodeURIComponent(`Hello Vikramshila Automobiles, I want to book ${cat.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" variant="accent">Book This Vehicle</Button>
                  </a>
                </div>
                <Link
                  to={`/vehicles/${(vehicles.find(v => v.category === cat.name)?.slug) || vehicles[0].slug}`}
                  className="story-link text-sm"
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4" data-sr="fade-up">
          {vehicles.slice(0, 2).map((v) => (
            <Card key={v.slug} className="hover-scale overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={v.images[0]} alt={`${v.name} featured image`} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{v.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">{v.description}</p>
                <p className="mt-2 font-medium">Starting at {formatINR(v.price)}</p>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-2">
                <div className="flex gap-2">
                  <TestDriveDialog
                    trigger={<Button className="flex-1" variant="hero">Book Test Drive</Button>}
                    vehicleName={v.name}
                  />
                  <a
                    className="flex-1"
                    href={`https://wa.me/?text=${encodeURIComponent(`Hello Vikramshila Automobiles, I want to book ${v.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" variant="accent">Book This Vehicle</Button>
                  </a>
                </div>
                <Link to={`/vehicles/${v.slug}`} className="story-link text-sm">View Details</Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
