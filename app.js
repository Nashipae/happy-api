
import express from "express";
import { config } from "./config.js";

const port = 4000;
const app = express();
import axios from "axios";
import fs from "fs";

import * as path from "path";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { dateToLocalISO, addMinutes } from "./services/date-time.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./app.html"));
});

app.get("/auth", (req, res) => {
  res.send("success");
});

app.get("/pay", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

