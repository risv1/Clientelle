"use client";

import bg from "@/public/vector.svg";
import logo from "@/public/logo.png";
import google from "@/public/google-icon.svg";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { useEffect, useState } from "react";
import RegisterForm from "@/components/RegisterForm";
import { useAuth } from "@/context/AuthProvider";

const LoginPage = () => {

  const {updateUser, user} = useAuth()
  const router = useRouter();

  useEffect(()=>{
    if(user){
      router.replace("/")
    }
  }, [])

  useEffect(()=>{
    const fetchUser = async() => {
      try{
        const res = await fetch("/api/session", {
          method: "GET",
          credentials: "include",
        });
         // @ts-ignore
        if(res.user !== undefined){
          const data = await res.json();
          updateUser(data.user);
          router.replace("/")
        }
      }catch(error){
        console.log(error)
      }
    } 
    fetchUser()
  }, [])
  
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleRegister = () => {
    setIsLogin(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
  }

  const handleRoute = (route: string) => {
    router.replace(route);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        onClick={() => handleRoute("/")}
        className="hover:cursor-pointer fixed text-white top-0 right-0 p-5"
      >
        <LogOut width={40} height={40} />
      </div>
      <div className="w-1/3 h-[85%] p-14 gap-5 rounded-xl bg-blue-500 bg-opacity-30 shadow-md shadow-blue-500 flex flex-col">
        <div className="flex flex-row gap-2">
          <Image width={40} src={logo} alt="Logo" />
          <h2 className="text-white text-2xl font-semibold self-end">
            Clientelle
          </h2>
        </div>
        {isLogin ? <h1 className="text-white text-3xl font-bold">Login</h1> : <h1 className="text-white text-3xl font-bold">Register</h1>}
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="flex gap-4 flex-col justify-center items-center">
          <h2 className="text-base font-normal text-white">or continue with</h2>
          <div className="w-2/3 bg-white p-3 hover:cursor-pointer gap-3 flex justify-center items-center rounded-lg text-black">
            <Image src={google} alt="googleIcon" width={30} />
            <p className="font-normal text-md">Sign in with Google</p>
          </div>
          {isLogin ? <h2 onClick={handleRegister} className="hover:cursor-pointer text-base font-normal text-white">Don't have an account? Click to register!</h2> : <h2 onClick={handleLogin} className="hover:cursor-pointer text-base font-normal text-white">Already have an account? Click to login!</h2>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
