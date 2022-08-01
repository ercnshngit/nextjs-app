import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    const user = false;

  return (
    <nav className="w-full bg-primary py-5 px-3 box-border">
        <ul className="flex my-0 mx-auto max-w-5xl items-center">
            <li className="mr-auto font-bold text-xl tracking-wider"><Link href="/"><Image src="/vercel.svg" width={100} height={32} /></Link></li>
            {user && (
            <>
            <li>Welcome, <span className="font-bold"></span></li>
            <li><button className="ml-3 button-base" onClick="">Logout</button></li>
            </>
            )}
            {!user && (
            <>
            <li className="ml-4 text-gray-700"><Link href="/login">Login</Link></li>
            <li className="ml-4 text-gray-700"><Link href="/signup">Signup</Link></li>
            </>
            )}
        </ul>
    </nav>
  )
}