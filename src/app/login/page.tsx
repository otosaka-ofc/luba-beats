'use client';
import NavItem from '@/components/NavItem';
import {
    IconEyeFilled,
    IconEyeOff,
    IconLockFilled,
    IconMailFilled,
    IconPlus,
    IconRocket,
} from '@tabler/icons-react';
import React from 'react';

export default function Home() {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="flex-col w-auto bg-base-200 text-center rounded-4xl p-5">
            <h1 className="text-3xl font-bold mb-5">Iniciar Sesion</h1>

            <label className="flex items-center ring-2 ring-emerald-500 text-2xl rounded-2xl mb-5">
                <IconMailFilled className="m-2 size-7 text-emerald-500" />
                <input
                    type="email"
                    className="ms-2 outline-none focus:outline-none"
                    placeholder="Correo electrónico"
                />
            </label>
            <label className="flex items-center ring-2 ring-emerald-500 text-2xl rounded-2xl mb-5">
                <IconLockFilled className="m-2 size-7 text-emerald-500" />
                <input
                    type={`${showPassword ? 'text' : 'password'}`}
                    className="ms-2 outline-none focus:outline-none"
                    placeholder="Contraseña"
                />
                <button
                    className="btn btn-ghost btn-circle me-2 transition"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <IconEyeOff className="size-7 text-emerald-500" />
                    ) : (
                        <IconEyeFilled className="size-7 text-emerald-500" />
                    )}
                </button>
            </label>

            <button className="flex btn btn-success rounded-2xl w-1/2 justify-center bg-emerald-500 border-none text-2xl mx-auto">
                <IconRocket className="size-8" /> Ingresar
            </button>
            <div className="divider w-full h-2">Ó</div>
            <NavItem href="/signin" icon={<IconPlus />} text="Crear una cuenta" classes="mx-auto" />
        </div>
    );
}
