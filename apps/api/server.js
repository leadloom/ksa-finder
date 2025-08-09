// apps/api/server.js (CommonJS)
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Basic landing page
app.get("/", (req, res) => {
  res.send("KSA Finder API is running ✅");
});

// Healthcheck
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Avoid 502 for favicon
app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

// Fast 404 for everything else
app.use((req, res) => {
  res.status(404).send("Not found");
});

// IMPORTANT: listen on 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
});
