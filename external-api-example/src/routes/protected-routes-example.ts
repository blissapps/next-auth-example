import { FastifyInstance } from "fastify";
import { authMiddleware } from "../shared/middleware/auth-middleware";

export async function protectedRouteExample(route: FastifyInstance) {
  route.get(
    "/protected",
    { preHandler: authMiddleware },
    async (request: any, response) => {
      console.log("Has permission");
      response.status(200).send({ hasPermission: true });
    }
  );
}
