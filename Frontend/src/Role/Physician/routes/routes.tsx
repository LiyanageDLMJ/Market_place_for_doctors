import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import JobInternshipSearch from "../pages/JobInternshipSearch";
import JobApplicationForm from "../pages/JobApplicationForm";
import Footer from "../../../Components/FooterDiv/Footer";

const routes = () => {
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

export default routes;
