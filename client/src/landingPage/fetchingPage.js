import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Fetch1 from "./fetchForReadMore";

// if can change the color of the first word//

function Fetch() {
  const [candidates, setCandidates] = useState([]
    // candidates: [],
    // filterCandidate: [],
    // filterLocation: []
  );

  useEffect(() => {
    fetch("http://localhost:5000/candidate/all")
      .then((res) => res.json())
      .then((data) => setCandidates(
        data,
        // filterCandidate: candidates.title,
        // filterLocation: candidates.location
      ));
  }, []);

  const [text, setText] = useState(false);
  const readMore = () => {
    setText(!text);
  };
  const linkName = text ? "Read Less << " : "Read More >> ";

  return (
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
                  <div>
                    <span onClick={readMore} style={spanStyle}>
                      {linkName}
                      {text && <Fetch1 />}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
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
export default Fetch;
