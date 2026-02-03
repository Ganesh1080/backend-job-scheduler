require("dotenv").config();
const express = require('express');
const cors = require('cors');

const jobRoutes = require('./routes/jobRoutes');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', jobRoutes);

module.exports = app;
