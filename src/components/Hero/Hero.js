import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <main id="hero" className={styles.main}>
      <div className={styles.inner}>
        {/* Белая полупрозрачная карточка */}
        <div className={styles.card}>
          <h1 className={styles.title}>
            Школа Плавания АТЛЕТИК|КРАСНОЯРСК
          </h1>

          <p className={styles.subtitle}>Обучаем плаванию с улыбкой</p>

          <div className={styles.bottomRow}>
            <ul className={styles.list}>
              <li>– Обучение плаванию детей с 7 лет</li>
              <li>– Улучшение техники</li>
              <li>– Сборы и соревнования</li>
            </ul>
            <p className={styles.address}>ул. Елены Стасовой 69Л</p>
          </div>
        </div>

        {/* Кнопка */}
        <div className={styles.buttonWrapper}>
          <Link href="#schedule" className={styles.button}>
            Узнать расписание
          </Link>
        </div>
      </div>
    </main>
  );
}