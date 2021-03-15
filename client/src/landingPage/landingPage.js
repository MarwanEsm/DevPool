import React, { useContext, useState } from "react";
import Headbar from "../LandingPageComponents/Navbar";
import ReadMore from "../LandingPageComponents/ReadMore";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function LandingPage() {
  const { filteredCandidates } = useContext(CandidatesContext);

  const [text, setText] = useState(false);
  const moreInfo = () => {
    setText(!text);
  };
  const linkName = text ? "Read Less << " : "Read More >> ";

  return (
    <div>
      <Headbar />
      <div style={mainDivStyle}>
        <div>
          {filteredCandidates.length &&
            filteredCandidates.map((candidate) => {
              return (
                <div key={candidate._id}>
                  <Col >
                  <Card style={cardStyle}>
                    <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                      <Nav.Item>
                    {/* Add function, do it later if time left  */}
                    <Nav.Link href="#first" style={linkStyle}>Add to watchlist</Nav.Link>
                      </Nav.Item> 

                    {/* Add function do it later if time left  */}
                    <Nav.Item>
                        <Nav.Link href="#link" style={linkStyle}>Remove from watchlist</Nav.Link>
                      </Nav.Item> 
                    </Nav>
                  </Card.Header>
                    <Card.Body>
                      <Card.Title style={nameStyle}>
                        Name {candidate.fullName}
                      </Card.Title>
                      <Card.Text style={titleStyle}>
                        Title {candidate.title}
                      </Card.Text>
                      <Card.Text style={nameStyle}>
                        Location {candidate.location}
                      </Card.Text>
                      <Card.Text style={style} className="word">
                        Work Experience
                      </Card.Text>
                      <div>
                        <span onClick={moreInfo} style={spanStyle}>
                          {linkName}
                          {text && <ReadMore />}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                  </Col>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}


const mainDivStyle={
  display:'flex',
  justifyContent:'space-between',
  alignItesm:'start',
  flexWrap:'wrap',
  flexFlow : 'column-wrap',
  flexGrow : 2,
  marginTop:'4%',
  marginLeft: '3%'
}


const nameStyle = {
  fontFamily: "Consolas",
  fontSize: 15,
};

const titleStyle = {
  fontFamily: "Consolas",
  fontSize: 15,
  marginTop: "2%",
  fontWeight: "bold",
};

const style = {
  fontFamily: "Consolas",
  fontSize: 17,
  marginTop: "2%",
};

const spanStyle = {
  fontFamily: "Lucida Sans Unicode",
  color: "blue",
  fontSize: 13,
};

const cardStyle = {
  border: "solid",
  marginBottom: "6%",
  borderWeigth: "solid ",
};

const linkStyle={
  fontSize :13,
}

export default LandingPage;
