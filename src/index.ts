import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import api from "../src/api/index.js";
dotenv.config();
const app = express();
//middlewares
app.use(cors());
app.use(json());

//initializate server
api(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server on port " + PORT);
});
