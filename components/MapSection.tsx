import Image from "next/image";
import s from "./MapSection.module.css";

export const MapSection = () => {
  return (
    <section className={s.mapSection}>
      <h2 className={s.mapHeader}>Map Representation</h2>
      <div className={s.mapImageWrapper}>
        <Image src="/map.png" width={1000} height={600} layout="responsive" alt="DSU Map Representation" />
      </div>
    </section>
  );
};
