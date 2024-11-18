import dotenv from "dotenv";
dotenv.config();

export const envs = {
  APP: {
    ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  SERVER: {
    SERVER_PORT: (process.env.SERVER_PORT as unknown as number) || 3000,
    SERVER_HOST: process.env.SERVER_HOST || "0.0.0.0",
  },
  AUTH: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
  },
};
