import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import IndividualEmplyoerNavBar from "./NavBarIndividualEmployer";

function EmployerIndividualProfile() {
  const { id } = useParams();
  const history = useHistory();
  const [employer, setEmplyoer] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/employer/me`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmplyoer(data);
      });
  }, []);

  return (
    <div>
      <div>
        <IndividualEmplyoerNavBar />
      </div>

      <div>{employer && <h4>{employer.name}</h4>}</div>
    </div>
  );
}

export default EmployerIndividualProfile;
