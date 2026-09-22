import styles from "./Price.module.css";

const prices = [
  { id: 1, service: "Спортивная группа", hours: "9/36", cost: "13000" },
  { id: 2, service: "Спортивная группа", hours: "4/12", cost: "9000" },
  { id: 3, service: "Оздоровительная группа (утро)", hours: "2/8", cost: "5500" },
  { id: 4, service: "Оздоровительная группа (вечер)", hours: "2/8", cost: "6000" },
  { id: 5, service: "Индивидуальное занятие", hours: "—", cost: "1300" },
];

export default function Price() {
  return (
    <section id="price" className={styles.prices}>
      <div className={styles.container}>
        <h2 className={styles.title}>Цены</h2>

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
      </div>
    </section>
  );
}