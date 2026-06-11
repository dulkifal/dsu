import Image from "next/image";
import Link from "next/link";
import { NavItem } from "../types";
import s from "./Navbar.module.css";

export const Navbar = () => {
  const navArray: NavItem[] = [
    { title: "Home", link: "/" },
    { title: "News", link: "/news" },
    { title: "Gallery", link: "/gallery" },
    { title: "About", link: "/about" },
  ];

  return (
    <nav aria-label="Main Navigation">
      <div className={s.navlinks}>
        <Link href="/">
          <Image src="/dhlogo.png" width={30} height={30} alt="DSU Logo" />
        </Link>
        <ul>
          {navArray.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.link}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};