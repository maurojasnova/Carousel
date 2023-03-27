"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import React, { useState } from "react";
import BurgerButton from "./BurgerButton";

const links = [
  {
    label: "Favoritos",
    route: "/",
  },
  {
    label: "Nosotros",
    route: "/nosotros",
  },
  {
    label: "Menu",
    route: "/menu",
  },
  {
    label: "Ofertas",
    route: "/ofertas",
  },
  {
    label: "Contacto",
    route: "/contacto",
  },
];

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="#" className={styles.logo}>
          SB
        </Link>
        <ul className={styles.menu}>
          {links.map(({ label, route }) => (
            <li key={route} className={styles.item}>
              <Link href={route} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.divHamburger}>
          <BurgerButton />
        </div>
      </nav>
    </header>
  );
}
