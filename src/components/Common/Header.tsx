import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


const HeaderWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   font-size: 16px;
   font-weight: 600;
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
      .login{
          margin-right: 20px;
      }
   }
   @media(max-width: 576px){
      justify-content: center;
      .login{
       margin: 0 0 0 5px;
      }
   }
`;

function Header (){
    return (
        <HeaderWrapper>
            <NavLink exact activeClassName="selected" to="/login" className="login">
                <FontAwesomeIcon icon="user" className="user"/>
                <span className="span">Login</span>
            </NavLink>
        </HeaderWrapper>
    )
}



export default Header;