import React, { useState } from "react";
import Logo from "./logo";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";


function Headbar() {
  const [state, setState] = useState({
    where: "",
    what: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  };


  // const handleSearch = (event) => {
  //   if (state.where === event.target.value && event.target.name === 'where') {
  //     return (candidates.location.fliter(location))

  //   }
  // }

  //   )

  // }
  //   }



  return (
    <div>
      <Navbar bg="light" variant="light">
        <Logo />
        <Form style={formStyle}>
          <FormControl
            type="text"
            name="where"
            placeholder="Where"
            className="mr-sm-2"
            value={state.where}
            onChange={handleChange}
          />
          <FormControl
            type="text"
            name="what"
            placeholder="What"
            className="mr-sm-2"
            value={state.what}
            onChange={handleChange}
          />
          <Button variant="outline-primary" /*onClick ={handleSearch}*/>Search</Button>
        </Form>
        <Nav className="mr-auto" style={navStyle}>
          <Nav.Link href="/landingpage">Candidates </Nav.Link>
          <Nav.Link href="Registration">Register</Nav.Link>
          <h5 style={h6Style}>|</h5>
          <Nav.Link href="Loging">Login</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}

const h6Style = {
  marginTop: "4%",
};

const navStyle = {
  marginLeft: "8%",
};

const formStyle = {
  display: "flex",
  justifyContent: "space-around",
  alighItems: "center",
  width: "80%",
};

export default Headbar;
