"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Schedule.module.css";

const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

// Короткие имена для мобильного переключателя дней
const daysShort = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

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
    { time: "19:00–20:00", groups: ["", "", "", "", "Группа 1", ""] },
    {
      time: "20:00–21:00",
      groups: ["Группа 1", "Спортзал", "Группа 1", "Спортзал (Группа 1)", "Группа 1", ""],
    },
    {
      time: "21:00–21:45",
      groups: ["Группа 1", "Группа 1/Группа 2", "Группа 1", "Группа 1/Группа 2", "Группа 2", ""],
    },
  ],
  "Индивидуальные занятия": null,
};

const tabs = [
  "Оздоровительные группы",
  "Спортивные группы",
  "Индивидуальные занятия",
];

function getHealthGroupClass(group, styles) {
  const number = group.match(/\d+/)?.[0];
  return number ? styles[`group${number}`] : "";
}

function getSportGroupClass(group, styles) {
  if (!group) return "";
  if (group.includes("/")) return styles.sportMixed;
  if (group.includes("Группа 1")) return styles.sport1;
  if (group.includes("Группа 2")) return styles.sport2;
  if (group.toLowerCase().includes("спортзал")) return styles.sportHall;
  return "";
}

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedDay, setSelectedDay] = useState(0);
  const isIndividual = activeTab === "Индивидуальные занятия";
  const rows = scheduleData[activeTab];

  const tabsRef = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const update = () => {
      const btn = tabsRef.current[activeTab];
      if (btn) {
        setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeTab]);

  const getGroupClass = (group) => {
    if (activeTab === "Спортивные группы") return getSportGroupClass(group, styles);
    return getHealthGroupClass(group, styles);
  };

  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.container}>
        <h2 className={styles.title}>Расписание тренировок</h2>

        <div className={styles.tabs}>
          <span
            className={styles.tabIndicator}
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              ref={(el) => { tabsRef.current[tab] = el; }}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Спортивные группы" && (
          <p className={styles.note}>
            Запись в спортивные группы осуществляется по&nbsp;результатам сдачи нормативов
          </p>
        )}

        {isIndividual ? (
          <div className={styles.individualBlock}>
            <p className={styles.individualLead}>
              Индивидуальные занятия не привязаны к общему расписанию
            </p>
            <p className={styles.individualText}>
              Время подбирается индивидуально — исходя из ваших пожеланий
              и свободного времени тренера. Свяжитесь с нами, и мы предложим
              удобный для вас слот.
            </p>
          </div>
        ) : (
          <>
            {/* Десктоп: обычная таблица */}
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.timeHeader}>Время</th>
                    {days.map((day) => <th key={day}>{day}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ time, groups }) => (
                    <tr key={time}>
                      <td className={styles.time}>{time}</td>
                      {groups.map((group, index) => (
                        <td
                          key={`${time}-${index}`}
                          className={group ? `${styles.groupCell} ${getGroupClass(group)}` : ""}
                        >
                          {group}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Мобильный вид: переключатель дней + список */}
            <div className={styles.mobileSchedule}>
              <div className={styles.daySelector}>
                {days.map((day, i) => (
                  <button
                    key={day}
                    type="button"
                    className={`${styles.dayBtn} ${selectedDay === i ? styles.dayBtnActive : ""}`}
                    onClick={() => setSelectedDay(i)}
                  >
                    {daysShort[i]}
                  </button>
                ))}
              </div>

              <div className={styles.mobileList}>
                {rows.map(({ time, groups }) => {
                  const group = groups[selectedDay];
                  return (
                    <div key={time} className={styles.mobileRow}>
                      <span className={styles.mobileTime}>{time}</span>
                      <span className={`${styles.mobileGroup} ${group ? getGroupClass(group) : ""}`}>
                        {group || "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <div className={styles.buttonWrapper}>
          <a
            href="https://vk.ru/app6013442_-216106059?form_id=1#form_id=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.signupButton}
          >
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
}