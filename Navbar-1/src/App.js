import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages'
import About from './pages/about';
import Contact from './pages/contact-us';
import Services from './pages/services';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/contact-us" exact component={Contact}/>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/sign-in" exact component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
