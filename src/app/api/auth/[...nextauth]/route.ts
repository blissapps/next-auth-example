import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";
import axios from "axios";
//For production: https://{YOUR_DOMAIN}/api/auth/callback/google
//For development: http://localhost:3000/api/auth/callback/google
// se the availables provider in /api/auth/providers

type Profile = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
};

type Account = {
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  id_token: string;
};

type Token = {
  name: string;
  email: string;
  picture: string;
  sub: string;
};

type JWTparams = {
  token: Token;
  account: Account;
  profile: Profile;
};
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
