// apps/api/server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Basic landing page
app.get("/", (req, res) => {
  res.send("KSA Finder API is running ✅");
});

// Healthcheck for uptime
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Avoid 502s for the browser's favicon request
app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

// If nothing matched above, return a fast 404
app.use((req, res) => {
  res.status(404).send("Not found");
});

// IMPORTANT: listen on PORT and 0.0.0.0 so Railway can reach it
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
});
