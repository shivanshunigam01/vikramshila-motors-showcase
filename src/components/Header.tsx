import { Menu, Phone, MessageCircle, ChevronDown, Search, MapPin, FileText } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Finance", href: "#finance" },
  { label: "Offers", href: "#offers" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-semibold text-primary leading-none">
              Vikramshila Automobiles
            </span>
            <span className="text-xs text-muted-foreground">
              Driven by Trust. Delivered with Pride
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="story-link text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+910000000000" aria-label="Call us" className="inline-flex items-center gap-1 text-sm">
            <Phone className="h-4 w-4 text-primary" /> +91 XXXXXXXX
          </a>
          <a
            href="https://wa.me/?text=Hello%20Vikramshila%20Automobiles,%20I%20would%20like%20to%20book%20a%20test%20drive."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm"
          >
            <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
          </a>
          <Button variant="hero">Book Test Drive</Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-base">
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4" variant="hero">Book Test Drive</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
