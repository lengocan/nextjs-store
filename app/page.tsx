import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>

  );
}
