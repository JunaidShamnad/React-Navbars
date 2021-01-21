import styled from 'styled-components';
import {NavLink as LinkR} from 'react-router-dom';
import { Link as LinkS } from "react-scroll";
import {FaBars} from 'react-icons/fa';

export const Nav=styled.nav`
    background:#000;
    height: 80px;
    /* margin-top:-80px; */
    display:flex;
    justify-content: flex-start;
    padding: 0.5rem calc((100vw - 1000px) /2);
    position: sticky;
     top: 0;
    z-index:10;

    @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavItem = styled.li`
  /* height:80px; */
`;

export const NavLink=styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height: 100%;
    cursor:pointer;

    &.active{
        color: #15cdfc;
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
    color:#2477ff;
    transition: 0.3s ease-in-out;
  }
`;

export const Bars=styled(FaBars)`
    display:none;
    color: #fff;

    @media screen and (max-width:768px){
        display: block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,75%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu=styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    white-space:nowrap;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtn=styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;
    justify-content:flex-end;
    width:100vw;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtnLink=styled(LinkR)`
    border-radius:4px;
    background: rgb(37,108,225);
    background: linear-gradient(117deg, rgba(37,108,225,1) 0%, rgba(22,98,224,1) 20%, rgba(8,83,204,1) 41%, rgba(2,76,195,1) 59%, rgba(12,79,189,1) 85%);
    padding:10px 22px;
    white-space: nowrap;
    color: #fff;
    border:none;
    outline:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color: #010606;
    }
`;