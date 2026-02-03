const axios = require("axios");

module.exports = async (job) => {
  try {
    // ✅ SAFE PAYLOAD HANDLING
    let payload;
    if (typeof job.payload === "string") {
      try {
        payload = JSON.parse(job.payload);
      } catch {
        payload = job.payload;
      }
    } else {
      payload = job.payload;
    }

    const webhookPayload = {
      jobId: job.id,
      taskName: job.taskName,
      priority: job.priority,
      payload: payload,
      completedAt: job.completedAt,
    };

    const response = await axios.post(
      process.env.WEBHOOK_URL,
      webhookPayload
    );

    console.log("🔔 Webhook sent successfully:", response.status);
  } catch (err) {
    console.error("❌ Webhook failed:", err.message);
  }
};
