import * as React from "react";
import styled from "styled-components";
import {Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const WelcomeLoginButtonDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 150px;
  left: 0px;
  top: 0px;
 
`
const DecorationBar = styled.div`
  width: 100%;
  height: 25vh;
  background-size: contain;
  background-image: url("https://www.nintendo.com.au/web_images/pages/1939/attachments/attach1473204999.png");
  margin-bottom: 40px;
`;

const LoginDiv = styled.div`
    font-size: 24px;
    color: blue;
    background-color: gray
    
`;
// const onSubmit = () => {
//         return  <Redirect  to="/login/" />
// }

const WelcomeLoginButton = () => {
    return (
        <WelcomeLoginButtonDiv>

            {/*<button onClick={onSubmit}>Login</button>*/}
            <LoginDiv className = "login">
            <NavLink exact activeClassName="selected" to="/Login">
                <FontAwesomeIcon icon="home"/>
                <span className = "span">Login</span>
                {/*<FontAwesomeIcon icon="angle-up" className="arrow"/>*/}
               
            </NavLink >
            </LoginDiv>
            <DecorationBar/>

        </WelcomeLoginButtonDiv>
    )
};

export default WelcomeLoginButton;
