import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const ForumSubHeaderWrapper = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    background: linear-gradient(180deg, #80B2ED -3.56%, #B6CDE9 104.67%);
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3F51B5;
    span{
      font-size: 18px;
    }
    .headerLeft{
      margin-left: 40px;
    }
    .headerRight{
      margin-right: 40px;
    }
    .plus{
      margin-right: 5px;
      color: green;
    }    
    @media(max-width: 320px){
      justify-content: center;
      .headerLeft{
          display: none;
      }
      .headerRight{
        margin-right: 0;
      }
    }
`;

function ForumSubHeader() {
   return (
       <ForumSubHeaderWrapper>
          <span className="headerLeft">Threads</span>
          <NavLink to={"/forum/newPost"}>
                  <span className="headerRight">
                     <FontAwesomeIcon icon="plus-circle" className="plus"/>
                     New
                  </span>
          </NavLink>
       </ForumSubHeaderWrapper>
   );
}


export default ForumSubHeader;

