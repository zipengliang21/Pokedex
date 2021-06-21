import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


const NavBarWrapper = styled.div`
   font-size: 15px;
   line-height: normal;
   display: flex;
   justify-content: center;
   align-items: center;
   color: rgba(71, 32, 121, 0.9);
   background: linear-gradient(90deg, #7F91A5 20.07%, #7FAEE1 75.24%);
   height: inherit;
   div{
      padding: 1px 15px;
   }
   svg{
      margin-bottom: -5px;
   }
   .selected{
      background: #C986D5;
      mix-blend-mode: multiply;
   }
   @media(max-width: 875px){
      height: 70px;
      .selected{
         height: 100%;
         padding-top: 10px;
      }
   }
   @media(max-width: 576px){
     width: 230px;
     display: block;
     height: inherit;
     .selected{
         color:#C986D5;
     }
   }
`;

function NavBar (){
   return (
       <NavBarWrapper>
          <NavLink exact activeClassName="selected" to="/" className="login">
             <div>
                <FontAwesomeIcon icon="home"/>
                <div className="span">Home</div>
             </div>
          </NavLink>
          <NavLink exact activeClassName="selected" to="/advancedSearch" className="login">
             <FontAwesomeIcon icon="search"/>
             <div className="span">Advanced Search</div>
          </NavLink>
          <NavLink exact activeClassName="selected" to="/forum" className="login">
             <FontAwesomeIcon icon="comment"/>
             <div className="span">Forum</div>
          </NavLink>
          <NavLink exact activeClassName="selected" to="/about" className="login">
             <FontAwesomeIcon icon="edit"/>
             <div className="span">About</div>
          </NavLink>
       </NavBarWrapper>
   )
}



export default NavBar;

