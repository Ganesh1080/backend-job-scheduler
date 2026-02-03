import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import JobDetailsPage from "./pages/JobDetailsPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
      </Routes>

      {/* Footer always at bottom */}
      <Footer />
    </BrowserRouter>
  );
}
