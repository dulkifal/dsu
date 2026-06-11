import Head from "next/head";
import s from "../styles/About.module.css";
import { MissionVision } from "../components/MissionVision";
import { CoreCommittee } from "../components/CoreCommittee";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About | DSU</title>
        <meta name="description" content="About Darul Huda Students Union" />
      </Head>
      <div className={s.aboutPage}>
        <div className={s.headerArea}>
          <h1>About DSU</h1>
          <p>The Legacy, Mission, and Future of Darul Huda Students' Union</p>
        </div>

        <div className={s.contentArea}>
          <div className={s.glassCard}>
            <h2>Our History</h2>
            <p>
              Darul Huda Students’ Union (DSU) was formed to unite the student community under a single umbrella, fostering academic excellence, moral integrity, and social responsibility. Since its inception, DSU has been at the forefront of organizing cultural fests, academic seminars, and leadership camps.
            </p>
            <p>
              We act as the primary bridge between the administration and the student body, ensuring that student voices are heard and their welfare is prioritized.
            </p>
          </div>
        </div>

        {/* Reuse existing sections that fit the about page */}
        <MissionVision />
        <CoreCommittee />
        
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
