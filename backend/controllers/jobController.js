const db = require('../database/db');
const sendWebhook = require('../services/webhookService');

// CREATE JOB
exports.createJob = (req, res) => {
  const { taskName, payload, priority } = req.body;

  if (!taskName || !priority) {
    return res.status(400).json({ message: 'Task name and priority required' });
  }

  const sql = `
    INSERT INTO jobs (taskName, payload, priority, status)
    VALUES (?, ?, ?, 'pending')
  `;

  db.query(sql, [taskName, JSON.stringify(payload || {}) , priority], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: 'Job created', jobId: result.insertId });
  });
};

// LIST JOBS
exports.getJobs = (req, res) => {
  const { status, priority } = req.query;

  let sql = 'SELECT * FROM jobs WHERE 1=1';
  let params = [];

  if (status) {
    sql += ' AND status=?';
    params.push(status);
  }

  if (priority) {
    sql += ' AND priority=?';
    params.push(priority);
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// JOB DETAIL
exports.getJobById = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM jobs WHERE id=?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (!results.length) return res.status(404).json({ message: 'Job not found' });

    res.json(results[0]);
  });
};

// RUN JOB
exports.runJob = (req, res) => {
  const { id } = req.params;

  db.query('UPDATE jobs SET status="running" WHERE id=?', [id]);

  setTimeout(() => {
    db.query(
      'UPDATE jobs SET status="completed", completedAt=NOW() WHERE id=?',
      [id],
      () => {
        db.query('SELECT * FROM jobs WHERE id=?', [id], (err, results) => {
          sendWebhook(results[0]);
        });
      }
    );
  }, 3000);

  res.json({ message: 'Job started' });
};
