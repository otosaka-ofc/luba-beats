'use client';
import {
    IconEyeClosed,
    IconEyeFilled,
    IconEyeOff,
    IconLockFilled,
    IconMailFilled,
    IconRocket,
    IconUserFilled,
} from '@tabler/icons-react';
import React from 'react';
import Select from 'react-select';

export default function Home() {
    const [showPassword, setShowPassword] = React.useState(false);

    const options = [
        { value: 'productor', label: 'Productor' },
        { value: 'comprador', label: 'Comprador' },
    ];
    return (
        <div className="flex-col w-auto bg-base-200 text-center rounded-4xl p-5">
            <h1 className="text-3xl font-bold mb-5">Crear Cuenta</h1>
            <label className="flex items-center ring-2 ring-emerald-500 text-2xl rounded-2xl mb-5">
                <IconUserFilled className="m-2 size-7 text-emerald-500" />
                <input
                    type="text"
                    className="ms-2 outline-none focus:outline-none"
                    placeholder="Nombre de usuario"
                />
            </label>
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
            <Select
                options={options}
                unstyled
                className="text-start text-2xl mb-5"
                placeholder="Selecciona tu rol"
                classNames={{
                    control: () =>
                        'bg-base-200 text-base-content border-2 border-emerald-500 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none',
                    menu: () =>
                        'bg-base-200 text-base-content border-2 border-emerald-500 rounded-2xl mt-2',
                    option: ({ isFocused, isSelected }) =>
                        `px-4 py-2 cursor-pointer rounded-2xl ${
                            isSelected
                                ? 'bg-emerald-500 text-white'
                                : isFocused
                                    ? 'bg-base-300'
                                    : ''
                        }`,
                    singleValue: () => 'text-base-content',
                    placeholder: () => 'text-base-content',
                }}
            />
            <button className="flex btn btn-success rounded-2xl w-1/2 justify-center bg-emerald-500 border-none text-2xl mx-auto">
                <IconRocket className="size-8" /> Crear
            </button>
        </div>
    );
}
