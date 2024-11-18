import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";
import Adapters from "next-auth/adapters";

import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

//For production: https://{YOUR_DOMAIN}/api/auth/callback/google
//For development: http://localhost:3000/api/auth/callback/google
// se the availables provider in /api/auth/providers

export const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: true,
  session: {
    strategy: "database",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
