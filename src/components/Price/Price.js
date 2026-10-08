import styles from "./Price.module.css";

const prices = [
  { id: 1, service: "Спортивная группа", hours: "9/36", cost: "13 000" },
  { id: 2, service: "Спортивная группа", hours: "4/12", cost: "9 000" },
  { id: 3, service: "Оздоровительная группа (утро)", hours: "2/8", cost: "5 500" },
  { id: 4, service: "Оздоровительная группа (вечер)", hours: "2/8", cost: "6 000" },
  { id: 5, service: "Индивидуальное занятие", hours: "—", cost: "1 800" },
];

export default function Price() {
  return (
    <section id="prices" className={styles.prices}>
      <div className={styles.container}>
        <h2 className={styles.title}>Цены</h2>

        {/* Десктоп: таблица */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.colN}>N</th>
                <th className={styles.colService}>Наименование услуги</th>
                <th className={styles.colHours}>Кол-во часов в неделю/месяц</th>
                <th className={styles.colCost}>Стоимость, руб</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.service}</td>
                  <td>{row.hours}</td>
                  <td>{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Мобильный вид: карточки без нумерации */}
        <div className={styles.mobileList}>
          {prices.map((row) => (
            <article key={row.id} className={styles.mobileCard}>
              <h3 className={styles.mobileService}>{row.service}</h3>

              <div className={styles.mobileDetails}>
                <div className={styles.mobileDetail}>
                  <span className={styles.mobileLabel}>Часов в неделю/месяц</span>
                  <span className={styles.mobileValue}>{row.hours}</span>
                </div>
                <div className={styles.mobileDetail}>
                  <span className={styles.mobileLabel}>Стоимость</span>
                  <span className={styles.mobileCost}>{row.cost} ₽</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}