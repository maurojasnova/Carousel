"use client";

import Carousel, { CarouselItem } from "./components/Carousel";

import Image from "next/image";

import styles from "../../styles/page.module.css";

import { favorites } from "../../data/favorites";

export default function HomePage() {
  return (
    <div className={styles.favorites}>
      <h1 className={styles.title}>Favoritos</h1>
      <p className={styles.description}>Descubre los favoritos de nuestros clientes</p>
      <Carousel className={styles.carousel}>
        {favorites.map((dish) => {
          return <CarouselItem key={dish.title} {...dish} />
        })}
      </Carousel>
    </div>
  );
}
