// import { useEffect, useState } from "react";

// function Fetch() {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/job/all")
//       .then((res) => res.json())
//       .then((data) => setJobs(data));
//   }, []);
//   return (
//     <div>
//       {jobs.length &&
//         jobs.map((job) => {
//           return (
//             <div key={job._id}>
//               <h1>{job.title}</h1>
//               <h1>{job.location}</h1>
//               <h2>{job.salary}</h2>
//               <h2>{job.description}</h2>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default Fetch;
