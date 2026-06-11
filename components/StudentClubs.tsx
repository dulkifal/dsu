import s from "./StudentClubs.module.css";

export const StudentClubs = () => {
  const clubs = [
    {
      id: 1,
      name: "Literary Club",
      icon: "📚",
      description: "Fostering a love for reading, creative writing, and eloquent debating among students.",
    },
    {
      id: 2,
      name: "IT & Tech Wing",
      icon: "💻",
      description: "Exploring modern technologies, coding workshops, and digital literacy campaigns.",
    },
    {
      id: 3,
      name: "Sports Committee",
      icon: "⚽",
      description: "Organizing tournaments, managing teams, and promoting physical wellness on campus.",
    },
  ];

  return (
    <section className={s.clubsSection}>
      <h2 className={s.sectionHeader}>Student Clubs & Wings</h2>
      <div className={s.clubsGrid}>
        {clubs.map((club) => (
          <div key={club.id} className={s.clubCard}>
            <div className={s.iconWrapper}>{club.icon}</div>
            <h3>{club.name}</h3>
            <p>{club.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
