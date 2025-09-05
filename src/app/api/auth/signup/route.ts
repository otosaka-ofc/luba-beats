import { usuarios_tipo } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

type FormValues = {
    username: string;
    email: string;
    password: string;
    role: { value: usuarios_tipo; label: string };
};

export async function POST(request: Request) {
    const data: FormValues = await request.json();

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const newUser = await prisma.usuarios.create({
        data: {
            nombre_usuario: data.username,
            contrasena: data.password,
            correo: data.email,
            tipo: data.role?.value,
        },
    });
    const user = {
        id: newUser.id,
        email: newUser.correo,
        name: newUser.nombre_usuario,
        role: newUser.tipo,
    };
    return NextResponse.json(user, {
        status: 201,
    });
}
