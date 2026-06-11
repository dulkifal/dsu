import s from "./MissionVision.module.css";

export const MissionVision = () => {
  return (
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
  );
};
