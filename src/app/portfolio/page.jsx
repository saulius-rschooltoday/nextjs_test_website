import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Portfolio",
  description: "This is Portfolio Page",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Here are some examples of our recent work:</h1>
      <div className={styles.items}>
        <Link href="https://www.rschooltoday.com" target="_blank" className={styles.item}>
          <span className={styles.title}>Website for City Communities</span>
          <Image
              src="/pexels-designecologist-1779487.jpg"
              width={400}
              height={250}
              alt=""
              className={styles.image}
            />
        </Link>
        <Link href="https://www.rschooltoday.com" target="_blank" className={styles.item}>
          <span className={styles.title}>Website for City Lawyers</span>
          <Image
              src="/pexels-mikael-blomkvist-6476808.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
        </Link>
        <Link href="https://www.rschooltoday.com" target="_blank" className={styles.item}>
          <span className={styles.title}>Website for Schools</span>
          <Image
              src="/pexels-pixabay-38568.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;