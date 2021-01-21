import React from "react";

const Message = () => {
  return (
    <>
      <div className="main_div">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <h4>This one is for YOU!</h4>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted"></h6>
            <p className="card-text">
              A wish for you on your birthday, whatever you ask may you receive,
              whatever you seek may you find, whatever you wish may it be
              fulfilled on your birthday and always.{" "}
              <h4 style={{ color: "teal" }}>Happy birthday Dost!</h4>
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          color: "gray",
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          width:'100%'
        }}
      >
        Programmed By <strong style={{ color: "teal" }}>Satyam MJ</strong>
      </p>
    </>
  );
};

export default Message;
