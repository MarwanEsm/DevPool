import React from "react";
import Logo from "./logo";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

function Headbar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Logo />
        <Form style={formStyle}>
          <FormControl type="text" placeholder="Where" className="mr-sm-2" />

          <FormControl type="text" placeholder="What" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="mr-auto" style={navStyle}>
          <Nav.Link href="Jobs">Candidates </Nav.Link>
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
