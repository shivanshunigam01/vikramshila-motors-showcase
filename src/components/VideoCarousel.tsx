import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import video4 from "@/assets/video-4.jpg";

const videos = [
  { id: 1, title: "Product Walkthrough", thumb: video1, url: "https://www.youtube.com/embed/VEoTcxmQ16Y" },
  { id: 2, title: "Customer Testimonial", thumb: video2, url: "https://www.youtube.com/embed/1Q8fG0TtVAY" },
  { id: 3, title: "Service Tour", thumb: video3, url: "https://www.youtube.com/embed/ZTLAx3VDX7g" },
  { id: 4, title: "Dealer Intro", thumb: video4, url: "https://www.youtube.com/embed/Sagg08DrO5U" },
];

export default function VideoCarousel() {
  return (
    <section id="videos" className="py-12 md:py-16">
      <div className="container mx-auto px-4" data-sr="fade-up">
        <header className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Videos</h2>
          <p className="text-muted-foreground mt-1">Walkthroughs, testimonials, and more</p>
        </header>
        <Carousel opts={{ align: "start", dragFree: true, loop: true }}>
          <CarouselContent>
            {videos.map((v) => (
              <CarouselItem key={v.id} className="basis-3/4 md:basis-1/3 lg:basis-1/4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative w-full overflow-hidden rounded-lg hover-scale">
                      <img src={v.thumb} alt={`${v.title} video thumbnail`} className="aspect-video w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant">
                          <Play className="h-6 w-6" />
                        </span>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src={v.url}
                        title={v.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
