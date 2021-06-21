import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Github from "../components/LoginIcon/Github";
import Google from "../components/LoginIcon/Google";

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
  no-repeat center center fixed rgba(161, 189, 198, 0.75);
  background-size: cover;
  background-blend-mode: multiply;
`;



const Header = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 8px;
  color: #212d3b;
  background: linear-gradient(
    112.93deg,
    #dcdece 9.22%,
    rgba(53, 57, 30, 0.58) 70.36%
  );
  .home {
    margin-left: 40px;
    margin-right: 5px;
  }
  .login {
    margin-right: 50px;
  }
  .user {
    margin-right: 5px;
  }
`;

const Indicator = styled.div`
  background:#3d5afe;
  height: 5%;
  width: 100%;
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
`;

const Center = styled.div`
   .google {
   margin: 0 auto;
 }
`;


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Pokedex
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(40),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(53, 57, 30, 0.4)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  switchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: '#616161'
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [flag, setFlag] = React.useState(1);

  const handleChangeFlag = (event: any) => {
    const temp = event.currentTarget.id;
    if (temp === "login") {
      setFlag(1);
    } else {
      setFlag(2);
    }
  };

  return (
    <div>
      <Background>
      <Header>
        <NavLink exact activeClassName="selected" to="/" className="home">
          <FontAwesomeIcon icon="home" className="home" />
          <span className="span">Home</span>
        </NavLink>
        <NavLink exact activeClassName="selected" to="/login" className="login">
          <FontAwesomeIcon icon="user" className="user" />
          <span className="span">Login</span>
        </NavLink>
      </Header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <div className={classes.switchContainer}>
            <div>
              <Button id="login" className={classes.button} onClick={handleChangeFlag}>
                Sign In
              </Button>
              <Indicator hidden={flag !== 1}/>
            </div>
            <div>
              <Button id="register" className={classes.button} onClick={handleChangeFlag}>
                Register
              </Button>
              <Indicator hidden={flag !== 2}/>
            </div>
          </div>
          <form className={classes.form} noValidate hidden={flag !== 1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
          <form className={classes.form} noValidate hidden={flag !== 2}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter Your Valid Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Set your Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
        </div>
        <Button
              type="submit"
      
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Admin
            </Button>
        <Center>
             <div className="icon">
                <div className="google"><a href="https://github.com/zipengliang21" target="_blank"
                                           rel="noreferrer"><Google/></a></div>
                <div className="github"><a href="https://github.com/zipengliang21" target="_blank"
                                           rel="noreferrer"><Github/></a></div>
             </div>
         </Center>
             <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </Background>
    </div>
  );
}
