import express from "express";
import routes from "./routes/index.js";

// Instance of Express application
const app = express();

app.use(express.json()); // Parse incoming request with JSON payload
app.use("/api", routes); // Mount routes module at the '/api' path

export default app;
