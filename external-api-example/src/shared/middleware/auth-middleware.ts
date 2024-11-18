import { FastifyRequest, FastifyReply } from "fastify";

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const accessToken = request.headers["authorization"];
    console.log(accessToken);
    console.log("passing through the middleware");
  } catch (e) {
    reply.code(e.statusCode).send(e);
  }
}
