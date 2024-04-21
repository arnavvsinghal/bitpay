import db from "@bitpay/db/client";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const SECRET = process.env.JWT_SECRET!;

export const authOptions = {
  secret: SECRET,
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
    async signIn({ user }: any) {
      if (!user?.email) {
        throw new Error("No profile");
      }
      const userDB = await db.user.upsert({
        where: {
          email: user.email,
        },
        create: {
          email: user.email,
          name: user.name,
        },
        update: {
          name: user.name,
        },
      });
      user.id = userDB.id
      return true;
    },
  },

  pages: {
    signIn: "/signin",
  },
};
