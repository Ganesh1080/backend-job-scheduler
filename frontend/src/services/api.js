const BASE_URL = import.meta.env.VITE_API_URL;

// CREATE JOB
export const createJob = async (job) => {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  return res.json();
};

// LIST JOBS
export const getJobs = async (filters = "") => {
  const res = await fetch(`${BASE_URL}/jobs${filters}`);
  return res.json();
};

// JOB DETAILS
export const getJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/jobs/${id}`);
  return res.json();
};

// RUN JOB
export const runJob = async (id) => {
  const res = await fetch(`${BASE_URL}/run-job/${id}`, {
    method: "POST",
  });
  return res.json();
};
