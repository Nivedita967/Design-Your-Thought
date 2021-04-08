import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Wizard from "./Wizard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WizardHeader from "./WizardHeader";
 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/wizard">
            {/* <a href={process.env.PUBLIC_URL + "chat.html"} > chat</a> */}
            <Wizard />
            <Route exact path="/wizard" render={() => {window.location.href="chat.html"}} />
             
          </Route>
           
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
       
      </div>
    </Router>
    
  );
}

export default App;
