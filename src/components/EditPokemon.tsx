import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LoginHeaderWrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0;  
  display: flex;
  background: #616161;
  mix-blend-mode: normal;
  padding: 20px 0;
  text-align: center;
  height: 80px;
  .title{
     font-size: 26px;
     color: #04266D;
     font-weight: bold;
     margin: 0 auto;
  }
  @media(max-width: 875px){
     width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

function LoginHeader() {
   return (
       <LoginHeaderWrapper>
          <div className="title">
             {"Edit Pokemon"}
          </div>
       </LoginHeaderWrapper>
   );
}


export default LoginHeader;