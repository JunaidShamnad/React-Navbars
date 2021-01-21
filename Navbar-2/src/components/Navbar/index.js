import React,{useState,useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import { IconContext} from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {Nav,NavLink,NavMenu,NavBtn,NavBtnLink,NavItem,NavbarContainer,MobileIcon} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav,setScrollNav]=useState(false)
    
    
    const chnageNav=()=>{
      if(window.scrollY >= 80){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }
    };
    
    useEffect(()=>{
      window.addEventListener('scroll',chnageNav)
    },[]);
    
    
    const toggleHome=()=>{
      scroll.scrollToTop()
    };
    
    return (
        <>
         <IconContext.Provider value={{color:'#fff'}}>
          <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLink to="/"  onClick={toggleHome}>
                   <img src={require('../../images/logo.svg').default} alt="Logo"/>
              </NavLink>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                   <NavItem>
                  <NavLink to="/about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      About
                  </NavLink>
                  </NavItem>
                   <NavItem>
                  <NavLink to="/services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Services
                  </NavLink>
                  </NavItem>
                   <NavItem>
                  <NavLink to="/contact-us" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Contact Us
                  </NavLink>
                  </NavItem>
                   <NavItem>
                  <NavLink to="/sign-up" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Sign Up
                  </NavLink>
                  </NavItem>
                  <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
              </NavMenu>
              {/* <NavBtn>
                  <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
              </NavBtn> */}
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar;
