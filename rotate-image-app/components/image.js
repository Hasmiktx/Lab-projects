import { useEffect, useState } from "react";
import { LEFT, RIGHT, rightAngle } from "../constatns/constants";
import styles from "../styles/ImageComponent.module.css";

const ImageComponent = ({ image, setImage }) => {
  const [degree, setDegree] = useState(0);
  const [angle, setAngle] = useState(0);
  // console.log(degree, "degree");

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDegree(+angle);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [angle]);

  const rotateImg = (direction) => {
    if (direction === RIGHT) {
      degree >= 270 ? setDegree(0) : setDegree(degree + rightAngle);
    } else {
      degree <= 0 ? setDegree(270) : setDegree(degree - rightAngle);
    }
  };

  const remove = () => {
    localStorage.removeItem("image");
    setImage(null);
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.imageDiv}>
        <img
          className={styles.image}
          alt="oops,please remove and select image again"
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
        min="0"
        max="360"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
      />
    </div>
  );
};
export default ImageComponent;
