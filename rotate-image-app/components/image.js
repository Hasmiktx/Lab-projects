import { useEffect, useState } from "react";
import styles from "../styles/ImageComponent.module.css";

const ImageComponent = ({ image, setImage }) => {
  const [degree, setDegree] = useState(0);
  const [angle, setAngle] = useState(0);
  // let timer;
  // const rotateInOrder = (angle) => {
  //   clearTimeout(timer);
  //   timer = setTimeout(() => {
  //     setDegree(angle);
  //   }, 1000);
  // };
  useEffect(() => {
    let timerId = setTimeout(() => {
      setDegree(+angle);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [angle]);
  const rotateImg = (direction) => {
    if (direction === "Right") {
      if (degree >= 360) {
        setDegree(0);
      } else {
        setDegree(degree + 90);
        console.log(degree + 90, "degree");
      }
    } else {
      if (degree <= 0) {
        setDegree(360);
      } else {
        setDegree(degree - 90);
        console.log(degree - 90, "minus");
      }
    }
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.imageDiv}>
        <img
          className={styles.image}
          alt="your upload img"
          src={image}
          style={{ transform: `rotate(${degree}deg)` }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "30vw",
        }}
      >
        <button className={styles.button} onClick={() => rotateImg("Left")}>
          Rotate Left
        </button>
        <button className={styles.button} onClick={() => setImage(null)}>
          Remove
        </button>
        <button className={styles.button} onClick={() => rotateImg("Right")}>
          Rotate Right
        </button>
      </div>
      <span>Choose yourself</span>
      <input
        type="number"
        min="0"
        max="360"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
      />
    </div>
  );
};
export default ImageComponent;
