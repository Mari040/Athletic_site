import Script from "next/script";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы родителей</h2>

        {/* Виджет отзывов Отзовист */}
        <div className={styles.widgetPlaceholder}>
          <div className="rw-widget" data-widget="wg_202c1ded0681"></div>
          <Script src="https://otzyvist.ru/w.js" strategy="lazyOnload" />
        </div>
      </div>
    </section>
  );
}