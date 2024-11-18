import { FastifyInstance } from "fastify";
import { PostLoginController } from "../controller/post-login";

export async function authRoutes(route: FastifyInstance) {
  route.post(
    "/post-login",
    async (req: any, res) => await PostLoginController(req, res)
  );
}
