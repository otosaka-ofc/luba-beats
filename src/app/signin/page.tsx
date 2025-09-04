'use client';
import NavItem from '@/components/NavItem';
import {
    IconArrowRightToArc,
    IconAsterisk,
    IconEyeFilled,
    IconEyeOff,
    IconLockFilled,
    IconMailFilled,
    IconRocket,
    IconUserFilled,
} from '@tabler/icons-react';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from 'react-select';

type FormValues = {
    username: string;
    email: string;
    password: string;
    role: { value: string; label: string } | null;
};

export default function Home() {
    const [showPassword, setShowPassword] = React.useState(false);
    const {
        register,
        handleSubmit,
        control,
        clearErrors,
        formState: { isValid },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        clearErrors();
        console.log(data);
    };

    const options = [
        { value: 'productor', label: 'Productor' },
        { value: 'comprador', label: 'Comprador' },
    ];
    return (
        <form
            className="flex-col w-auto bg-base-200 text-center rounded-4xl p-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="text-3xl font-bold mb-5">Crear Cuenta</h1>
            <label className="flex items-center ring-2 ring-emerald-500 text-2xl rounded-2xl mb-1">
                <IconUserFilled className="m-2 size-7 text-emerald-500" />
                <input
                    type="text"
                    className="ms-2 outline-none focus:outline-none"
                    placeholder="Nombre de usuario"
                    {...register('username', { required: true })}
                />
                <IconAsterisk className="size-4 text-red-500" />
            </label>

            <label className="flex items-center ring-2 ring-emerald-500 text-2xl rounded-2xl mt-5">
                <IconMailFilled className="m-2 size-7 text-emerald-500" />
                <input
                    type="email"
                    className="ms-2 outline-none focus:outline-none"
                    placeholder="Correo electrónico"
                    {...register('email', { required: true })}
                />
                <IconAsterisk className="size-4 text-red-500" />
            </label>
            <label className="flex items-center ring-2 ring-emerald-500 text-2xl rounded-2xl mt-5">
                <IconLockFilled className="m-2 size-7 text-emerald-500" />
                <input
                    type={`${showPassword ? 'text' : 'password'}`}
                    className="ms-2 outline-none focus:outline-none"
                    placeholder="Contraseña"
                    {...register('password', { required: true })}
                />
                <IconAsterisk className="size-4 text-red-500" />
                <button
                    className="btn btn-ghost btn-circle me-2 transition"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                >
                    {showPassword ? (
                        <IconEyeOff className="size-7 text-emerald-500" />
                    ) : (
                        <IconEyeFilled className="size-7 text-emerald-500" />
                    )}
                </button>
            </label>
            <Controller
                name="role"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        placeholder="Tu rol (obligatorio)"
                        onChange={(val) => field.onChange(val)}
                        value={field.value || null}
                        instanceId="user-role"
                        unstyled
                        className="text-start mt-5"
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
                )}
            />
            <button
                type="submit"
                disabled={!isValid}
                className="flex btn btn-success rounded-2xl w-1/2 justify-center bg-emerald-500 border-none text-2xl mx-auto mt-5"
            >
                <IconRocket className="size-8" /> Ingresar
            </button>
            <div className="divider w-full h-2">Ó</div>
            <NavItem
                href="/login"
                icon={<IconArrowRightToArc className="me-1" />}
                text="Iniciar Sesion"
                classes="mx-auto"
            />
        </form>
    );
}
