import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.xyz" },
                password: { label: "Password", type: "password" },
            },
            async authorize() {
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
});

export { handler as GET, handler as POST };
