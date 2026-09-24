import Image from "next/image";
import Link from "next/link";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>

        <div className={styles.grid}>
          {/* Белая карточка — колонки 1–4 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {/* Блок с контактами: три строки, gap 24 */}
              <div className={styles.contactBlock}>
                <p className={styles.contactLine}>Если у вас есть вопросы:</p>
                <p className={styles.contactLine}>
                  +7 (902) 928-82-63 Чумак Николай Андреевич
                </p>
                <p className={styles.contactLine}>
                  +7 (983) 161-41-49 Фамилия Имя Отчество
                </p>
                <p className={styles.contactLine}>
                  pochta@mail.ru
                </p>
              </div>

              {/* Блок соцсетей: 36px сверху от контактов */}
              <div className={styles.socialBlock}>
                <p className={styles.socialTitle}>Мы в социальных сетях:</p>

                <div className={styles.socialIcons}>
                  <Link
                    href="https://vk.ru/athletic_swim"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ВКонтакте"
                  >
                    <Image
                      src="/images/icons/vk.png"
                      alt="ВКонтакте"
                      width={65}
                      height={65}
                    />
                  </Link>

                  <Link
                    href="https://t.me/ATHLETIC_SWIM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <Image
                      src="/images/icons/tg.png"
                      alt="Telegram"
                      width={65}
                      height={65}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Фото — колонки 5–8 */}
          <div className={styles.photoWrapper}>
            <Image
              src="/images/contacts.jpg"
              alt="Бассейн школы плавания Атлетик"
              width={650}
              height={430}
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}