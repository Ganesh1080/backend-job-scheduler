import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "../services/api";

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobById(id).then(setJob);
  }, [id]);

  if (!job) return <p className="p-8">Loading...</p>;

  const payload =
    typeof job.payload === "string"
      ? JSON.parse(job.payload)
      : job.payload;

  return (
    <div className="min-h-screen p-8 animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back
        </Link>

        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 mt-4">
          <h1 className="text-2xl font-bold mb-2">{job.taskName}</h1>

          <p>Status: <b>{job.status}</b></p>
          <p>Priority: <b>{job.priority}</b></p>

          <h3 className="mt-4 font-semibold">Payload</h3>

          <pre className="bg-gray-900 text-green-300 p-4 rounded-md text-sm mt-2 overflow-x-auto">
            {JSON.stringify(payload, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
