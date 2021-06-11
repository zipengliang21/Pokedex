import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Github from "../components/LoginIcon/Github";
import Google from "../components/LoginIcon/Google";

const Wrapper = styled.div`
   background: #FBFAF6;
   height: 100vh;
`;
const Header = styled.div`
   margin: 0 auto;
   width: 980px;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
   color: #212D3B;
   background: linear-gradient(112.93deg, #DCDECE 9.22%, rgba(53, 57, 30, 0.58) 70.36%);
   .home{
       margin-left: 40px;
       margin-right: 5px;
   }
   .login{
       margin-right: 50px;
   }
   .user{
      margin-right: 5px;
   }
`;
const InputContainer = styled.div`
  width: 550px;
  min-height: 600px;
  background: white;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  padding-bottom: 50px;
    .adminButtonStyle{
    margin-top: 20px;
    background: #81cfed;
    border: none;
    padding: 10px;
    border-radius: 8px;
    color: #FFFF;
    font-weight: bold;
    font-size: 24px;
  }
    .icon{
    margin-top: 25px;
    display: flex;
    align-items: center;
    @media(max-width: 992px) {
      justify-content: center;
    };
    > div{
      margin-top: 30px;
      padding: 0 5px;
    }
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: #03256C;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Switch = styled.button`
  font-size: 24px;
  font-weight: 600;
  padding: 1vh;
  border: none;
  background: #86D7AE;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Indicator = styled.div`
  background: #86D7AE;
  height: 5%;
  width: 100%;
`;

const DecorationBar = styled.div`
  height: 32vh;
  background-image: url("https://tw.portal-pokemon.com/special/award_asia_2021_result/img/banner-img.png");
  margin: 0 auto;
  width: 980px;
`;

const FormWrapper = styled.div`
  .formStyle{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .labelStyle{
    display: flex;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2vh;
  }
  .inputStyle, .inputStyleP{
    margin-left: 50px;
    font-size: 16px;
  }
  .inputStyleP{
    margin-left: 60px;
  }
  .submitButtonStyle{
    margin-top: 20px;
    background: #86D7AE;
    border: none;
    padding: 10px;
    border-radius: 8px;
    color: #FFFF;
    font-weight: bold;
    font-size: 24px;
  }
`;

function LoginPage(props: any) {
   const [flag, setFlag] = React.useState(1);

   const handleChangeFlag = (event: any) => {
      const temp = event.target.id;
      if (temp === "login") {
         setFlag(1);
      } else {
         setFlag(2);
      }

   };

   return (
       <Wrapper>
          <Header>
             <NavLink exact activeClassName="selected" to="/" className="home">
                <FontAwesomeIcon icon="home" className="home"/>
                <span className="span">Home</span>
             </NavLink>
             <NavLink exact activeClassName="selected" to="/login" className="login">
                <FontAwesomeIcon icon="user" className="user"/>
                <span className="span">Login</span>
             </NavLink>
          </Header>
          <DecorationBar/>
          <InputContainer>
             <Title>Welcome</Title>
             <SwitchContainer>
                <div>
                   <Switch id="login" onClick={handleChangeFlag}>Login</Switch>
                   <Indicator hidden={flag !== 1}/>
                </div>
                <div>
                   <Switch id="register" onClick={handleChangeFlag}>Register</Switch>
                   <Indicator hidden={flag !== 2}/>
                </div>
             </SwitchContainer>
             <FormWrapper hidden={flag !== 1}>
                <form className="formStyle">
                   <label className="labelStyle">
                      User Name
                      <input
                          placeholder="Your email address"
                          className="inputStyle"
                          type="text"
                      />
                   </label>
                   <label className="labelStyle">
                      Password
                      <input
                          placeholder="Password"
                          className="inputStyleP"
                          type="text"
                      />
                   </label>
                   <button
                       type="submit"
                       className="submitButtonStyle"
                   >
                      Login
                   </button>
                </form>
             </FormWrapper>
             <FormWrapper hidden={flag !== 2}>
                <form className="formStyle">
                   <label className="labelStyle">
                      New Name
                      <input
                          placeholder="Your email address"
                          className="inputStyle"
                          type="text"
                      />
                   </label>
                   <label className="labelStyle">
                      Password
                      <input
                          placeholder="Password"
                          className="inputStyleP"
                          type="text"
                      />
                   </label>
                   <button
                       type="submit"
                       className="submitButtonStyle"
                   >
                      Sign Up
                   </button>
                </form>
             </FormWrapper>
             <button className="adminButtonStyle">Admin</button>
             <div className="icon">
                <div className="google"><a href="https://github.com/zipengliang21" target="_blank"
                                           rel="noreferrer"><Google/></a></div>
                <div className="github"><a href="https://github.com/zipengliang21" target="_blank"
                                           rel="noreferrer"><Github/></a></div>
             </div>
          </InputContainer>
       </Wrapper>
   );
}

export default LoginPage;
