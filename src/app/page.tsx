'use client';
import { IconSearch } from '@tabler/icons-react';

export default function Home() {
    return (
        <div className="flex-col justify-center h-full bg-base-200 w-full">
            <div className="flex w-1/3 items-center mx-auto focus-within:ring-2 focus-within:ring-emerald-500 p-1 transition duration-200 m-2 hover:ring-2 hover:ring-emerald-500 rounded-2xl bg-base-100">
                <label className="flex items-center gap-2 w-full">
                    <IconSearch className="size-8 text-emerald-500" />
                    <input
                        type="text"
                        className="outline-none bg-transparent w-full"
                        placeholder="Busca beats por título, genero, mood..."
                    />
                </label>
            </div>
            <div className="w-full h-full overflow-auto">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="p-4 m-2 bg-base-300 rounded-lg">
                        Beat {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
