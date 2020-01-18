import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import LeftCol from "./resume-page/left-col";
import RightSide from "./resume-page/right-side";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <LeftCol />
          </Cell>
          <Cell className="resume-right-column" col={8}>
            <RightSide />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
