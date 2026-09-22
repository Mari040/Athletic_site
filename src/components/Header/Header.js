'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Логотип — с 1-й колонки */}
        <div className={styles.logo}>
          <Link href="/#hero" aria-label="Наверх">
            <Image
              src="/images/Logo.png"
              alt="Логотип"
              width={432}
              height={29}
              priority
            />
          </Link>
        </div>

        {/* Навигация — с 5-й по 8-ю колонку */}
        <nav className={styles.nav}>
          <a href="#coaches">Тренеры</a>
          <a href="#schedule">Расписание</a>
          <a href="#price">Цены</a>
          <a href="#">Фотографии</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  );
}