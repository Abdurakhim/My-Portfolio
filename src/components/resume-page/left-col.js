import React, { Component } from "react";

class LeftCol extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Favatar.png?alt=media&token=c8f8f189-2e7f-4bd0-8269-a09b17e50196"
          alt="avatar"
          style={{ height: "200px" }}
        />

        <h2 style={{ paddingTop: "1em" }}>Abdurakhim Ruziev</h2>
        <h4 style={{ color: "grey" }}>Junior Developer</h4>
        <hr style={{ borderTop: "3px solid #1a3af2", width: "100%" }} />
        <p>
          My name is Abdurakhim Ruziev. I have recently graduated from EDENZ
          Collegese in Software Development. I am highly motivated and
          goal-oriented who is very enthusiastic to learn and develop
          programming skills and apply to the real life. My experience working
          in a group will help me to adapt and learn new environment very fast.
          I am happy to develop my skills in software / web development
        </p>
        <hr style={{ borderTop: "3px solid #1a3af2", width: "100%" }} />
        <h5>Address</h5>
        <p>109 Hutchinson Ave, New Lynn, Auckland, New Zealand</p>
        <h5>Phone</h5>
        <p>022 651 3033</p>
        <h5>Email</h5>
        <p>abdurakhimnz@gmail.com</p>
        <hr
          style={{
            borderTop: "3px solid #1a3af2",
            width: "100%"
          }}
        />
      </div>
    );
  }
}

export default LeftCol;
