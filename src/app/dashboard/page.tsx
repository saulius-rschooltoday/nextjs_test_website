"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
//import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";




const Dashboard = () => {

  // adding upload
  
  const [file, setFile] = useState<File>();

  const uploadOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("file");
    console.log(file);

    if (!file) return;

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })

      if (res.ok){
        console.log("file uploaded!");
      }
      // handle the error
      if (!res.ok) throw new Error(await res.text())

    } catch (e: any) {

      // Handle errors here
      console.error(e);
    }
  }

  // END adding upload


const session = useSession();
const router = useRouter();
  

const [data, setData] = useState([]);
const [err, setErr] = useState(false);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/posts?username=${session?.data?.user.name}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      setErr(true);
    }

    const data = await res.json()

    setData(data);
    setIsLoading(false);
  };
  getData()
}, []);




  //NEW WAY TO FETCH DATA
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, mutate, error, isLoading } = useSWR(
  //   `/api/posts?username=${session?.data?.user.name}`,
  //   fetcher
  // );
  // END NEW WAY



  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  const handleSubmit = async (e) => {

  
    if (typeof window !== "undefined") {
      console.log(window.location.href.replace(/^https?:\/\//, ""));
    }

    var host = '';
    var proto = '';

    if (typeof window !== "undefined") {
      host = window.location.host; // to get domain
      proto = window.location.protocol;
    }
  
    //console.log(host);
    //console.log(proto);

    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;

    let img = e.target[3].value;

    let substr = "\\";

    if ( img.includes(substr) ) {
      img = img.substring(img.lastIndexOf('\\')+1);
    } else {
      img = img.substring(img.lastIndexOf('/')+1);
    }
    
    img = `${proto}//${host}/` + img;

    const content = e.target[4].value;

    uploadOnSubmit(e);

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      // mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      // mutate();
    } catch (err) {
      console.log(err);
    }
  };


  if (session.status === "authenticated") {

    return (
      <main>
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="hidden" placeholder="Image" className={styles.input} />

          <div>  
            <span className={styles.addfile}>Select Image:&nbsp;</span>
            <input 
              className={styles.filebutton}
              type="file" 
              name="myImage" 
              onChange={(e) => setFile(e.target.files?.[0])}
            />
          </div>

          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Save</button>  

        </form>
      </div>
      </main>
    );
  }
};

export default Dashboard;
