import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">Vikramshila Automobiles Pvt. Ltd.</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">Authorized Tata Motors Dealership</p>
          <p className="mt-4 text-sm">Phone: +91 XXXXXXXX<br/>Email: sales@vikramshilaauto.com<br/>WhatsApp: +91 XXXXXXXX</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Branch Location</h4>
          <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              title="Vikramshila Automobiles on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28763.706540901293!2d85.090!3d25.594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5853f1d7b8f7%3A0x0!2sTata%20Motors%20Dealership!5e0!3m2!1sen!2sin!4v1691400000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing dealership location"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium">Newsletter</h4>
          <p className="mt-2 text-sm text-primary-foreground/80">Get updates on new launches and offers.</p>
          <div className="mt-4 flex gap-2">
            <Input placeholder="Your email address" />
            <Button variant="accent">Subscribe</Button>
          </div>
          <div className="mt-6 text-sm">Follow us: <a className="story-link" href="#">Facebook</a> · <a className="story-link" href="#">Instagram</a> · <a className="story-link" href="#">YouTube</a></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm">
        © {new Date().getFullYear()} Vikramshila Automobiles Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
