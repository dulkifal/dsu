import Head from "next/head";
import s from "../styles/Gallery.module.css";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    { src: "/map.png", alt: "Campus Map" },
    { src: "/dhlogo.png", alt: "Event Logo" },
    { src: "/dsuLogo.png", alt: "DSU Event" },
    { src: "/committee/shahbas.jpg", alt: "Event 1" },
    { src: "/committee/jaseel.jpg", alt: "Event 2" },
    { src: "/committee/jishad.jpg", alt: "Event 3" },
    { src: "/committee/mubashir.jpg", alt: "Event 4" },
    { src: "/committee/ameen.jpg", alt: "Event 5" },
    { src: "/committee/shuhaib.jpg", alt: "Event 6" },
  ];

  return (
    <>
      <Head>
        <title>Gallery | DSU</title>
        <meta name="description" content="DSU Event Gallery" />
      </Head>
      <div className={s.galleryPage}>
        <div className={s.headerArea}>
          <h1>Campus Gallery</h1>
          <p>Memories from our latest events, fests, and gatherings.</p>
        </div>

        <div className={s.galleryContainer}>
          {images.map((img, idx) => (
            <div key={idx} className={s.imageWrapper}>
              {/* Using unoptimized for placeholder external images if needed, but here we have local images */}
              <Image src={img.src} layout="fill" objectFit="cover" alt={img.alt} />
              <div className={s.placeholderText}>{img.alt}</div>
            </div>
          ))}
        </div>

        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
