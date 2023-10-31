import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Next.js test website. All rights reserved.</div>
    </div>
  );
};

export default Footer