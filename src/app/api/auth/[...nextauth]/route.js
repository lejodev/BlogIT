import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { databaseConnect } from "@/utils/db";
import User from "@/models/User";
import { redirect } from "next/dist/server/api-utils";
import { setCookie } from "cookies-next";

export const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "userName", type: "text", placeholder: "my userName" },
        password: {
          label: "password",
          type: "password",
          placeholder: "my insecure password",
        },
      },
      async authorize(credentials, req) {
        databaseConnect();

        // const router = useRouter();
        const userFind = await User.findOne({ userName: credentials.name });
        console.log(userFind);

        if (!userFind) {
          console.log("No user with this username");
          throw new Error("User doesn't exits");
          // return router.push("/about");
        }
        return userFind;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role;
        token.session = session;
        token.userId = user._id;
        console.log("======", user);
      }
      return token;
    },
    async session({ user, token, session }) {
      session.user.role = token.role;
      session.user.userId = token.userId;
      console.log("SESSION =SSSSSWWWW", session);
      return session;
    },
  },
  session: { strategy: "jwt" },
});

export { authOptions as GET, authOptions as POST };
