import React, { useContext, useState } from "react";
import Headbar from "../LandingPageComponents/Navbar";
import ReadMore from "../LandingPageComponents/ReadMore";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { CandidatesContext } from '../ContextProvider/CandidatesContextProvider';

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
      <div style={divStyle}>
        {filteredCandidates.length &&
          filteredCandidates.map((candidate) => {
            return (
              <div key={candidate._id}>
                <Card>
                  <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                      <Nav.Item>
                        {/* Add function  */}
                        <Nav.Link href="#first">Add to watchlist</Nav.Link>
                      </Nav.Item>

                      {/* Add function */}
                      <Nav.Item>
                        <Nav.Link href="#link">Remove from watchlist</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={nameStyle}>
                      Name {candidate.name}
                    </Card.Title>
                    <Card.Text style={titleStyle}>
                      Title {candidate.title}
                    </Card.Text>
                    <Card.Text style={style}>
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
              </div>
            );
          })}
      </div>
    </div>
  );
}

const divStyle = {
  width: "27%",
  marginTop: "2%",
  marginLeft: "2%",
};

const nameStyle = {
  fontFamily: "Consolas",
  fontSize: 19,
};

const titleStyle = {
  fontFamily: "Consolas",
  fontSize: 18,
  marginTop: "5%",
  fontWeight: "bold",
};

const style = {
  fontFamily: "Consolas",
  fontSize: 17,
  marginTop: "5%",
};

const spanStyle = {
  fontFamily: "Lucida Sans Unicode",
  color: "blue",
  fontSize: 13,
};



export default LandingPage;
