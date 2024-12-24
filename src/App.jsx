import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Footer from "./components/Footer";


function App() {
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