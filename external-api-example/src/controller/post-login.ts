import { FastifyReply, FastifyRequest } from "fastify";
import { makePostLogin } from "../useCase/post-login";

export const PostLoginController = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  try {
    const token = makePostLogin().execute();
    response.status(200).send({ token });
  } catch (e) {
    response.status(e?.statusCode).send(e);
  }
};
