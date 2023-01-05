
import Image from 'next/image';
import image from '../public/14733.jpg'
import s from "./comp.module.css";

export const CoreCimmity = () => {

  const members = [
    {
      name: "Abdul Muhsin",
      position: "President",
      image: image,
    },
    {
      name: "Abdul Muhsin",
      position: "President",
      image: image,
    },
    {
      name: "Abdul Muhsin",
      position: "President",
      image: image,
    },
    {
      name: "Abdul Muhsin",
      position: "President",
      image: image,
    }
  ];
  return (
    <div className={s.coreCommity}>
      <div className="coreCommity__header">
        <h2>Core Commity</h2>
    
      <div className={s.members}>
        {members.map((member) => (
          <div className={s.member}>
            <div className={s.member__image}>
              <Image src={member.image} width={200} height={200} alt="logo" />
              </div>
              <div className={s.member__name}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                </div>
                </div>
        ))}

        </div>

              

     
    
    </div>
    </div>

  );
};
