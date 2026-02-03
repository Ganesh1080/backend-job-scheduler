import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "../services/api";
import "../styles/main.css";

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobById(id).then(setJob);
  }, [id]);

  if (!job) return <p className="loading">Loading...</p>;

  let payload;
  try {
    payload =
      typeof job.payload === "string"
        ? JSON.parse(job.payload)
        : job.payload;
  } catch {
    payload = job.payload;
  }

  return (
    <div className="page fade-up">
      <div className="container">
        <Link to="/" className="link back-link">
          ← Back to Dashboard
        </Link>

        <div className="card">
          <h1 className="title-sm">{job.taskName}</h1>

          <p>Status: <strong>{job.status}</strong></p>
          <p>Priority: <strong>{job.priority}</strong></p>

          <h3 className="section-title">Payload</h3>

          <pre className="json-box">
            {JSON.stringify(payload, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
