import { Express } from "express";
import routerV1 from "./router";

const api = async (app: Express) => {
  app.use("/api/v1", routerV1);
};

export default api;
