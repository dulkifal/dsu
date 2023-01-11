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
        <div
          className={s.description}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={"/dsucommity.png"}
            width={600}
            height={100}
            alt="commity"
          />
        </div>
        <div className={s.circle}>
          <Image src={"/dsuLogo.png"} width={150} height={200} alt="logo" />
        </div>
        <section>
          <div className={s.about}>
            <h2>About Us</h2>
            <p>
              Welcome to Darul Huda Students’ Union, DSU DHIU was founded in
              1406 H/ 1986 at Malappuram, Kerala, first as an Islamic academy
              aiming to produce a new generation of Muslim scholars capable of
              bearing the privileged responsibility of Islamic propagation in
              modern era. It was later upgraded to a private Islamic University
              status with international recognition from various Islamic
              university boards.
            </p>
            <button onClick={() => openLogin()}> Login </button>
          </div>
        </section>
        {login && (
          <section>
            <div className={s.loginPage}>
              <button onClick={() => openLogin()}>back</button>
              <div className={s.form}>
                <form className={s.loginForm}>
                  <input type="text" placeholder="username" />
                  <input type="password" placeholder="password" />
                  <button>login</button>
                  <p className={s.message}>
                    forgot password? <a href="#">click here</a>
                  </p>
                </form>
              </div>
            </div>
          </section>
        )}
        <section>
          <div className={s.mission}>
            <div>
              <h1>Our Mission</h1>
              <p>
                To develop an Islamic educational framework in order to prepare
                religious scientists (‘Ulama) who acquire, practice and
                propagate Islam, being alert of their ultimate responsibilities
                towards Almighty Allah and towards themselves, family,
                institution , society , surroundings and private and public
                resources and to make them capable of competing the shifting
                trends of modern education.
              </p>
            </div>
            <div>
              <h1>Our Vission</h1>
              <p>
                DHIU aims to be the bastion of expertise in Islamic education
                that they can restore the dynamic role and educational
                superiority of past Muslim society in all intellectual programs
                and that seeks to rekindle the spirit of scholarship in Islamic
                sciences in the era of ever- changing society due to the
                innovative growth of modern sciences.
              </p>
            </div>
          </div>
        </section>
        <Unions />
        <section>
          <div className={s.acivities}>
            <h2> Acivities</h2>
            <div className={s.acivity}>
              <div className={s.acivity1}>
                <Image
                  src={"/dsuLogo.png"}
                  width={150}
                  height={200}
                  alt="logo"
                />
                <h1>Acivity 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quibusdam.
                </p>
              </div>
              <div className={s.acivity2}>
                <Image
                  src={"/dsuLogo.png"}
                  width={150}
                  height={200}
                  alt="logo"
                />
                <h1>Acivity 2</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quibusdam.
                </p>
              </div>
              <div className={s.acivity3}>
                <Image
                  src={"/dsuLogo.png"}
                  width={150}
                  height={200}
                  alt="logo"
                />
                <h1>Acivity 3</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quibusdam.
                </p>
              </div>
            </div>
            <button type="button">View All</button>
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
