import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let applications = [];

app.get("/", (req, res) => res.send("Job Application Tracker API is running..."));

app.get("/applications", (req, res) => res.json(applications));

app.post("/applications", (req, res) => {
  const appData = req.body;
  applications.push(appData);
  res.json({ message: "Application added!", appData });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
