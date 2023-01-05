import Image from "next/image";
import s from "./comp.module.css";

export const Navbar = (
  props: any

) => {
  let navArray = [
    { title: "Home",  link: "/" },
    {title : "News", link: "/news"},
    {title : "Gallery", link: "/gallery"},
    { title: "About", link: "/about" },
  ];


  return (
    <nav>
      <div className={s.navlinks}>
        <Image src="/dhlogo.png" width={30} height={30} alt="logo" />
        <ul>
          {navArray.map((navItem) => (
            <li>
              <a href={navItem.link as string}>{navItem.title}</a>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
};