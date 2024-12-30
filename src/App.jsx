import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Footer from "./components/Footer";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
import { useEffect, useState } from "react";

function App() {

  const [jobs, setJobs] = useState([])

const fetchJobs = async() => {
  const tempJobs = []
  const q = query(collection(db, "jobs"))
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((job) => {
  // console.log(doc.id, " => ", doc.data());
  console.log(job.data());
  tempJobs.push({
    ...job.data(),
    id: job.id,
    postedOn: job.data().postedOn.toDate() 
  })
});
setJobs(tempJobs)
}

useEffect(() => {
  fetchJobs()
},[])

 
  return (
    <div>
      <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/jobdetails/:id" element={<JobDetails/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;