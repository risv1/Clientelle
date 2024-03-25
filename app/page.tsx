"use client";

import AuthNavbar from "@/components/AuthNavbar";
import Component from "@/components/HomeDesc";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthProvider";
import bg from "@/public/vector.svg";
import { useEffect } from "react";

const HomePage = () => {

  const {user, updateUser} = useAuth()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/session", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        updateUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
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
      <Component />
      </div>
    </>
  );
};

export default HomePage;
