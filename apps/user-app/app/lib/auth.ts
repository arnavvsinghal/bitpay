import db from "@bitpay/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions = {
  session: {
    strategy: "jwt",
  },
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
    async signIn(a:any) {
      console.log(a)
      return true;
      // if (!profile?.email) {
      //   throw new Error('No profile')
      // }

      // await prisma.user.upsert({
      //   where: {
      //     email: profile.email,
      //   },
      //   create: {
      //     email: profile.email,
      //     name: profile.name,
      //   },
      //   update: {
      //     name: profile.name,
      //   },
      // })
      // return true
    },
  },
 
  pages: {
    signIn: "/signin",
  },
  //   CredentialsProvider({
  //     name: "Credentials",
  //     credentials: {
  //       name: {
  //         label: "Name",
  //         type: "text",
  //         placeholder: "tyler durden",
  //       },
  //       email: {
  //         label: "Email",
  //         type: "text",
  //         placeholder: "projectmayhem@fc.com",
  //       },
  //       phone: {
  //         label: "Phone number",
  //         type: "text",
  //         placeholder: "1231231231",
  //       },
  //       password: {
  //         label: "Password",
  //         type: "password",
  //         placeholder: "••••••••",
  //       },
  //     },
  //     async authorize(credentials: any) {
  //       const existingUser = await db.user.findFirst({
  //         where: {
  //           number: credentials.phone,
  //           email: credentials.email,
  //         },
  //       });

  //       if (existingUser) {
  //         const passwordValidation = await bcrypt.compare(
  //           credentials.password,
  //           existingUser.password
  //         );
  //         if (passwordValidation) {
  //           return {
  //             id: existingUser.id.toString(),
  //             name: existingUser.name,
  //             email: existingUser.number,
  //           };
  //         }
  //         return null;
  //       }

  //       const hashedPassword = await bcrypt.hash(credentials.password, 10);
  //       try {
  //         const user = await db.user.create({
  //           data: {
  //             email: credentials.email,
  //             name: credentials.name,
  //             number: credentials.phone,
  //             password: hashedPassword,
  //           },
  //         });

  //         return {
  //           id: user.id.toString(),
  //           name: user.name,
  //           email: user.number,
  //         };
  //       } catch (e) {
  //         console.error(e);
  //       }

  //       return null;
  //     },
  //   }),
  // ],
};
