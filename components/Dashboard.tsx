"use client";

import AuthNavbar from "@/components/AuthNavbar";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import bg from "@/public/vector.svg";
import { ReactNode } from "react";
import Image from "next/image";
import { Send, ShieldHalf, User } from "lucide-react";
import logo from "@/public/logo.png";

const Dashboard = (props: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user?.role !== "admin") {
      router.replace("/");
    }
  }, []);

  const modules = [
    {
      id: 1,
      name: "Users",
      path: "/admin/users",
      icon: <User size={50} color="#ffffff" />,
    },
    {
      id: 2,
      name: "Requests",
      path: "/admin/requests",
      icon: <Send size={50} color="#ffffff" />,
    },
    {
      id: 3,
      name: "Home",
      path: "/admin",
      icon: <ShieldHalf size={50} color="#ffffff" />,
    },
  ];

  return (
    <div
      className="w-screen h-screen flex flex-col sm:overflow-x-hidden md:overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
          <AuthNavbar />
          {user?.role === "admin" && (
          <div className="w-full h-full flex p-5 flex-col">
            <div className="w-full h-full flex flex-row bg-blue-600 rounded-lg bg-opacity-30">
              <div className="w-1/3 h-full p-3 flex flex-col">
                <div className="p-3 flex justify-center gap-3 items-center">
                  <Image width={60} height={30} src={logo} alt="Logo" />
                  <h1 className="text-4xl text-white font-bold">Dashboard</h1>
                </div>
                <div className="p-3 w-full h-full flex flex-col justify-center items-center">
                  {modules.map((module) => (
                    <div
                      key={module.id}
                      onClick={() => router.push(module.path)}
                      className="p-3 border w-2/3 h-1/3 justify-center items-center flex flex-col gap-3 rounded-lg hover:bg-blue-600 duration-150 ease-in-out hover:cursor-pointer bg-blue-500 bg-opacity-30 border-white m-2"
                    >
                      <div className="flex flex-row justify-center items-center gap-3 pr-5">
                        {module.icon}
                        <p className="text-white text-2xl font-bold">Module</p>
                      </div>
                      <p className="text-white text-2xl font-bold">
                        {module.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {props.children}
            </div>
          </div>
        )}
    </div>
  );
};

export default Dashboard;
