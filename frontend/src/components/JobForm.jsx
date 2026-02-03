import { useState } from "react";
import { createJob } from "../services/api";
import "../styles/main.css";

export default function JobForm() {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");
  const [payload, setPayload] = useState("{}");

  const submitJob = async () => {
    try {
      await createJob({
        taskName,
        priority,
        payload: JSON.parse(payload),
      });
      window.location.reload();
    } catch {
      alert("Payload must be valid JSON");
    }
  };

  return (
    <div className="card fade-up mb-8">
      <h2 className="title-sm">Create Job</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
        />

        <select
          className="select"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <textarea
        className="textarea"
        rows="4"
        placeholder='Payload JSON e.g. {"email":"user@mail.com"}'
        onChange={(e) => setPayload(e.target.value)}
      />

      <button className="btn-primary" onClick={submitJob}>
        Create Job
      </button>
    </div>
  );
}
