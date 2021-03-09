import React, { useContext } from "react";
import Headbar from "../landingPageComponents/navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { CandidatesContext } from '../CandidatesContext/CandidatesContextProvider';

function LandingPage() {
  const { candidates } = useContext(CandidatesContext);

  return (
    <div>
      <Headbar />
      <div style={divStyle}>
        {candidates.length &&
          candidates.map((candidate) => {
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
                    {/* <div key={candidate._id}>
                      <ul>
                        {candidate.workExperiences.length &&
                          candidate.workExperiences.map((workExperience) => {
                            return <li style={style}>{workExperience}</li>;
                          })}
                      </ul>
                      <Card.Text style={style}>
                        Desired Position {candidate.desiredPosition}
                      </Card.Text>
                      <Card.Text style={style}>
                        Expected Salary {candidate.expectedSalary}
                      </Card.Text>
                      <Button variant="primary">Check Profile</Button>
                    </div> */}

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

//   return (
//     <div>
//       <Headbar/>
//       <Fetch />
//     </div>
//   );
// }

export default LandingPage;
