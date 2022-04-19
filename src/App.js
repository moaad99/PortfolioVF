import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home"
import React, { useState } from "react";

import Sidebar from "./Component/Sidebar";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Navbar from "./Component/Navbar";

function App() {

 const [state, setState] = React.useState(window.innerWidth);
 const handle = () =>{
   setState(window.innerWidth)
 }
   React.useEffect(() => {
     window.addEventListener("resize", handle);
   }, []);
  return (
    <div className="App">
      <Router className="rout">
        <div className="g">
          {state >= 1260 ? <Sidebar /> : <Navbar />}

          <Switch>
            <div className="fdd">
              <Route exact path="/" component={Home} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/About" component={About} />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
