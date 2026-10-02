import Image from "next/image";
import styles from "./Achievements.module.css";

const achievements = [
  {
    id: 1,
    image: "/images/achievements/ach1.jpg",
    title: "Кубок Красноярского края",
    caption: "3 золота, 2 серебра и 4 бронзы — 2025 год",
  },
  {
    id: 2,
    image: "/images/achievements/ach2.jpg",
    title: "Первенство Сибири",
    caption: "5 спортсменов вошли в финал, 2 — на пьедестале",
  },
  {
    id: 3,
    image: "/images/achievements/ach3.jpg",
    title: "Всероссийские соревнования",
    caption: "1-е место в эстафете и личный рекорд школы",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши достижения</h2>

        <div className={styles.grid}>
          {achievements.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardCaption}>{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}