import React, { Component } from "react";

import { Grid, Cell, ProgressBar } from "react-mdl";

class RightSide extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <Grid>
          <Cell col={4}>
            <h4>2018 - 2019</h4>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}> EDENZ Colleges</h4>
            <h5> Diploma in Software Development (Level 7)</h5>
          </Cell>
        </Grid>
        <hr style={{ borderTop: "3px solid #fff" }} />

        <h2>Skills</h2>
        <div style={{ display: "flex" }}>
          <h5>HTML / CSS</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="90" />
          <h5>90%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>React</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="85" />
          <h5>85%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>Redux</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="60" />
          <h5>60%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>NodeJS</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="60" />
          <h5>60%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>GraphQL</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="70" />
          <h5>70%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>MongoDB/Atlas</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="60" />
          <h5>60%</h5>
        </div>

        <div style={{ display: "flex" }}>
          <h5>PHP</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="40" />
          <h5>40%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>Firebase</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="50" />
          <h5>50%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>MySQL</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="50" />
          <h5>50%</h5>
        </div>
        <div style={{ display: "flex" }}>
          <h5>jQuery</h5>
          <ProgressBar style={{ margin: "auto", width: "75%" }} progress="50" />
          <h5>50%</h5>
        </div>
      </div>
    );
  }
}

export default RightSide;
