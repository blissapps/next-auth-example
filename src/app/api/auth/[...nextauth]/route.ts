import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";

//For production: https://{YOUR_DOMAIN}/api/auth/callback/google
//For development: http://localhost:3000/api/auth/callback/google
// se the availables provider in /api/auth/providers

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: true,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
