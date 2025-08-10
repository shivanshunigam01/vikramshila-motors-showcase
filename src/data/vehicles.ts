export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  price: number; // in INR
  description: string;
  images: string[];
};

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

import scvImg from "@/assets/product-scv-cargo.jpg";
import pickupImg from "@/assets/product-pickup.jpg";
import lcvImg from "@/assets/product-lcv.jpg";
import icvImg from "@/assets/product-icv.jpg";
import mcvImg from "@/assets/product-mcv.jpg";
import wingerImg from "@/assets/product-winger.jpg";
import busesImg from "@/assets/product-buses.jpg";

export const heroImages: string[] = [hero1, hero2, hero3, hero4];

export const productCategories = [
  { key: "scv-cargo", name: "SCV Cargo", image: scvImg },
  { key: "pickup", name: "Pickup", image: pickupImg },
  { key: "lcv", name: "LCV", image: lcvImg },
  { key: "icv", name: "ICV", image: icvImg },
  { key: "mcv", name: "MCV", image: mcvImg },
  { key: "winger", name: "Winger", image: wingerImg },
  { key: "buses", name: "Buses", image: busesImg },
] as const;

export const vehicles: Vehicle[] = [
  {
    slug: "ace-pro",
    name: "Ace Pro",
    category: "SCV Cargo",
    price: 565000,
    description:
      "Efficient small commercial vehicle ideal for city logistics with impressive mileage and payload.",
    images: [scvImg, hero1, hero3],
  },
  {
    slug: "intra-v70",
    name: "Intra V70",
    category: "LCV",
    price: 815000,
    description:
      "Advanced LCV engineered for power, comfort, and profitability across urban and rural routes.",
    images: [lcvImg, hero3, hero2],
  },
  {
    slug: "yodha-pickup",
    name: "Yodha Pickup",
    category: "Pickup",
    price: 945000,
    description:
      "Rugged and reliable pickup designed for tough terrains with superior payload capacity.",
    images: [pickupImg, hero4, hero2],
  },
  {
    slug: "scv-cargo-pro",
    name: "SCV Cargo Range",
    category: "SCV Cargo",
    price: 610000,
    description:
      "Versatile SCV cargo range built for efficiency, uptime, and low running costs.",
    images: [scvImg, hero1, hero2],
  },
];

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
