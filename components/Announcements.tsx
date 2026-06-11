import s from "./Announcements.module.css";

export const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Annual Sports Meet 2024",
      date: "March 15, 2024",
      description: "Join us for the grand annual sports meet at the university main ground. All students are encouraged to participate.",
    },
    {
      id: 2,
      title: "Literary Fest Registrations",
      date: "April 02, 2024",
      description: "Registrations for the upcoming inter-collegiate literary fest are now open. Showcase your talents in writing, debating, and poetry.",
    },
    {
      id: 3,
      title: "Union General Body Meeting",
      date: "April 10, 2024",
      description: "All students are requested to attend the general body meeting to discuss the agenda for the upcoming academic semester.",
    },
  ];

  return (
    <section className={s.announcementsSection}>
      <h2 className={s.sectionHeader}>Announcements & Events</h2>
      <div className={s.cardsContainer}>
        {announcements.map((item) => (
          <div key={item.id} className={s.card}>
            <span className={s.dateBadge}>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
