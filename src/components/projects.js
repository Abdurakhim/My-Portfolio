import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        /*React Projects*/
        <div className="projects-grid">
          <Card shadow={5} className="card-css">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2FBeInformed.jpg?alt=media&token=6e834aa1-cc3b-46db-b02a-59a7637470ce) center / cover"
              }}
            />

            <CardActions className="dev-tools" border>
              <p>Dev tools:</p>
              <Button colored className="card-buttona">
                Firebase
              </Button>
              <Button colored className="card-buttona">
                Redux
              </Button>
              <Button colored className="card-buttona">
                React
              </Button>
            </CardActions>

            <CardText className="card-text">
              This is informative webapp created with help of React, Redux and
              Firebase. This project is a group work for capstone project for
              EDENZ Colleges Software Development Diploma.
            </CardText>
            <CardActions border>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Abdurakhim/beINFORMED"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://be-informed-nz.web.app/"
                  target="_blank"
                >
                  Demo
                </a>
              </Button>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://youtu.be/DAGFJ-Bdiic"
                  target="_blank"
                >
                  YouTube
                </a>
              </Button>
            </CardActions>

            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="card-css">
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fmongodb.jpg?alt=media&token=e827d1eb-970f-4bfb-820a-81e4859c2a16) center / cover"
              }}
            >
              Book Info App
            </CardTitle>

            <CardActions className="dev-tools" border>
              <p>Dev tools:</p>
              <Button colored className="card-buttona">
                MongoDB
              </Button>
              <Button colored className="card-buttona">
                GraphQL
              </Button>
              <Button colored className="card-buttona">
                NodeJS
              </Button>
              <Button colored className="card-buttona">
                React
              </Button>
            </CardActions>

            <CardText className="card-text">
              This app is developed with NodeJS, GraphQL and MongoDB on
              back-end, and React and Apollo on the frond-end. It represtns how
              easy GraphQL queries are.
            </CardText>
            <CardActions border>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Abdurakhim/react-graphql-mongodb"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://mongodb-book.web.app/"
                  target="_blank"
                >
                  Demo
                </a>
              </Button>
            </CardActions>

            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} className="card-css">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2FMarioPlan1.jpg?alt=media&token=3d14ac1b-6872-408c-bb2b-cd0185c7d79c) center / cover"
              }}
            >
              MarioPlan
            </CardTitle>

            <CardActions className="dev-tools" border>
              <p>Dev tools:</p>
              <Button colored className="card-buttona">
                Firebase
              </Button>
              <Button colored className="card-buttona">
                Redux
              </Button>
              <Button colored className="card-buttona">
                React
              </Button>
            </CardActions>

            <CardText className="card-text">
              This project is created for learning React, Redux and Firebase.
              This is exact clone of MarioPlan created by TheNetNinja on
              YouTube.
            </CardText>
            <CardActions border>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Abdurakhim/Mario"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} className="card-css">
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/abdurakhim-2nd-project-trial.appspot.com/o/Retail-app.jpg?alt=media&token=25b4ae27-8ea8-4e67-8861-f11bdd1f74ea) center / cover"
              }}
            />

            <CardActions className="dev-tools" border>
              <p>Dev tools:</p>
              <Button colored className="card-buttona">
                React
              </Button>
            </CardActions>
            <CardText className="card-text">
              This project is a simple React UI project for learning pure CSS
              responsive function.
            </CardText>
            <CardActions border>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Abdurakhim/reatail-app"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} className="card-css">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2FKinozla.jpg?alt=media&token=e38c37dc-ccf1-4a90-a007-17d6c499d730) center / cover"
              }}
            >
              Kinozal
            </CardTitle>

            <CardActions className="dev-tools" border>
              <p>Dev tools:</p>
              <Button colored className="card-buttona">
                PHP
              </Button>
              <Button colored className="card-buttona">
                MySQL
              </Button>
            </CardActions>

            <CardText className="card-text">
              This is my very first web development trial. It is created with
              help of PHP, XAMMP and MySQL.
            </CardText>
            <CardActions border>
              <Button colored className="card-button">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Abdurakhim/Kinozal"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
