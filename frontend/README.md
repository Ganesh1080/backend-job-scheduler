#  Job Scheduler & Automation System  
**Dotix Technologies – Full Stack Developer Skill Test**

---

##  Project Overview

This project is a **mini Job Scheduler & Automation System** that allows users to create background jobs, execute them manually, track their execution status, and trigger an outbound webhook once a job is completed.

The system simulates real-world automation engines used for:
- Sending emails
- Generating reports
- Running background processes
- Triggering system-to-system integrations

This assignment demonstrates **full-stack development skills** including frontend UI, backend APIs, database design, asynchronous job handling, and webhook integration.

---

##  Features

### Core Features
- Create jobs with:
  - Task name
  - Priority (Low / Medium / High)
  - JSON payload
- View all jobs in a dashboard
- Track job lifecycle:


- Manually run jobs
- View job details with formatted JSON payload
- Automatically trigger a webhook when a job completes

###  Additional Good Practices
- Input validation
- Safe JSON parsing
- Modular backend structure
- Clean UI with Tailwind CSS
- Separation of concerns (frontend / backend)

---

##  Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- REST APIs
- Axios (for webhook calls)

### Database
- MySQL

## 🔐 Environment Variables

This project uses environment variables to manage sensitive data.

### Backend `.env` file

Create a `.env` file inside the `backend` folder with the following variables:


### Tools
- webhook.site (for webhook testing)
- Postman / Thunder Client (API testing)

---
##  Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js (v18 or above)
- npm
- MySQL
- Git

---

### Backend Setup

```bash
cd backend
npm install
npm run dev

http://localhost:5000

#Frontend Setup
cd frontend
npm install
npm run dev

http://localhost:5173


# Database Setup
CREATE DATABASE dotix_jobs;
USE dotix_jobs;

CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  taskName VARCHAR(255) NOT NULL,
  payload JSON,
  priority VARCHAR(20),
  status VARCHAR(20),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  completedAt TIMESTAMP NULL
);



---

# 2️⃣ Tech Stack

```md
## 🧱 Tech Stack

### Frontend
- React (Vite)
- CSS (Hybrid: Plain CSS + Tailwind utilities)
- React Router DOM

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MySQL

### Integrations
- Webhooks (HTTP POST)
- webhook.site (testing)

### Tools
- Git & GitHub
- Postman / Thunder Client


## 🗄️ Database Schema Design

### `jobs` Table

| Column       | Type      | Description |
|--------------|-----------|-------------|
| id           | INT (PK)  | Unique Job ID |
| taskName     | VARCHAR   | Name of the job |
| payload      | JSON      | Job data |
| priority     | VARCHAR   | Low / Medium / High |
| status       | VARCHAR   | pending / running / completed |
| createdAt    | TIMESTAMP | Job creation time |
| updatedAt    | TIMESTAMP | Job update time |
| completedAt  | TIMESTAMP | Job completion time |

### ER Representation
Job
├── id (PK)
├── taskName
├── payload
├── priority
├── status
├── createdAt
├── updatedAt
└── completedAt

## 🏗️ Architecture Explanation

The system follows a simple full-stack architecture:


### Flow Explanation:
1. User creates a job from the UI.
2. Backend stores job in MySQL with status `pending`.
3. User triggers job execution.
4. Backend simulates processing using async logic.
5. Job status updates to `completed`.
6. Webhook is triggered to notify an external system.

This architecture reflects real-world automation and background job systems.


## 🔌 API Documentation

### Create Job
**POST** `/api/jobs`

```json
{
  "taskName": "Send Email",
  "priority": "High",
  "payload": {
    "email": "user@test.com"
  }
}



---

# 6️⃣ How Webhook Works

```md
## 🔔 Webhook Integration

When a job reaches `completed` status, the backend automatically sends
a POST request to an external webhook URL.

### Webhook Trigger Logic
- Triggered only after job completion
- Uses HTTP POST request
- Sends job metadata as payload

### Webhook Payload Example

```json
{
  "jobId": 1,
  "taskName": "Send Email",
  "priority": "High",
  "payload": {
    "email": "user@test.com"
  },
  "completedAt": "2026-02-03T12:10:00Z"
}




---

# 7️⃣ AI Usage Log (VERY IMPORTANT)

```md
## 🤖 AI Usage Log

### AI Tools Used
- ChatGPT (OpenAI)

### Model
- GPT-5.2

### How AI Helped
- Understanding assignment requirements
- Backend API design
- Debugging JSON parsing issues
- UI/UX styling guidance
- Documentation structuring

### What Was Done Manually
- Business logic decisions
- Architecture planning
- Database schema design
- Debugging with understanding

AI was used as a **development assistant**, not as a replacement for problem-solving.
