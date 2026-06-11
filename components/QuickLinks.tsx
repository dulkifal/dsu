import Link from "next/link";
import s from "./QuickLinks.module.css";

export const QuickLinks = () => {
  const links = [
    { title: "Syllabus & Curriculum", href: "#" },
    { title: "Academic Calendar", href: "#" },
    { title: "Exam Timetables", href: "#" },
    { title: "Download Forms", href: "#" },
    { title: "Complaint / Suggestion Box", href: "#" },
    { title: "Campus Rules & Guidelines", href: "#" },
  ];

  return (
    <section className={s.quickLinksSection}>
      <h2 className={s.sectionHeader}>Quick Resources</h2>
      <div className={s.linksGrid}>
        {links.map((link, idx) => (
          <Link href={link.href} key={idx} className={s.linkCard}>
            <span className={s.linkTitle}>{link.title}</span>
            <span className={s.arrowIcon}>→</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
