import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Fetch() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/job/all")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div style={divStyle}>
      {jobs.length &&
        jobs.map((job) => {
          return (
            <div key={job._id}>
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
                  <Card.Title>Title: {job.title}</Card.Title>
                  <Card.Text>Location:{job.location}</Card.Text>
                  <Card.Text>Salary:{job.salary}</Card.Text>
                  <Card.Text>Description:{job.description}</Card.Text>
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
