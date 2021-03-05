import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Fetch1 from "./fetchForReadMore";

function Fetch() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/candidate/all")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  const [text, setText] = useState(false);
  const readMore = () => {
    setText(!text);
  };
  const linkName = text ? "Read Less << " : "Read More >> ";

  // const extraContent = (
  //   <div>
  //     <Card.Text>Work Experience :</Card.Text>
  //     <ul>
  //       {candidate.workExperiences.length &&
  //         candidate.workExperiences.map((workExperience) => {
  //           return <li>{workExperience}</li>;
  //         })}
  //     </ul>
  //     <Card.Text>Desired Position : {candidate.desiredPosition}</Card.Text>
  //     <Card.Text>Expected Salary : {candidate.expectedSalary}</Card.Text>
  //   </div>
  // );

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
                  <span onClick={readMore}>
                    {linkName}
                    {text && <Fetch1 />}
                    {/* <Card.Text>Work Experience :</Card.Text>
                    <ul>
                      {candidate.workExperiences.length &&
                        candidate.workExperiences.map((workExperience) => {
                          return <li>{workExperience}</li>;
                        })}
                    </ul>
                    <Card.Text>
                      Desired Position : {candidate.desiredPosition}
                    </Card.Text>
                    <Card.Text>
                      Expected Salary : {candidate.expectedSalary}
                    </Card.Text> */}
                  </span>
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

// const fetch1Style = {
//   width: "24%",
// };

export default Fetch;
