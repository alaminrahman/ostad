'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function dashboard(){

    const router = useRouter();

    const handleLogout = async () =>{
        let res = await fetch('/api/login');
        let json = res.json();
        console.log(json)

        if(json.status == true){
            router.replace('/login')
        }
    }

    return (
        <>
            <h1>dashboard</h1>
            <Link href="#" onClick={ handleLogout } className="btn btn-danger">Logout</Link>
        </>
    );
}