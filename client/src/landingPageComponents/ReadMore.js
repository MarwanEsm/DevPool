import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { UsersContext } from "../ContextProvider/UsersContextProvider";
import { useHistory } from "react-router";

function ReadMore() {
  const { filteredCandidates } = useContext(CandidatesContext);
  const { users } = useContext(UsersContext);
  const history = useHistory();

  const handleClick=(e)=>{
    e.preventDefault();
    if(users){history.push(/*push to the related candidate profile*/)
    }else{
    history.push('/LoginPage')
}

  }

console.log(filteredCandidates);
  return (
    <div style={divStyle}>
      {filteredCandidates && filteredCandidates.length &&
        filteredCandidates.map((candidate) => {
          return (
            <div key={candidate._id}>
              <ul>
                {candidate.workExperiences && candidate.workExperiences.length &&
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
