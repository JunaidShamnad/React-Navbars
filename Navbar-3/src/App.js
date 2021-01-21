import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages'
import About from './pages/about';
import Contact from './pages/contact-us';
import Services from './pages/services';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/contact-us" exact component={Contact}/>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/sign-in" exact component={SignIn}/>
      </Switch>
          <Footer/>
    </Router>
  );
}

export default App;
