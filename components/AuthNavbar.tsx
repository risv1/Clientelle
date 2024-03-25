import { useAuth } from "@/context/AuthProvider";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthNavbar = () => {
  const { user, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user?.role == "admin") {
      setIsAdmin(true);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        logout()
        console.log("Logged Out");
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-24 p-3 bg-transparent justify-center flex flex-row">
      <div className="w-2/3 h-full flex flex-row gap-20 items-center">
        <div className="flex flex-row gap-0">
          <Image width={70} height={35} src={logo} alt="Logo" />
          <h1 className="text-3xl p-3 font-bold text-white">Clientelle</h1>
        </div>
        <div className="flex flex-row gap-8">
          <Link
            href={"/"}
            className="text-gray-300 font-medium text-xl hover:text-white"
          >
            Home
          </Link>
          <Link
            href={"/request"}
            className="text-gray-300 font-medium text-xl hover:text-white"
          >
            Request
          </Link>
          {isAdmin && (
            <Link
              href={"/admin"}
              className="text-gray-300 font-medium text-xl hover:text-white"
            >
              Admin
            </Link>
          )}
        </div>
        <p
          onClick={handleLogout}
          className="hover:cursor-pointer ml-auto pl-5 pr-5 pt-2 pb-2 hover:bg-red-500 duration-150 ease-in-out bg-red-600 rounded-lg text-white text-xl font-bold"
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default AuthNavbar;
