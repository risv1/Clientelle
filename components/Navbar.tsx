import logo from "@/public/logo.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <div className="w-screen h-16 bg-transparent justify-center flex flex-row">
            <div className="w-2/3 h-full flex flex-row gap-20 items-center border border-white">
                <div className="flex flex-row gap-0">
                    <Image width={70} height={35} src={logo} alt="Logo" />
                    <h1 className="text-3xl p-3 font-bold text-white">Clientelle</h1>
                </div>
                <div className="flex flex-row gap-8">
                    <Link href={"/"} className="text-gray-400 text-xl hover:text-white">Home</Link>
                    <Link href={"/request"} className="text-gray-400 text-xl hover:text-white">Request</Link>
                </div>
                <Link href={"/login"} className="ml-auto pl-5 pr-5 pt-2 pb-2 hover:bg-blue-600 duration-150 ease-in-out bg-blue-700 bg-opacity-50 rounded-lg text-white text-xl font-bold">Login</Link>
            </div>
        </div>
    )
}

export default Navbar;