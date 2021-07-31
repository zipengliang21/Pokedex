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
import LoginHeader from "../components/LoginHeader";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router";
import axios from 'axios';


const Background = styled.div`
   width: 850px;
   margin: 0 auto;
   background: inherit;
`;


const Wrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  background: inherit;
  @media (max-width: 875px) {
    width: 418px;
  }
  @media (max-width: 576px) {
    width: 100%;
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
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
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
    color: "#616161",
  },
  copyright: {
    marginBottom: 0,
  },
  admin: {},
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    marginLeft: theme.spacing(2),
    alignItems: "center",
  },
}));

export default function AdminPage() {
  const classes = useStyles();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const handleChangeUserName = (event: any) => {
    const temp = event.target.value;
    setUserName(temp);
  }

  const handleChangePassword = (event: any) => {
    const temp = event.target.value;
    setPassword(temp);
  }

  const handleClickSubmit = () => {
    axios({
      method: 'post',
      url: '/adminLogin',
      data: {
        userName: userName,
        password: password
      }
    })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            history.push('/admin/pokemon-manage');
          }
        })
        .catch((error) => {
          console.log(error)
        });
  }

  return (
      <Background>
        <LoginHeader flag={1}/>
        <Wrapper>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography>
                Admin Login
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                    value = {userName}
                    onChange = {handleChangeUserName}
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
                    value = {password}
                    onChange = {handleChangePassword}
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
                    onClick={handleClickSubmit}
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

                <div className={classes.iconContainer}>
                  <NavLink exact activeClassName="selected" to="/login" >
                    Return to Login
                  </NavLink>
                </div>
              </form>
            </div>
            <Box className={classes.copyright} mt={8}>
              <Copyright />
            </Box>
          </Container>
        </Wrapper>
      </Background>
  );
}