import Head from "next/head";

import { useEffect, useState } from "react";
import ImageComponent from "../components/image";
import { fetchImg } from "../constatns/constants";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = fetchImg();
    setImage(img);
  }, []);

  const drawImg = (imgUrl) => {
    setImage(URL.createObjectURL(imgUrl));
    localStorage.setItem("image", `${URL.createObjectURL(imgUrl)}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>RotateImg APP</title>
        <meta name="description" content="Image Rotate APP" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1> Rotate your upload image</h1>
        </div>
        {image ? (
          <ImageComponent image={image} setImage={setImage} />
        ) : (
          <div>
            <input
              className={styles.chooseBtn}
              type="file"
              accept="image/png, image/jpeg,image/jpg"
              onChange={(e) => drawImg(e.target.files[0])}
            />
          </div>
        )}
      </main>
    </div>
  );
}
