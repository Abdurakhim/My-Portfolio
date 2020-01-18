import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2FAvatar.jpg?alt=media&token=cb12d8a0-5b38-48b0-91a0-b7e96343ca58"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                JavaScript | HTML/CSS | React | Redux | NodeJS | GraphQL |
                Firebase | MongoDB | PHP | MySQL |
              </p>

              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/abdurakhim-ruziev-516922175"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*GitHub*/}
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Abdurakhim"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*YouTube*/}
                <a
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCaEWBHM7sOXoLkaSutWoxEg?view_as=subscriber"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
