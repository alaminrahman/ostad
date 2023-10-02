import Link from "next/link";

export default function Navbar(){
    return (
        <>
        <ul className="flex space-x-3 mb-5">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/blog"><li>Blogs</li></Link>
        </ul>
        </>
    );
}