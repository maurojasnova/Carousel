import Link from "next/link";

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
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
