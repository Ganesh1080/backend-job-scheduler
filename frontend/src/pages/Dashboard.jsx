import JobForm from "../components/JobForm";
import JobTable from "../components/JobTable";
import "../styles/main.css";

export default function Dashboard() {
  return (
    <div className="page fade-up">
      <div className="container">
        <h1 className="title">
          Job Scheduler & Automation Dashboard
        </h1>

        <JobForm />
        <JobTable />
      </div>
    </div>
  );
}
