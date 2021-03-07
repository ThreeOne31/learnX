import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Lectures from "./components/Lectures";
import Resources from "./components/Resources";
import LearnxAnswers from "./components/LearnXAnswers/LearnxAnswers";
import Quiz from "./components/Quizs";

//import PageRouter from "./Routes"
import "./styles/main.css"


function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/courseCode/lectures" component={Lectures} />
                <Route path="/courseCode/resources" component={Resources} />
                <Route path="/learnx-answers" component={LearnxAnswers} />
                <Route path="/quizs/general" component={Quiz} />
            </Switch>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
