import s from "./comp.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <div className={`${s.footerColumn} ${s.footerLogo}`}>
          <Image src="/dsuLogo.png" width={100} height={150} alt="DSU Logo" />
          <p>
            Darul Huda Students' Union (DSU) is the student body of Darul Huda Islamic University, Malappuram, Kerala.
          </p>
        </div>
        <div className={s.footerColumn}>
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> contact@dsu.example.com</p>
          <p><strong>Address:</strong> DHIU Campus, Chemmad, Malappuram, Kerala, 676306</p>
        </div>
        <div className={s.footerColumn}>
          <h2>Follow Us</h2>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Twitter</a></p>
          <p><a href="#">Instagram</a></p>
        </div>
      </div>
      <div className={s.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Darul Huda Students' Union. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
