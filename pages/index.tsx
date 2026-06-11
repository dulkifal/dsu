import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import { Announcements } from "../components/Announcements";
import { QuickLinks } from "../components/QuickLinks";
import { MissionVision } from "../components/MissionVision";
import { StudentClubs } from "../components/StudentClubs";
import { Unions } from "../components/Unions";
import { Activities } from "../components/Activities";
import { MapSection } from "../components/MapSection";
import { CoreCommittee } from "../components/CoreCommittee";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DSU 2022-23</title>
        <meta name="description" content="Darul Huda Students Union" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <Announcements />
        <QuickLinks />
        <MissionVision />
        <StudentClubs />
        <Activities />
        <Unions />
        <MapSection />
        <CoreCommittee />
        <Footer />
      </main>
    </>
  );
}
