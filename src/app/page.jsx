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
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </div>
  );
}
