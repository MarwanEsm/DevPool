import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Fetch() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/candidate/all")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);
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
                      <Nav.Link href="#first">Add to watchlist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">Remove from watchlist</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Name : {candidate.name}</Card.Title>
                  <Card.Text>Title : {candidate.title}</Card.Text>
                  <Card.Text>Location : {candidate.location}</Card.Text>
                  <Card.Text>Work Experience :</Card.Text>

                  <ul>
                    {candidate.workExperiences.lenght &&
                      candidate.workExperiences.map((workExperience) => {
                        return <li>{workExperience}</li>;
                      })}
                  </ul>
                  <Card.Text>
                    Desired Position : {candidate.desiredPosition}
                  </Card.Text>
                  <Card.Text>
                    Expected Salary : {candidate.expectedSalary}
                  </Card.Text>
                  <Nav.Link href="#link">....Read more</Nav.Link>
                  <Button variant="primary">Apply</Button>
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

export default Fetch;
