import { Wrench, ShieldCheck, Package, Bell, BarChart3 } from "lucide-react";

const services = [
  { icon: Package, title: "Tata Genuine Parts", desc: "OEM-grade parts for maximum uptime." },
  { icon: ShieldCheck, title: "Tata OK", desc: "Certified pre-owned vehicles with trust." },
  { icon: Bell, title: "Tata Alert", desc: "24x7 breakdown assistance on highways." },
  { icon: Wrench, title: "Suraksha", desc: "Comprehensive AMC for worry-free ownership." },
  { icon: BarChart3, title: "Fleetedge", desc: "Smart fleet telematics and analytics." },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-4" data-sr="fade-up">
        <header className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <p className="text-muted-foreground mt-1">Complete support for your business</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#services" className="story-link mt-3 inline-block text-sm">Know More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
