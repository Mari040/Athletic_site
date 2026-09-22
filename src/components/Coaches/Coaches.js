import styles from "./Coaches.module.css";
import Image from "next/image";

const coaches = [
  {
    id: 1,
    image: "/images/coaches/rectangle.jpg",
    name: "Чумак Николай Андреевич",
    info: "Тренер, достижения, достижения",
    group: "Спортивные группы",
  },
  {
    id: 2,
    image: "/images/coaches/rectangle.jpg",
    name: "Мезенцев Никита Иванович",
    info: "Тренер, достижения, достижения",
    group: "Спортивные группы",
  },
  {
    id: 3,
    image: "/images/coaches/rectangle.jpg",
    name: "Мезенцев Тимофей Иванович",
    info: "Тренер, достижения, достижения",
    group: "Оздоровительные группы",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className={styles.page}>
      <h1 className={styles.title}>Тренерский состав нашей школы</h1>

      <div className={styles.cards}>
        {coaches.map((coach) => (
          <div key={coach.id} className={styles.block}>
            <div className={styles.imageWrapper}>
              <Image
                src={coach.image}
                alt={coach.name}
                width={315}
                height={396}
                className={styles.image}
              />

              {/* ФИО — сверху, с отступом 20px со всех сторон */}
              <p className={styles.name}>{coach.name}</p>

              {/* Описание — снизу, с отступом 20px со всех сторон */}
              <p className={styles.info}>{coach.info}</p>
            </div>

            <hr className={styles.divider} />
            <p className={styles.group}>{coach.group}</p>
          </div>
        ))}
      </div>
    </section>
  );
}