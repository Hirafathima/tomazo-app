import React from 'react';
import Home from "./components/pages/Home";
import View from "./components/pages/View";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App(){
  
  return (<Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/view" component={View}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    <Footer />
  </Router>)
}

export default App;
