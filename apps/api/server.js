// apps/api/server.js
import express from "express";

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0"; // important: listen on all interfaces, not just localhost

const app = express();

app.get("/", (_req, res) => {
  res.send("OK from ksa-finder API");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
