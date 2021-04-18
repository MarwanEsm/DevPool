import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const LoginPageForm = () => {
  const { setUser } = useContext(AuthContext);
 

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const isInvalid = state.email === "" || state.password === "";

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        const { user, token } = res;
        localStorage.setItem("token", token);
        setUser(user);
        console.log(user);

        if (user && user.isRegistered === true && user.owner === "candidate") {
          history.push(`/IndividualProfile/${user._id}`);
        } else if (
          user &&
          user.isRegistered === true &&
          user.owner === "employer"
        ) {
          history.push(`/EmployerIndividualProfile/${user._id}`);
        } else if (
          user &&
          user.isRegistered === false &&
          user.owner === "candidate"
        ) {
          history.push("/CandidatesUserPage");
        } else if (
          user &&
          user.isRegistered === false &&
          user.owner === "employer"
        ) {
          history.push("/EmployersUserPage");
        } else {
          alert("User does not exist");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#405D9D",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />

          <button
            class="btn btn-primary btn-block"
            onClick={loginUser}
            disabled={isInvalid}
            style={buttonStyle}
          >
            Sign In
          </button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={linkStyle}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/RegistrationPage" variant="body2" style={linkStyle}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const linkStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 14,
  color: "gray",
  textDecoration: "underline",
};

const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  marginBottom: "7%",
  marginTop: "6%",
  width: "45%",
  marginLeft: "25%",
  borderRadius: 10,
};

export default LoginPageForm;
