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
  const classes = useStyles();

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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={h3Style}>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />

          <button
            className="btn btn-primary btn-block"
            onClick={loginUser}
            disabled={isInvalid}
            style={buttonStyle}
          >
            Log in
          </button>
          <Grid container style={container1}>
            <Grid>
              <Link to="#" variant="body2" style={linkStyle}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Grid container style={container2}>
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#007BFF",
  },
  form: {
    width: "90%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const linkStyle = {
  fontSize: 13.5,
  textDecoration: "underline",
  fontFamily: "Candara",
  color: "#595959",
};

const buttonStyle = {
  fontFamily: "Candara",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  marginBottom: "7%",
  marginTop: "6%",
  width: "25%",
  marginLeft: "36%",
  borderRadius: 10,
  backgroundColor: "#1565c0",
};

const container1 = {
  marginLeft: "33%",
};

const container2 = {
  marginLeft: "22%",
  marginTop: "5%",
};

const h3Style = {
  fontFamily: "Trebuchet MS, sans-serif",
};

export default LoginPageForm;
