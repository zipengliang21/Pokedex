import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const SearchBarWrapper = styled.div`
  display: flex;
  background: #616161;
  mix-blend-mode: normal;
  padding: 20px 0;
  text-align: center;
  .left{
    text-align: left;
    margin-left: 80px;
    .goBack{
       background-color: #3F51B5;
       border-color: #3F51B5;
       cursor: pointer;
       height: 32px;
       padding: 0 15px;
       font-size: 14px;
       border-radius: 4px;
       color: #FFFFFF;
    }
    .note{
      margin: 10px 0;
      width: 280px;
      font-size: 14px;
      color: #FFFFFF;
    }
  }
  .right{
    display: flex;
    width: 400px;
    margin: auto;
    padding: 10px 0;
    background: #59B937;
    color: #FFFFFF;
    border-radius: 10px;
    align-items: center;
    text-align: center;
  }
  .searchButton{
    color: white;
    background: linear-gradient(90deg, rgba(116, 230, 154, 0.72) 0%, rgba(139, 212, 212, 0.920305) 51.43%);
    border-radius: 5px;
    margin-left: 10px;
    padding: 4px;
    border: none;
  }
  #search{
    border-radius: 5px;
    height: 28px;
    border: 3px solid #04266D;
  }
   @media(max-width: 875px){
      width: 418px;
      display: block;
      .search{
       margin-top: 75px;
     }
   }
   @media(max-width: 576px){
     width: 100%;
     display: block;
     .search{
       margin-top: 25px;
     }
     .left{
      margin-left: 0;
      text-align: center;
       #search, .note{
         width: 100%;
       }
       div, form{
          margin: 5px auto;
       }
     }
     .right{
       display: flex;
       width: 100%;
       padding: 0;
       background: #59B937;
       color: white;
       border-radius: 0;
       text-align: center;
     }
   }
`;
const SearchBarResultWrapper = styled.div`
    width: 850px;
    margin: 0 auto;
    background: inherit;
    text-align: center;
    @media(max-width: 875px){
      width: 418px;
      display: block;
    }
   @media(max-width: 576px){
     width: 100%;
     display: block;
   }
`;


function DetailPageHeader(props: any) {
   return (
       <SearchBarResultWrapper>
          <SearchBarWrapper>
             <div className="left">
                <NavLink to={"/"}><button className="goBack"><FormattedMessage id='BacktoHomePage'/></button></NavLink>
                 <div className="note"><FormattedMessage id='SearchBarSideNote'/></div>
             </div>
              <div className="right"><FormattedMessage id='SearchBarNote'/></div>

          </SearchBarWrapper>
       </SearchBarResultWrapper>

   )

}


export default DetailPageHeader;
