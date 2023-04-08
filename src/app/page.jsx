"use client";

import Carousel, { CarouselItem } from "./components/Carousel";
import Image from "next/image";

export default function HomePage() {
  const images = [
    "/images/capybara.jpg",
    "/images/capybara.jpg",
    "/images/capybara.jpg",
    "/images/capybara.jpg",
  ];
  return (
    <div>
      <Carousel>
        <CarouselItem image="/images/capybara.jpg" title="Capybar 1" description="Cute animal"/>
        <CarouselItem image="/images/capybara.jpg" title="Capybar 2" description="Cute animal"/>
        <CarouselItem image="/images/capybara.jpg" title="Capybar 3" description="Cute animal"/>
      </Carousel>
    </div>
  );
}
