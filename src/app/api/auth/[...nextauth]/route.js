import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { databaseConnect } from "@/utils/db";
import User from "@/models/User";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: "userName", type: "text", placeholder: "my userName" },
                password: { label: "password", type: "password", placeholder: "my secure password" }
            },
            async authorize(credentials, req) {
                console.log("Inside authorize");
                databaseConnect();
                // console.log(credentials.name)
                const userFind = await User.findOne({ username: credentials.userName })
                console.log(userFind)

                if (!userFind) {
                    throw new Error("User doesn't exits")
                } return userFind
            }
        })
    ],
    session: { strategy: "jwt" },
    callbacks: {
        jwt(token, user) {
            console.log("token", token)
            // token.role = 
            console.log("*** JWT ***")
            return token
        },
        session(user, token, session) {
            console.log("token2", token)
            return session
        }
    }
})

export { handler as GET, handler as POST }