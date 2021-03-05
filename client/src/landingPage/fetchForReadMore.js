import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Fetch1() {
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
              </Card.Text>
              <Button variant="primary">Check Profile</Button>
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

export default Fetch1;
