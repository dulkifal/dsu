import Image from "next/image";
import { Union } from "../types";
import s from "./Unions.module.css";

export const Unions = () => {
  const unions: Union[] = [
    {
      name: "Union 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      image: "/dsuLogo.png",
    },
    {
      name: "Union 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      image: "/dsuLogo.png",
    },
    {
      name: "Union 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      image: "/dsuLogo.png",
    },
    {
      name: "Union 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      image: "/dsuLogo.png",
    },
    {
      name: "Union 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
      image: "/dsuLogo.png",
    },
  ];

  return (
    <section className={s.unionsSection}>
      <h2 className={s.unionsHeader}>Subordinate Unions</h2>

      <div className={s.unions}>
        {unions.map((union, index) => (
          <div key={index} className={s.union}>
            <Image src={union.image} width={100} height={100} alt={union.name} />
            <h2>{union.name}</h2>
            <p>{union.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};