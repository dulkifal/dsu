import { Activity } from "../types";
import s from "./Activities.module.css";

export const Activities = () => {
  const activities: Activity[] = [
    {
      id: 1,
      title: "Activity 1",
      description: "this is dummy text for design the actual content will replaced",
    },
    {
      id: 2,
      title: "Activity 2",
      description: "this is dummy text for design the actual content will replaced",
    },
    {
      id: 3,
      title: "Activity 3",
      description: "this is dummy text for design the actual content will replaced",
    },
  ];

  return (
    <section className={s.activitiesSection}>
      <h2 className={s.activitiesHeader}>Our Activities</h2>
      <div className={s.activityGrid}>
        {activities.map((activity) => (
          <div key={activity.id} className={s.activityCard}>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <button type="button" className={s.readMoreBtn}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
