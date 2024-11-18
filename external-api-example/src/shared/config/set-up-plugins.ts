import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";

export const setUpPlugins = (app: FastifyInstance) => {
  app.register(cors, {
    origin: "*",
  });
};
