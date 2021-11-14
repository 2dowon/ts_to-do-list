import React, { memo } from "react";
import styles from "../styles/Header.module.css";
import { useRecoilValue } from "recoil";
import { todosState } from "../global-store";

const Header = () => {
  const todos = useRecoilValue(todosState);

  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();

  const arrMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = arrMonths[today.getMonth()];

  const arrDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = arrDays[today.getDay()];

  return (
    <header className={styles.header}>
      <section className={styles.todayInfo}>
        <div className={styles.todayInfoLeft}>
          <span className={styles.date}>{date}</span>
          <div className={styles.monthYear}>
            <div className={styles.month}>{month}</div>
            <div className={styles.year}>{year}</div>
          </div>
        </div>
        <span className={styles.day}>{day}</span>
      </section>
      <section className={styles.todayCount}>
        <h1 className={styles.title}>TO DO LIST</h1>
        <span className={styles.count}>{todos.length}</span>
      </section>
    </header>
  );
};

export default memo(Header);
