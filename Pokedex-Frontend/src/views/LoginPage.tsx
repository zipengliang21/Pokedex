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
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import LoginHeader from "components/Login/LoginHeader";
import {useHistory} from "react-router";
import axios from "axios";
import swal from "sweetalert";
import validator from "validator";
import {Alert} from "@material-ui/lab";
import {FormattedMessage, useIntl} from "react-intl";

const BackgroundWrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  background: inherit;
    @media(max-width: 875px){
    width: 418px;
  }
  @media(max-width: 576px){
    width: 100%;
  }
`;

const Indicator = styled.div`
  background: #3d5afe;
  height: 5%;
  width: 100%;
  .adminButtonStyle {
    margin-top: 20px;
    background: #81cfed;
    border: none;
    padding: 10px;
    border-radius: 8px;
    color: #ffff;
    font-weight: bold;
    font-size: 24px;
  }
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
            <FormattedMessage id='Copyright'/>{" © "}
            <Link color="inherit" href="#">
                <FormattedMessage id='Pokedex'/>
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
        width: "100%",
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

export default function SignIn(props: any) {
    const classes = useStyles();
    const [flag, setFlag] = React.useState(1);
    const [email, setEmail] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const history = useHistory();
    const intl = useIntl();

    const handleChangeFlag = (event: any) => {
        const temp = event.currentTarget.id;
        if (temp === "login") {
            setFlag(1);
        } else {
            setFlag(2);
        }
    };

    const handleChangeEmail = (event: any) => {
        const temp = event.target.value;
        setEmail(temp);
    };

    const handleChangeUserName = (event: any) => {
        const temp = event.target.value;
        setUserName(temp);
    };

    const handleChangePassword = (event: any) => {
        const temp = event.target.value;
        setPassword(temp);
    };

    const handleChangeConfirmPassword = (event: any) => {
        const temp = event.target.value;
        setConfirmPassword(temp);
    };

    const handleClickSubmit = async () => {
        if (flag === 1) {
            let response: any;
            try {
                response = await axios.post(`/api/login`, {
                    email: email,
                    password: password
                }, {withCredentials: true});
                if (response.data) {
                    const user = response.data.user;
                    props.setCurrentUser(user);
                    swal(`${intl.formatMessage({id: "Login_Successfully"})}`, "", "success")
                        .then(() => {
                            history.push("/profile");
                        });
                }
            } catch (error) {
                await swal(`${error.response.data}`, "", "warning");
            }
        } else {
            try {
                const response = await axios.post(`/api/register`, {
                    email: email,
                    userName: userName,
                    password: password,
                    confirmPassword: confirmPassword
                }, {withCredentials: true});
                if (response.data) {
                    const user = response.data.user;
                    props.setCurrentUser(user);
                    swal(`${intl.formatMessage({id: "Register_Successfully"})}`, "", "success")
                        .then(() => {
                            history.push("/profile");
                        });
                }
            } catch (error) {
                swal(`${error.response.data}`, "", "warning");
            }
        }
    };

    const isValidEmail = validator.isEmail(email);
    let emailWarning = isValidEmail || email === "" ? null :
        <Alert severity="error">Please provide valid email address!</Alert>;

    return (
        <BackgroundWrapper>
            <LoginHeader flag={flag}/>
            <Wrapper>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <div className={classes.switchContainer}>
                            <div>
                                <Button id="login" className={classes.button} onClick={handleChangeFlag}>
                                    <FormattedMessage id='Sign_In'/>
                                </Button>
                                <Indicator hidden={flag !== 1}/>
                            </div>
                            <div>
                                <Button id="register" className={classes.button} onClick={handleChangeFlag}>
                                    <FormattedMessage id='Register'/>
                                </Button>
                                <Indicator hidden={flag !== 2}/>
                            </div>
                        </div>
                        <form className={classes.form} noValidate hidden={flag !== 1}>
                            <TextField
                                value={email}
                                onChange={handleChangeEmail}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label={intl.formatMessage({id: "Email_Address"})}
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            {emailWarning}
                            <TextField
                                value={password}
                                onChange={handleChangePassword}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label={intl.formatMessage({id: "Password"})}
                                type="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label={intl.formatMessage({id: "Remember_me"})}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleClickSubmit}
                                className={classes.submit}
                            >
                                <FormattedMessage id='Sign_In'/>
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        <FormattedMessage id='Forgot_password'/>
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        <form className={classes.form} noValidate hidden={flag !== 2}>
                            <TextField
                                value={email}
                                onChange={handleChangeEmail}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label={intl.formatMessage({id: "Enter_Your_Valid_Email_Address"})}
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            {emailWarning}
                            <TextField
                                value={userName}
                                onChange={handleChangeUserName}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label={intl.formatMessage({id: "Enter_Your_User_Name"})}
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                value={password}
                                onChange={handleChangePassword}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label={intl.formatMessage({id: "Set_your_Password"})}
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                value={confirmPassword}
                                onChange={handleChangeConfirmPassword}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label={intl.formatMessage({id: "Confirm_Your_Password"})}
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-confirmPassword"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleClickSubmit}
                                className={classes.submit}
                            >
                                <FormattedMessage id='Register'/>
                            </Button>
                        </form>
                    </div>
                    <Box className={classes.copyright} mt={8}>
                        <Copyright/>
                    </Box>
                </Container>
            </Wrapper>
        </BackgroundWrapper>
    );
}