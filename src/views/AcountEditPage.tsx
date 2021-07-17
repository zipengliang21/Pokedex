import React, {useState, useRef} from "react";
import styled from "styled-components";
import NavBar from "../components/Common/NavBar";
import LogoutHeader from "../components/Common/LogoutHeader";
import {faEdit, faBookmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import EditForm from "../components/DetailedView/EditForm";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const ContentWrapper = styled.div`
display: flex;
width: 850px;
margin: 100px auto 0 auto;
margin-top:0;
min-height: 500px;
text-align: center;
background: inherit;
align-items: center;
justify-content: center;

   @media(max-width: 875px){
     width: 418px;
     flex-direction: column;
   }
   @media(max-width: 576px){
     width: 100%;
   }
`;

const Banner = styled.header`
max-width:850px;
margin: 0 auto;
background: inherit;
text-align: center;
-webkit-filter: none;
z-index: 1;
display:flex;
text-align:center;
flex-direction:column;
.welcomeMsg{
    min-height: 80px;
    font-size: 28px;
    font-weight: 600;
    color: #04266D;
    background: #616161;
    padding-top: 15px;
}

@media(max-width: 875px){
    width: 418px;
    flex-direction: column;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const CurrInfoWrapper = styled.div`
justify-content: center;
align-items: center;
text-align:center;
`;

const AvatarWrapperT = styled.div`
text-align:center;
justify-content: center;
align-items: center;
`;

const AvatarWrapperB = styled.div`
margin: 0 auto;
flex-direction:column;
text-align:center;
justify-content: center;
`;

function AccountEditPage() {
    // const index = pokemon.id;
    return (
        <Background>
        <LogoutHeader/>
        <NavBar/>
        <Banner role="banner">
            <a className="welcomeMsg" target="_blank" rel="noreferrer">Profile</a>
            </Banner>
           <ContentWrapper>
            <CurrInfoWrapper>
              <AvatarWrapperT className="avatar">
                <button className="changeAvatar" style={{background:"transparent",border: 0,cursor: "pointer",height:"80%",padding: 0,width: "80%"}}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJReCDApHNGOvzHLZ-cYE5lLXy7B5pVnaVVsN4GIUaM8uWLSbHV_lnaYLjMhDwWllaU4&usqp=CAU"
                    alt="user picture" style={{borderRadius:"50%",marginTop:"1rem", height: "100px", width: "100px"}}> 
                    </img>
                </button>
                </AvatarWrapperT>
                <AvatarWrapperB >
                <h1>Jane Doe</h1>
                <button  className="changeAvatar" style={{width:"160px",height:"34px",borderColor:"#D9D9D9",font:"inherit",background:"white",borderRadius:"5px"}}>
                <FontAwesomeIcon icon={faEdit} className="edit"/> Change Avatar</button>
                </AvatarWrapperB>
                <EditForm />
            </CurrInfoWrapper>
            </ContentWrapper>
        </Background>
    );
 }
 
 export default AccountEditPage;