import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";
import axios from "axios";
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
  callbacks: {
    async jwt({ token, account, profile }) {
      // make a auth in the external api
      if (profile) {
        const googleUser = profile;
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_EXTERNAL_API}/post-login`,
          googleUser
        );
        console.log(response.data.token);
        const externalApiToken = response.data.token;
        token.accessToken = externalApiToken;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.user.accessToken = token.accessToken;

      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
