import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url("https://tw.portal-pokemon.com/special/award_asia_2021_result/img/banner-img.png");
`;

const InputContainer = styled.div`
  margin: auto;
  width: 58%;
  height: 80%;
  background: white;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px gray;
	display: flex;
	flex-direction: column;

  position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
`;

const Title = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 70px;
  text-align: center;
  background: black;
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
  background: #8dc86d;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Indicator = styled.div`
  background: #8dc86d;
  height: 5%;
  width: 100%;
`;

const DecorationBar = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url("https://tw.portal-pokemon.com/special/award_asia_2021_result/img/banner-img.png");
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
  marginBottom: "2%",
};

const inputStyle = {
  marginLeft: "50px",
};

const inputStyleP = {
  marginLeft: "60px",
};

const submitButtonStyle = {
  marginTop: "3%",
  background: "#8dc86d",
  border: "none",
  width: "20%",
  padding: "15px",
  borderRadius: "8px",
  color: "#FFFF",
  fontWeight: "bold",
  fontSize: "18px",
};

const adminButtonStyle = {
  background: "#81cfed",
  border: "none",
  width: "15%",
  padding: "15px",
  borderRadius: "8px",
  color: "#FFFF",
  fontWeight: "bold",
  fontSize: "18px",
	marginBottom: "0",
	marginLeft: "16%"
};

function Login(props: any) {
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

export default Login;

