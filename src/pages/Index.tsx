import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import FinanceCalculator from "@/components/FinanceCalculator";
import VideoCarousel from "@/components/VideoCarousel";
import Offers from "@/components/Offers";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />

        <section id="about" className="py-12 md:py-16">
          <div className="container mx-auto px-4" data-sr="fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold">About Vikramshila Automobiles</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl">
              We are an authorized Tata Motors dealership delivering an exceptional ownership experience across sales, service, and finance. Our expert team is driven by trust and pride to support your business at every mile.
            </p>
          </div>
        </section>

        <ProductGrid />
        <FinanceCalculator />
        <VideoCarousel />
        <Offers />
        <Services />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
};

export default Index;
