import React, { Component } from "react";

class LeftCol extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fphoto5003628988966479963.png?alt=media&token=d46c578a-33da-42ed-966d-8a09b96c9b45"
          alt="avatar"
          style={{ height: "200px" }}
        />

        <h2 style={{ paddingTop: "1em" }}>Abdul Ruziev</h2>
        <h4 style={{ color: "grey" }}>Junior Developer</h4>
        <hr style={{ borderTop: "3px solid #1a3af2", width: "100%" }} />
        <p>
          I am a full-stack developer with essential programming skills in
          modern web development (ReactJs, NodeJs) and have the ability to learn
          new skills quickly and implement in the application. I am a good team
          player and I can be a good fit on your team if you are looking for an
          enthusiastic junior developer.
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
