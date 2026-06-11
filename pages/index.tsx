import Head from "next/head";
import Image from "next/image";
import s from "../styles/Home.module.css";
import bg from "../public/dh.png";
import { Unions } from "../compo/unions";
import { CoreCimmity } from "../compo/coreCommity";
import { useState } from "react";
import Footer  from "../compo/footer";

export default function Home() {
  const [login, setLogin] = useState(false);

  const openLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <Head>
        <title>DSU 2022-23</title>
        <meta name="description" content="Darul huda Students Union" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
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
            <button type="button" className={s.guestLoginBtn} onClick={() => openLogin()}>
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
                <button type="button" className={s.submitBtn} onClick={() => openLogin()}>
                  Submit
                </button>
                <a href="#" className={s.forgotLink}>Forgot Password?</a>
              </form>
            </div>
          </div>
        )}
        <section>
          <div className={s.mission}>
            <div className={s.missionCard}>
              <h1>Our Mission</h1>
              <p>
                To develop an Islamic educational framework in order to prepare
                religious scientists (‘Ulama) who acquire, practice and
                propagate Islam, being alert of their ultimate responsibilities
                towards Almighty Allah and towards themselves, family,
                institution, society, surroundings and private and public
                resources and to make them capable of competing the shifting
                trends of modern education.
              </p>
            </div>
            <div className={s.missionCard}>
              <h1>Our Vision</h1>
              <p>
                DHIU aims to be the bastion of expertise in Islamic education
                that they can restore the dynamic role and educational
                superiority of past Muslim society in all intellectual programs
                and that seeks to rekindle the spirit of scholarship in Islamic
                sciences in the era of ever-changing society due to the
                innovative growth of modern sciences.
              </p>
            </div>
          </div>
        </section>
        <Unions />
        <section className={s.activitiesSection}>
          <h2 className={s.activitiesHeader}>Our Activities</h2>
          <div className={s.activityGrid}>
            <div className={s.activityCard}>
              <h2>Activity 1</h2>
              <p>
                this is dummy text for design the actual content will replaced
              </p>
              <button type="button" className={s.readMoreBtn}> Read More </button>
            </div>
            <div className={s.activityCard}>
              <h2>Activity 2</h2>
              <p>
                this is dummy text for design the actual content will replaced
              </p>
              <button type="button" className={s.readMoreBtn}> Read More </button>
            </div>
            <div className={s.activityCard}>
              <h2>Activity 3</h2>
              <p>
                this is dummy text for design the actual content will replaced
              </p>
              <button type="button" className={s.readMoreBtn}> Read More </button>
            </div>
          </div>
        </section>
        <section className={s.mapSection}>
          <h2 className={s.mapHeader}>Map Representation</h2>
          <div className={s.mapImageWrapper}>
            <Image src="/map.png" width={1000} height={600} layout="responsive" alt="DSU Map Representation" />
          </div>
        </section>
        <section>
          <CoreCimmity />
        </section>
        <Footer />
      </main>
    </>
  );
}
