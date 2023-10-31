import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { headers } from 'next/headers';

export const metadata = {
  title: "Blog",
  description: "This is Blog Page",
};


async function getData() {

  const headersList = headers();
  
  const host = headersList.get('host'); // to get domain
  const proto = headersList.get('x-forwarded-proto');

  //console.log(host);
  //console.log(proto);

  // const res = await fetch("http://localhost:3000/api/posts", {
  const res = await fetch(`${proto}://${host}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
