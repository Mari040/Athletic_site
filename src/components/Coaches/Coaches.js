import styles from "./Coaches.module.css";
import Image from "next/image";

// Фамилия и Имя остаются вместе, Отчество переносится на вторую строку
function formatName(fullName) {
  const parts = fullName.trim().split(" ");
  if (parts.length < 3) return fullName;
  return `${parts[0]}\u00A0${parts[1]} ${parts.slice(2).join(" ")}`;
}

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
              <p className={styles.name}>{formatName(coach.name)}</p>

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