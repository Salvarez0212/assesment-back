import { Application } from "express";
import healthCheck from "./api/healthCheck";
import lists from "./api/lists";
import user from "./api/users";
import authentication from "./auth";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthCheck);
  app.use("/api/favs", lists);
  app.use("/api/user", user);
  app.use("/auth/local", authentication);
};

export default routes;
