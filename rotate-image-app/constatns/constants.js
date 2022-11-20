const RIGHT = "RIGHT";
const LEFT = "LEFT";
const rightAngle = 90;
const fetchImg = () => {
  const img =
    localStorage.getItem("image") !== "undefined"
      ? localStorage.getItem("image")
      : null;

  return img;
};

export { RIGHT, LEFT, rightAngle, fetchImg };
