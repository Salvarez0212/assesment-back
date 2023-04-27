import { Application } from "express";
import healthCheck from "./api/healthCheck";
import lists from "./api/lists";
import user from "./api/users";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthCheck);
  app.use("/api/favs", lists);
  app.use("/api/user", user);
  // app.use('/api/users', user)
  // auth routes
  // app.use('/auth/local', authLocal)
  // app.use('/auth/google', authGoogle)
  // app.use('/auth/facebook', authFacebook)
  // app.use('/auth/github', authGithub)
};

export default routes;
