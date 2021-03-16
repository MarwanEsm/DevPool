// import React, { useContext, useState } from "react";
// // import Headbar from "../LandingPageComponents/Navbar";
// // import ReadMore from "../LandingPageComponents/ReadMore";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// // import Nav from "react-bootstrap/Nav";
// // import Col from "react-bootstrap/Col";
// import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

// function LandingPage() {
//   const { filteredCandidates } = useContext(CandidatesContext);

//   return (
//     <div>
//       {filteredCandidates &&
//         filteredCandidates.length &&
//         filteredCandidates.map((candidate) => {
//           return (
//             <div>
//               <li style={listStyle}>- {candidate.workExperience}</li>

//               <Card.Text style={style}>
//                 Desired Position {candidate.desiredPosition}
//               </Card.Text>
//               <Card.Text style={style}>
//                 Expected Salary {candidate.expectedSalary}
//               </Card.Text>
//               <Button /*onClick={handleClick}*/>Contact Candidate</Button>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
// // const mainDivStyle = {
// //   // display: "flex",
// //   // justifyContent: "space-between",
// //   // alignItesm: "start",
// //   // flexWrap: "wrap",
// //   // flexFlow: "column-wrap",
// //   // flexGrow: 2,
// //   marginTop: "4%",
// //   marginLeft: "3%",
// //   width: "100%",
// // };

// const style = {
//   fontFamily: "Consolas",
//   fontSize: 17,
//   marginTop: "2%",
// };

// const listStyle = {
//   listStyleType: "none",
// };

// export default LandingPage;
