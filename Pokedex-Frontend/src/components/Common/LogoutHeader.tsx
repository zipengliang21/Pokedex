
import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const HeaderWrapper = styled.div`
   width: 850px;
   margin: 0 auto;
   letter-spacing: 0;   
   display: flex;
   align-items: center;
   justify-content: flex-end;
   font-size: 16px;
   font-weight: 600;
   line-height: 1.8;
   font-family: 'Poppins', sans-serif;
   color: rgba(71, 32, 121, 0.9);
   height: 40px;
   background: linear-gradient(90deg, rgba(177, 209, 202, 0.83) 20.21%, rgba(178, 223, 217, 0.79) 60.83%, #B2E6DF 78.85%);
   .login{
       margin-right: 50px;
   }
   .user{
      margin-right: 5px;
   }
   @media(max-width: 875px){
      width: 418px;
      .login{
          margin-right: 20px;
      }
   }
   @media(max-width: 576px){
      width: 100%;
      justify-content: center;
      .login{
       margin: 0 0 0 5px;
      }
   }
`;

function LogoutHeader (){

   return (
       <HeaderWrapper>
          <NavLink exact activeClassName="selected" to="/login" className="login">
             <FontAwesomeIcon icon={faSignOutAlt} className="user"/>
             <span className="span">Log Out</span>
          </NavLink>
       </HeaderWrapper>
   )
}




export default LogoutHeader;

