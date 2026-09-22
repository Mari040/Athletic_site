"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Schedule.module.css";

const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const scheduleData = {
  "Оздоровительные группы": [
    { time: "10:00–11:00", groups: ["", "Группа 5", "", "Группа 5", "", "Группа 1"] },
    { time: "11:00–12:00", groups: ["", "", "", "", "", "Группа 2"] },
    { time: "12:00–13:00", groups: ["", "", "", "", "", "Группа 3"] },
    { time: "13:00–14:00", groups: ["", "", "", "", "", "Группа 4"] },
    { time: "18:00–19:00", groups: ["", "Группа 2", "", "Группа 4", "", ""] },
    { time: "19:00–20:00", groups: ["Группа 1", "", "Группа 3", "", "", ""] },
  ],

  "Спортивные группы": [
    { time: "10:00–11:00", groups: ["", "Группа 1", "", "Группа 2", "", "Группа 3"] },
    { time: "11:00–12:00", groups: ["", "Группа 4", "", "", "", ""] },
    { time: "12:00–13:00", groups: ["", "", "Группа 5", "", "Группа 6", ""] },
    { time: "13:00–14:00", groups: ["", "", "", "Группа 7", "", ""] },
    { time: "18:00–19:00", groups: ["", "Группа 8", "", "Группа 9", "", ""] },
    { time: "19:00–20:00", groups: ["", "", "Группа 10", "", "", ""] },
  ],

  "Индивидуальные занятия": [
    { time: "10:00–11:00", groups: ["", "", "Индивидуальное занятие", "", "", ""] },
    { time: "11:00–12:00", groups: ["", "", "", "", "Индивидуальное занятие", ""] },
    { time: "12:00–13:00", groups: ["", "", "", "", "", ""] },
    { time: "13:00–14:00", groups: ["", "Индивидуальное занятие", "", "", "", ""] },
    { time: "18:00–19:00", groups: ["", "", "", "Индивидуальное занятие", "", ""] },
    { time: "19:00–20:00", groups: ["", "", "", "", "", ""] },
  ],
};

const tabs = [
  "Оздоровительные группы",
  "Спортивные группы",
  "Индивидуальные занятия",
];

// Хелпер: возвращает класс цвета для конкретной группы
function getGroupClass(group, styles) {
  const number = group.match(/\d+/)?.[0];
  return number ? styles[`group${number}`] : "";
}

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const rows = scheduleData[activeTab];

  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.container}>
        <h2 className={styles.title}>Расписание тренировок</h2>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.timeHeader}>Время</th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map(({ time, groups }) => (
                <tr key={time}>
                  <td className={styles.time}>{time}</td>

                  {groups.map((group, index) => (
                    <td
                      key={`${time}-${index}`}
                      className={
                        group
                          ? `${styles.groupCell} ${getGroupClass(group, styles)}`
                          : ""
                      }
                    >
                      {group}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="#signup" className={styles.signupButton}>
            Записаться
          </Link>
        </div>
      </div>
    </section>
  );
}