"use client";

import AuthNavbar from "@/components/AuthNavbar";
import { useAuth } from "@/context/AuthProvider";
import { fetchUser } from "@/lib/utils";
import bg from "@/public/vector.svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProfileDetails from "@/components/ProfileDetails";
import UserRequests from "@/components/UserRequests";

const ProfilePage = () => {
  const { updateUser, user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      console.log(user);
    }
  });

  useEffect(() => {
    fetchUser(updateUser);
  }, []);

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
        logout();
        console.log("Logged Out");
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="w-full h-full flex border border-white justify-center items-center">
        <div className="w-4/5 h-4/5 bg-blue-500 bg-opacity-30 rounded-lg flex flex-row">
          <ProfileDetails user={user} onHandleLogout={handleLogout} />
          <div className="w-1/2 flex justify-center items-center">
            <UserRequests user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
