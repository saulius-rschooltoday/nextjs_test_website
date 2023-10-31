import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";

export const metadata = {
  title: "Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/software-developer-on-php-code.jpg"
            alt=""
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Let&apos;s Keep in Touch</h1>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" placeholder="Your name" className={styles.input} />
            <input type="text" placeholder="Your email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <Button url="#" text="Send"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
