// apps/api/server.js  (CommonJS version)
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Optional: stop 502 spam on /favicon.ico
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Health + home
app.get("/healthz", (req, res) => res.status(200).json({ status: "ok" }));

app.get("/", (req, res) => {
  res.send(`
    <h1>KSA Finder API is up ✅</h1>
    <p>Environment PORT: ${PORT}</p>
    <p>Health check: <a href="/healthz">/healthz</a></p>
  `);
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// IMPORTANT for Railway
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
