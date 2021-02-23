import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        bottom: 0,
        height: "9vh",
        marginBottom: "0.2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>
        Made with ❣ by{" "}
        <a href="https://jayrajshah.github.io/" target="_blank">
          Jayraj Shah
        </a>{" "}
        |{" "}
        <a href="https://github.com/JayrajShah" target="_blank">
          Github
        </a>
      </h4>
    </div>
  );
};

export default Footer;
