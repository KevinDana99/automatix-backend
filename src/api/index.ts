import { Express } from "express";
import routerV1 from "./router/index.js";

const api = async (app: Express) => {
  app.use("/api/v1", routerV1);
};

export default api;
