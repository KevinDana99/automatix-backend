import express from "express";

const route = express.Router();

route.get("/", (_, res) => {
  res.status(201).json({ status: "created" });
});

export default route;
