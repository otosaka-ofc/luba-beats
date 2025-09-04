'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function NavItem({
    text,
    href,
    icon,
    classes,
}: {
    text: string;
    href: string;
    icon: React.ReactNode;
    classes?: string;
}) {
    const pathname: string = usePathname();
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.push(href)}
            className={`group flex items-center border-2 border-emerald-500 rounded-full px-3 py-1 font-bold text-emerald-500 not-disabled:hover:bg-emerald-500 not-disabled:hover:text-white transition disabled:opacity-45 hover:cursor-pointer not-disabled:active:scale-105 ${
                classes ?? ''
            }`}
            disabled={pathname == href ? true : false}
        >
            {icon}
            {text}
        </button>
    );
}
