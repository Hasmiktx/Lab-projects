import Head from "next/head";

import { useState } from "react";
import ImageComponent from "../components/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [image, setImage] = useState(null);

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
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
        )}
      </main>
    </div>
  );
}
