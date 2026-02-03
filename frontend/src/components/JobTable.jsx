import { useEffect, useState } from "react";
import { getJobs, runJob } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/main.css";

export default function JobTable() {
  const [jobs, setJobs] = useState([]);

  // Load jobs
  const fetchJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Run job + refresh states
  const handleRunJob = async (id) => {
    await runJob(id);

    // show RUNNING immediately
    fetchJobs();

    // refresh again after completion
    setTimeout(() => {
      fetchJobs();
    }, 3500);
  };

  return (
    <div className="card fade-up">
      <h2 className="title-sm mb-4">Jobs</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              {/* TASK */}
              <td>
                <Link to={`/jobs/${job.id}`} className="link">
                  {job.taskName}
                </Link>
              </td>

              {/* STATUS */}
              <td>
                {job.status === "running" ? (
                  <span className="badge running">
                    <span className="loader"></span>
                    Running
                  </span>
                ) : (
                  <span className={`badge ${job.status}`}>
                    {job.status}
                  </span>
                )}
              </td>

              {/* PRIORITY */}
              <td>{job.priority}</td>

              {/* ACTION */}
              <td>
                {job.status === "pending" && (
                  <button
                    onClick={() => handleRunJob(job.id)}
                    className="link"
                  >
                    Run
                  </button>
                )}

                {job.status === "running" && (
                  <span style={{ color: "#f97316", fontWeight: 600 }}>
                    Processing...
                  </span>
                )}

                {job.status === "completed" && (
                  <span style={{ color: "#16a34a", fontWeight: 600 }}>
                    Done
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
