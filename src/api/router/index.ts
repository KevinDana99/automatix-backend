//import llama2Router from "./llama2/index.js";
import huggingfaceRouter from "./huggingface/index.js";
import express from "express";

const routerV1 = express.Router();
//routerV1.use("/llama2", llama2Router);
routerV1.use("/huggingface", huggingfaceRouter);
export default routerV1;
