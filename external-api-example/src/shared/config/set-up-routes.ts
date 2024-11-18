import { FastifyInstance } from "fastify";
import { authRoutes } from "../../routes/auth";
import { protectedRouteExample } from "../../routes/protected-routes-example";

export const setUpRoutes = (app: FastifyInstance) => {
  app.register(authRoutes);
  app.register(protectedRouteExample);
};
