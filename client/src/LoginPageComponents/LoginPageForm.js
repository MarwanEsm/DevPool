import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { UsersContext } from "../ContextProvider/UsersContextProvider";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const LoginPageForm = () => {
  const { setUser } = useContext(AuthContext);
  const { candidate } = useContext(CandidatesContext);
  const { user } = useContext(UsersContext);

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
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
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
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>

    // <div style={divStyle}>
    //   <Form>
    //     <Form.Row>
    //       <Form.Group as={Col} controlId="formGridEmail">
    //         <Form.Label style={textStyle}>Email</Form.Label>
    //         <Form.Control
    //           type="email"
    //           name="email"
    //           onChange={handleChange}
    //           value={state.email}
    //           style={inputtStyle}
    //         />
    //       </Form.Group>

    //       <Form.Group as={Col} controlId="formGridPassword">
    //         <Form.Label style={textStyle}>Password</Form.Label>
    //         <Form.Control
    //           type="password"
    //           name="password"
    //           onChange={handleChange}
    //           value={state.password}
    //           style={inputtStyle}
    //         />
    //       </Form.Group>
    //     </Form.Row>
    //     <br />
    //     <Button
    //       variant="primary"
    //       disabled={isInvalid}
    //       onClick={loginUser}
    //       style={buttonStyle}
    //     >
    //       Login
    //     </Button>
    //     <br />
    //     <br />
    //     <Form.Group id="link">
    //       <Link to="/RegistrationPage" style={linkStyle}>
    //         Don't have an account? Register here{" "}
    //       </Link>
    //     </Form.Group>
    //   </Form>
    // </div>
  );
};

const divStyle = {
  marginTop: "4%",
  marginLeft: "23%",
  width: "50%",
};

const textStyle = {
  fontFamily: "Zapf Chancery, cursive",
};

const inputtStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "black",
  fontFamily: "Courier, monospace",
};

const linkStyle = {
  fontFamily: "Coronetscript, cursive",
  fontSize: 14,
  color: "gray",
};

const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

export default LoginPageForm;
