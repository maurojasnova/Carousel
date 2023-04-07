"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import React, { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="#" className={styles.logo}>
          SB
        </Link>
        <ul className={`${styles.menu} ${isOpen ? styles['menu--active'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
          {links.map(({ label, route }) => (
            <li key={route} className={styles.item}>
              <Link href={route} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`${styles.hamburger} ${isOpen ? styles['hamburger--active'] : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
        </div>
      </nav>
    </header>
  );
}
