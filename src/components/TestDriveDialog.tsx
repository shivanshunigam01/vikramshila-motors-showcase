import { useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function TestDriveDialog({
  trigger,
  vehicleName,
}: {
  trigger: React.ReactNode;
  vehicleName?: string;
}) {
  const [open, setOpen] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    toast({ title: "Request received", description: "Our team will contact you shortly." });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a Test Drive</DialogTitle>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={onSubmit}>
          <input className="rounded-md border px-3 py-2" placeholder="Your Name" required />
          <input className="rounded-md border px-3 py-2" placeholder="Phone Number" required />
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Preferred Vehicle"
            defaultValue={vehicleName}
          />
          <Button variant="hero" type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
