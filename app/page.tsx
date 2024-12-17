import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import { Divide } from "lucide-react";
import LoadingContainer from "@/components/global/LoadingContainer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={
        <LoadingContainer />
      }>

      </Suspense>
      <FeaturedProducts />
    </>

  );
}
