import { useEffect, useState } from "react";
import { LEFT, RIGHT, rightAngle } from "../constatns/constants";
import styles from "../styles/ImageComponent.module.css";

const ImageComponent = ({ image, setImage }) => {
  const [degree, setDegree] = useState(0);
  const [angle, setAngle] = useState(0);
  // console.log(degree, "degree");

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDegree(angle % 360);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [angle]);

  const rotateImg = (direction) => {
    if (direction === RIGHT) {
      // console.log(angle, "angle");
      setDegree((degree + rightAngle) % 360);
    } else {
      setDegree((degree - rightAngle) % 360);
    }
  };

  const remove = () => {
    localStorage.removeItem("image");
    setImage(null);
  };

  return (
    <div className={styles.conteiner}>
      <img
        className={styles.image}
        alt="oops,please remove and select image again"
        src={image}
        style={{ transform: `rotate(${degree}deg)` }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "30vw",
        }}
      >
        <button className={styles.button} onClick={() => rotateImg(LEFT)}>
          Rotate Left
        </button>
        <button className={styles.button} onClick={remove}>
          Remove
        </button>
        <button className={styles.button} onClick={() => rotateImg(RIGHT)}>
          Rotate Right
        </button>
      </div>
      <span>Choose yourself</span>
      <input
        type="number"
        min="-360"
        max="360"
        value={angle}
        onChange={(e) => setAngle(+e.target.value)}
      />
    </div>
  );
};
export default ImageComponent;
