import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CandidatesContext } from "../CandidatesContext/CandidatesContextProvider";
import { useHistory } from "react-router";

function ReadMore() {
  const { filteredCandidates } = useContext(CandidatesContext);
  const history = useHistory();

  const handleClick=(e)=>{
    e.preventDefault();
    history.push('/LoginPage')


  }


  return (
    <div style={divStyle}>
      {filteredCandidates.length &&
        filteredCandidates.map((candidate) => {
          return (
            <div key={candidate._id}>
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
              <Button variant="primary" onClick={handleClick}>Contact Candidate</Button>
            </div>
          );
        })}
    </div>
  );
}

const divStyle = {
  marginTop: "2%",
};

const style = {
  fontFamily: "Consolas",
  fontSize: 17,
  color: "black",
  marginTop: "5%",
  textDecoration: "none",
};

export default ReadMore;
