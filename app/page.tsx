"use client";

import AuthNavbar from "@/components/AuthNavbar";
import HomeDesc from "@/components/HomeDesc";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthProvider";
import { fetchUser } from "@/lib/utils";
import bg from "@/public/vector.svg";
import { useEffect } from "react";

const HomePage = () => {

  const {user, updateUser} = useAuth()

  useEffect(() => {
    fetchUser(updateUser)
  }, []);

  return (
    <>
      <div
      className="w-screen h-screen flex flex-col sm:overflow-x-hidden md:overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
     {!user ? (<Navbar />):(<AuthNavbar />)}
      <HomeDesc />
      </div>
    </>
  );
};

export default HomePage;
