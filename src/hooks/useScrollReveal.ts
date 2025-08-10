import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "24px",
      duration: 700,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      delay: 100,
      reset: false,
      mobile: true,
      viewFactor: 0.15,
    });

    sr.reveal("[data-sr=fade-up]", { origin: "bottom", interval: 80 });
    sr.reveal("[data-sr=slide-in]", { origin: "right" });

    return () => {
      // No explicit cleanup required for scrollreveal
    };
  }, []);
}
