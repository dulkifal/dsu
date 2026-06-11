import { useState } from "react";
import s from "./HeroSection.module.css";

export const HeroSection = () => {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => setLogin(!login);

  return (
    <>
      <section className={s.heroSection}>
        <div className={s.heroBackground}></div>
        <div className={s.heroContent}>
          <h2>About DSU</h2>
          <p>
            Welcome to Darul Huda Students’ Union, DSU<br />
            DHIU was founded in 1406 H/ 1986 at Malappuram, Kerala, first as an Islamic academy
            aiming to produce a new generation of Muslim scholars capable of
            bearing the privileged responsibility of Islamic propagation in
            modern era. It was later upgraded to a private Islamic University
            status with international recognition from various Islamic
            university boards.
          </p>
          <button type="button" className={s.guestLoginBtn} onClick={toggleLogin}>
            Guest Login
          </button>
        </div>
      </section>

      {login && (
        <div className={s.modalOverlay}>
          <div className={s.loginCard}>
            <h2 className={s.loginTitle}>Sign In</h2>
            <form className={s.loginForm} onSubmit={(e) => e.preventDefault()}>
              <div className={s.inputGroup}>
                <label>Username</label>
                <input type="text" placeholder="pkdnameen777@gmail.com" />
              </div>
              <div className={s.inputGroup}>
                <label>Password</label>
                <input type="password" placeholder="******************" />
              </div>
              <div className={s.rememberRow}>
                <label><input type="checkbox" /> Remember me</label>
              </div>
              <button type="button" className={s.submitBtn} onClick={toggleLogin}>
                Submit
              </button>
              <a href="#" className={s.forgotLink}>Forgot Password?</a>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
