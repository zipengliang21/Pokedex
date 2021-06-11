import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #FBFAF6
`;
const Header = styled.div`
   margin: 0 auto;
   width: 800px;
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
  margin: auto;
  width: 20%;
  height: 60vh;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px gray;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
  font-family: "Spicy Rice", cursive;
  font-size: 90px;
  text-align: center;
  background: -webkit-linear-gradient(rgba(0, 0, 255, 1), rgba(0, 0, 255, 0.4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Switch = styled.button`
  font-size: 30px;
  font-weight: bold;
  padding: 16px;
  border: none;
  background: -webkit-linear-gradient(
    rgba(135, 211, 124, 1),
    rgba(135, 211, 124, 0.1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Indicator = styled.div`
  background: rgba(135, 211, 124, 0.5);
  height: 5px;
  width: 100%;
`;

const DecorationBar = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 25vh;
  background-image: url("https://www.nintendo.com.au/web_images/pages/1939/attachments/attach1473204999.png");
  margin-bottom: 40px;
`;

const formStyle = {
  marginTop: "5vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const labelStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "2vh",
};

const inputStyle = {
  marginLeft: "50px",
};

const inputStyleP = {
  marginLeft: "60px",
};

const submitButtonStyle = {
  marginTop: "3vh",
  background: "#0066ff",
  border: "none",
  width: "20%",
  padding: "8px",
  borderRadius: "8px",
  color: "#FFFF",
  fontWeight: "bold",
  fontSize: "18px",
};

const adminButtonStyle = {
  background: "#edb77e",
  border: "none",
  width: "20%",
  padding: "8px",
  borderRadius: "8px",
  color: "#000",
  fontWeight: "bold",
  fontSize: "18px",
	marginBottom: "0px",
	marginLeft: "16px"
};

function LoginPage(props: any) {
  const [flag, setFlag] = React.useState(1);

  const handleChangeFlag = (event: any) => {
		const temp = event.target.id;
		if (temp === "login") {
			setFlag(1)
		} else {
			setFlag(2)
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
      <DecorationBar />
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
        <div hidden={flag !== 1}>
          <form style={formStyle as React.CSSProperties}>
            <label style={labelStyle as React.CSSProperties}>
              User Name
              <input
                placeholder="Your email address"
                style={inputStyle as React.CSSProperties}
                type="text"
              />
            </label>
            <label style={labelStyle as React.CSSProperties}>
              Password
              <input
                placeholder="Password"
                style={inputStyleP as React.CSSProperties}
                type="text"
              />
            </label>
            <button
              type="submit"
              style={submitButtonStyle as React.CSSProperties}
            >
              Login
            </button>
          </form>
        </div>
        <div hidden={flag !== 2}>
          <form style={formStyle as React.CSSProperties}>
            <label style={labelStyle as React.CSSProperties}>
              New Name
              <input
                placeholder="Your email address"
                style={inputStyle as React.CSSProperties}
                type="text"
              />
            </label>
            <label style={labelStyle as React.CSSProperties}>
              Password
              <input
                placeholder="Password"
                style={inputStyleP as React.CSSProperties}
                type="text"
              />
            </label>
            <button
              type="submit"
              style={submitButtonStyle as React.CSSProperties}
            >
              Sign Up
            </button>
          </form>
        </div>
				<button style={adminButtonStyle as React.CSSProperties}>Admin</button>
      </InputContainer>
    </Wrapper>
  );
}

export default LoginPage;
