import React from "react";
import "./MainBody.css";

const WishMe = () => {
  return (
    <div>
      <h2 className="header">
        Wishing You{" "}
        <strong
          style={{ fontSize: "25px", fontFamily: "cursive", color: "teal" }}
        >
          Happy Birthday
        </strong>
      </h2>
      <h1
        className="h1__mainbody"
        // style={{
        //   fontWeight: "bold",
        //   textAlign: "center",
        //   position: "absolute",
        //   top: "18%",
        //   left: "20%",
        // }}
      >
        <span style={{ color: "#fb0000 " }}>A</span>
        <span style={{ color: " #fb7c00" }}>K</span>
        <span style={{ color: " #fbe900" }}>A</span>
        <span style={{ color: " #a7fb00" }}>N</span>
        <span style={{ color: " #00fb38" }}>K</span>
        <span style={{ color: " #00fbd4" }}>S</span>
        <span style={{ color: "#0014fb " }}>H</span>
        <span style={{ color: " #a200fb" }}>A</span>
      </h1>
    </div>
  );
};

export default WishMe;
