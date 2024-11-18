import { setUpRoutes } from "./shared/config/set-up-routes";
import Fastify from "fastify";
import { envs } from "./shared/config/envs";
import { setUpPlugins } from "./shared/config/set-up-plugins";

const {
  SERVER: { SERVER_HOST, SERVER_PORT },
} = envs;

const server = Fastify({ logger: true });
setUpPlugins(server);
setUpRoutes(server);
server.get("/", (req, res) => res.send("ok").status(200));
server.listen({ port: SERVER_PORT, host: SERVER_HOST });
