import Image from 'next/image';
import styles from './page.module.css';
import Button from "../components/Button/Button";

export default function Home(props) {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
        <Image
          src="/designer-drawing-website-mockup.jpg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Better design and functionality for your websites.</h1>
        </div>
      </div>
      <br />
      <div className={styles.item}>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <p>
        <Button url="/portfolio" text="See Our Work"/>
        </p>
      </div>
    </div>
  );
}

