"use client";

import AuthNavbar from "@/components/AuthNavbar";
import Component from "@/components/HomeDesc";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import bg from "@/public/vector.svg";

const HomePage = () => {

  const {user} = useAuth()

  return (
    <>
      <div
      className="w-screen h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
     {!user ? (<Navbar />):(<AuthNavbar />)}
      <Component />
      </div>
    </>
  );
};

export default HomePage;
