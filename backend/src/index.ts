import express from 'express';
import { addCrag, getAllCrags } from "./cragActions";
import { createCragsTable, dropCragsTable } from "./db/crags";

const app = express();
const port = 3000;

app.use(express.json());

app.use(function (_req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); // TODO: make secure
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/crags', getAllCrags);

app.post('/crags', addCrag);

app.listen(port, () => {
  dropCragsTable();
  createCragsTable();
  console.log(`App is running on port ${port}.`);
});
