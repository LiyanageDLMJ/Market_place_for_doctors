import { Routes, Route } from "react-router-dom";
import NavBar from "./Role/Physician/components/NavBar/NavBar";
import JobInternshipSearch from "./Role/Physician/pages/JobInternshipSearch";
import JobApplicationForm from "./Role/Physician/pages/JobApplicationForm";
import Footer from "./Components/FooterDiv/Footer";


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<JobInternshipSearch />} />
        <Route path="/physician/job-application" element={<JobApplicationForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
