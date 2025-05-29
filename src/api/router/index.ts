import agentRouter from "./agent/index.js";
import express from "express";

const routerV1 = express.Router();
routerV1.use("/agent", agentRouter);
export default routerV1;
