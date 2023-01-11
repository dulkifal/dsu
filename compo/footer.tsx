import s from "./comp.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <div className={s.footerContentLeft}>
          <div>

          <h3>DSU</h3>
          <p>
            Darul Huda Students’ Union, DSU DHIU was founded in 1406 H/ 1986 at
            Malappuram, Kerala, first as an Islamic academy aiming to produce a
            new generation of Muslim scholars capable of bearing the privileged
            responsibility of Islamic propagation in modern era. It was later
            upgraded to a private Islamic University status with international
            recognition from various Islamic university boards.
          </p>
          </div>
          <div> 
          <h3> Address</h3>
          <p>
            Darul Huda Islamic University, P.O. Malappuram, Kerala, India
          </p>

          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            </ul>
        </div>
        </div>
        <div className={s.footerContentRight}>
          <div>

          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3> Contact Us</h3>
          <ul>
            <li> social media links</li>
            <li> social media links</li>
            <li> social media links</li>
            <li> social media links</li>
            </ul>

           
          </div>
      </div>
      </div>
      <div className={s.footerBottom}>
        <p>© 2023 DSU. All rights reserved</p>
      </div>
    </footer>
  );
}

