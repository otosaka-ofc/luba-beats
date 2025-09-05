import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.xyz" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: unknown, _req) {
                const { email, password } = credentials as { email: string; password: string };
                const userFoundByEmail = await prisma.usuarios.findUnique({
                    where: { correo: email },
                });

                if (!userFoundByEmail) throw new Error("No user found with this email");

                const validUser = await bcrypt.compare(password, userFoundByEmail.contrasena || "");
                if (!validUser) throw new Error("Incorrect password");

                return {
                    id: userFoundByEmail.id.toString(),
                    email: userFoundByEmail.correo,
                    name: userFoundByEmail.nombre_usuario,
                    role: userFoundByEmail.tipo,
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
});

export { handler as GET, handler as POST };
