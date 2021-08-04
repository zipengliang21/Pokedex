import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormattedMessage} from "react-intl";

const ForumHeaderWrapper = styled.div`
  width: 850px;
  margin: 50px auto 0 auto;
  display: flex;
  background: #616161;
  mix-blend-mode: normal;
  padding: 20px 0;
  text-align: center;
  .left{
    display: flex;
    flex-direction: row;
    align-items: center;
    .title{
      font-size: 26px;
      color: #04266D;
      font-weight: bold;
      margin-left: 30px;
    }
    .logo{
       margin-top: -70px;
    }
  }
  .right{
    width: 400px;
    margin: auto;
    padding: 10px 0;
    background: #59B937;
    color: #FFFFFF;
    border-radius: 10px;
  }
   @media(max-width: 875px){
      width: 418px;
      display: block;
   }
   @media(max-width: 576px){
     width: 100%;
     display: block;
     .left{
      margin-left: 0;
      text-align: center;
     }
     .right{
       display: flex;
       width: 80%;
       padding: 0;
       background: #59B937;
       color: white;
       border-radius: 0;
       text-align: center;
     }
   }
   @media(max-width: 320px){
      .title{
        display: none;
      }
   }
`;

function ForumHeader() {
   const logo = "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
       "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png";
   return (
       <ForumHeaderWrapper>
          <div className="left">
             <img src={`${logo}`} alt="logo" className="logo"/>
             <div className="title"><FormattedMessage id='Forum'/></div>
          </div>
          <div className="right"><FormattedMessage id='ForumWelcome'/></div>
       </ForumHeaderWrapper>
   );
}


export default ForumHeader;

