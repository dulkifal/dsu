import Image from "next/image";
import { Member } from "../types";
import s from "./CoreCommittee.module.css";

export const CoreCommittee = () => {
  const members: Member[] = [
    { name: "Shahbas PK", role: "President", image: "/committee/shahbas.jpg" },
    { name: "Jaseel PK", role: "General Secretary", image: "/committee/jaseel.jpg" },
    { name: "Jishad", role: "Vice President", image: "/committee/jishad.jpg" },
    { name: "Nujoom V", role: "Finance Secretary", image: "/committee/nujoom.jpg" },
    { name: "Abdullah", role: "Joint Secretary", image: "/committee/abdullah.jpg" },
    { name: "Aqthar", role: "Committee Member", image: "/committee/aqthar.jpg" },
    { name: "Iqbal", role: "Committee Member", image: "/committee/iqbal.jpg" },
    { name: "Rahoof", role: "Committee Member", image: "/committee/rahoof.jpg" },
    { name: "Rasheeq", role: "Committee Member", image: "/committee/rasheeq.jpg" }
  ];

  return (
    <section className={s.coreCommitteeSection}>
      <h2 className={s.coreCommitteeHeader}>Core Committee</h2>
      <div className={s.membersGrid}>
        {members.map((member, idx) => (
          <div key={idx} className={s.memberCard}>
            <div className={s.memberImageWrapper}>
              <Image src={member.image} layout="fill" objectFit="cover" alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
