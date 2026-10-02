import Image from "next/image";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    text: "Отличная школа! Сын ходит второй год, стал уверенно плавать, участвовал в первых соревнованиях. Тренеры внимательные, всегда подскажут и поддержат.",
    author: "Анна М.",
    source: "yandex",
    rating: 5,
  },
  {
    id: 2,
    text: "Дочка занимается в оздоровительной группе. Очень нравится атмосфера: дети не боятся воды, тренеры работают с каждым индивидуально. Спасибо!",
    author: "Елена С.",
    source: "2gis",
    rating: 5,
  },
  {
    id: 3,
    text: "Замечательные тренеры! Ребёнок занимается с удовольствием, ни разу не пришлось уговаривать идти на тренировку. Результаты видим.",
    author: "Мария К.",
    source: "yandex",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы родителей</h2>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.card}>
              <div className={styles.sourceIcon}>
                <Image
                  src={
                    review.source === "yandex"
                      ? "/images/reviews/yandex.svg"
                      : "/images/reviews/2gis.svg"
                  }
                  alt={
                    review.source === "yandex"
                      ? "Яндекс.Карты"
                      : "2ГИС"
                  }
                  width={32}
                  height={32}
                />
              </div>

              <p className={styles.text}>{review.text}</p>
              <p className={styles.author}>{review.author}</p>
            </article>
          ))}
        </div>

        {/* Сюда в будущем вставите виджет Отзовиста или другого сервиса */}
        <div className={styles.widgetPlaceholder}>
          {/* <div id="otzyvist-widget"></div> */}
        </div>

        <p className={styles.hint}>
          Хотите оставить отзыв? Найдите нас на Яндекс.Картах или в 2ГИС.
        </p>
      </div>
    </section>
  );
}