"use client";

import AuthNavbar from "@/components/AuthNavbar";
import Navbar from "@/components/Navbar";
import RequestDesc from "@/components/RequestDesc";
import RequestForm from "@/components/RequestForm";
import { useAuth } from "@/context/AuthProvider";
import { fetchUser } from "@/lib/utils";
import bg from "@/public/vector.svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RequestPage = () => {
  const { updateUser, user } = useAuth();
  const router = useRouter();

  useEffect(()=>{
    if(!user){
      router.replace("/login")
    }
  }, [])

  useEffect(() => {
    fetchUser(updateUser)
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col sm:overflow-x-hidden md:overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!user ? <Navbar /> : <AuthNavbar />}
      <div className="w-full h-full flex justify-center p-5 overflow-x-hidden">
        <div className="lg:w-4/5 xl:w-4/5 h-fit flex sm:flex-col md:flex-col lg:flex-row xl:flex-row rounded-lg shadow-md shadow-blue-500 bg-blue-500 bg-opacity-30">
          <div className="sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full flex flex-col justify-between items-center">
            <RequestDesc />
          </div>
          <div className="sm:mb-5 md:mb-5 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full flex flex-col justify-between items-center">
            <RequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
