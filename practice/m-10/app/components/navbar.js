'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Navbar(){
    const router = useRouter();

    return (
        <>
            <ul className="my-5 flex gap-3 text-blue-4">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'about'}>About</Link></li>
                <li><Link href={'mission'}>Mission</Link></li>
                <li><Link href={'vision'}>Vision</Link></li>
                <li><Link href={'admin/dashboard'}>Dashboard</Link></li>
            </ul>
        </>
    );
}