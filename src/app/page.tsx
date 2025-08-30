'use client';
import { IconSearch } from '@tabler/icons-react';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col items-center h-full bg-base-200 w-full">
            <div className="flex w-1/3 items-center mx-auto focus-within:ring-2 p-2 focus-within:ring-emerald-500 transition duration-200 m-2 hover:ring-2 hover:ring-emerald-500 rounded-2xl bg-base-100">
                <label className="flex items-center gap-2 w-full">
                    <IconSearch className="size-8 text-emerald-500" />
                    <input
                        type="text"
                        className="outline-none bg-transparent w-full"
                        placeholder="Busca beats por título, genero, mood..."
                    />
                </label>
            </div>
            <div className="w-full h-max-full overflow-y-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 p-4">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="m-2 bg-base-300 rounded-4xl">
                        <div className="relative w-full h-24 mb-2 rounded-t-4xl overflow-hidden">
                            <Image
                                src={`https://picsum.photos/800/400?random=${i}`}
                                alt={`Beat ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                style={{
                                    WebkitMaskImage:
                                        'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 60%, black 100%)',
                                    maskImage:
                                        'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.6) 60%, black 100%)',
                                }}
                            />
                        </div>
                        <div className="flex w-full justify-between">
                            <h3 className="font-bold m-2">Beat {i + 1} asdasd</h3>
                            <span className='size-4 my-auto text-center font-semibold text-white bg-emerald-500 rounded-full h-auto'>{i}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
