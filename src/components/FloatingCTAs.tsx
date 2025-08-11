import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Car, Gauge } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="accent" className="shadow-elegant hover:shadow-glow">
            <Gauge className="mr-2 h-4 w-4" /> Test Drive
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book a Test Drive</DialogTitle>
          </DialogHeader>
          <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); toast({ title: "Request received", description: "Our team will contact you shortly." }); }}>
            <input className="rounded-md border px-3 py-2" placeholder="Your Name" required />
            <input className="rounded-md border px-3 py-2" placeholder="Phone Number" required />
            <input className="rounded-md border px-3 py-2" placeholder="Preferred Vehicle" />
            <Button variant="hero" type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>

      <a
        href="https://wa.me/?text=Hello%20Vikramshila%20Automobiles%2C%20I%20want%20to%20book%20now."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="hero" className="shadow-elegant hover:shadow-glow">
          <Car className="mr-2 h-4 w-4" /> Book Now
        </Button>
      </a>
    </div>
  );
}
