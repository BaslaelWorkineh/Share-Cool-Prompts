import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        //check if a user already exists
        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          console.log("user does not exist");
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
});

export { handler as GET, handler as POST };
