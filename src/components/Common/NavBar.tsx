import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


const NavBarWrapper = styled.div`
   width: 850px;
   margin: 0 auto;
   letter-spacing: 0;
   font-size: 15px;
   font-weight: 500;
   line-height: 1.8;
   font-family: 'Poppins', sans-serif;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   color: rgba(71, 32, 121, 0.9);
   background: linear-gradient(90deg, #7F91A5 20.07%, #7FAEE1 75.24%);
   //min-height: 57px;
   box-sizing: border-box;
   div{
      padding: 0 15px;
   }
   svg{
      margin-bottom: -5px;
   }
   .selected{
      background: #C986D5;
      mix-blend-mode: multiply;
   }
   @media(max-width: 875px){
      width: 418px;
      height: 70px;
      .selected{
         height: 100%;
         padding-top: 10px;
      }
   }
   @media(max-width: 576px){
     width: 100%;
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

