const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        maxWidth: "50vw",
        paddingTop: "10rem",
        margin: "auto",
        marginTop: "10vh",
        marginBottom: "10vh",
      }}
    >
      {" "}
      <h2 style={{ marginBottom: "10vh" }}>About Our APP</h2>
      <p>
        Rotate image is a special tool with a fast purpose. Most photo editors
        or applications offer this functionality, however, a significant monthly
        search volume exists for a tool like this.
      </p>
      <p>
        You can click two orientation buttons (turn left and turn right) at a 90
        degrees angle OR choose your custom angle (e.g., 43 degrees).
      </p>
      <p>Lets try it... </p>
    </div>
  );
};
export default About;
