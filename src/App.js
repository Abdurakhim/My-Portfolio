import React from "react";

import { Link } from "react-router-dom";
import Container from "./components/container";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import { BrowserRouter } from "react-router-dom";

//Analytics
import ReactGA from "react-ga";

import "./App.css";

// import Navbar from "./components/navbar";

function initializeAnalytics() {
  ReactGA.initialize("UA-148138506-1");
  ReactGA.pageview("/resume");
  ReactGA.pageview("/projects");
}

function App() {
  initializeAnalytics();
  return (
    <BrowserRouter>
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <div className="homepage-title">
                  <Link to="/">Abdul's Porfolio</Link>
                </div>
              }
              scroll
            >
              <Navigation className="Navigation">
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <div className="homepage-title-1">
                  <Link to="/">Abdul's Porfolio</Link>
                </div>
              }
            >
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Container />
            </Content>
          </Layout>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
