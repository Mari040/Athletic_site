'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Логотип */}
        <div className={styles.logo}>
          <Link href="/#hero" aria-label="Наверх" onClick={closeMenu}>
            <Image
              src="/images/Logo.svg"
              alt="Логотип"
              width={432}
              height={29}
              priority
            />
          </Link>
        </div>

        {/* Кнопка-бургер (видна только на мобильных) */}
        <button
          type="button"
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Навигация */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#coaches" onClick={closeMenu}>Тренеры</a>
          <a href="#achievements" onClick={closeMenu}>Достижения</a>
          <a href="#reviews" onClick={closeMenu}>Отзывы</a>
          <a href="#schedule" onClick={closeMenu}>Расписание</a>
          <a href="#price" onClick={closeMenu}>Цены</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>
      </div>
    </header>
  );
}