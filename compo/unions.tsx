import Image from "next/image";
import s from "./comp.module.css";

export const Unions = (
  props: React.DetailedHTMLProps< React.HTMLAttributes<HTMLElement>, HTMLElement>

) => {

  const unions = [
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
    <section>
      <div className={s.unions}>
        <h2>Our Subordinate Unions </h2>
        <div className={s.union}>
          {unions.map((union) => (
            <div className={s.union1}>
              <Image src={union.image} width={100} height={100} alt="logo" />
              <h1>{union.name}</h1>
              <p>{union.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};