"use client";

import Navbar from "@/components/Navbar";
import RequestDesc from "@/components/RequestDesc";
import RequestForm from "@/components/RequestForm";
import { useAuth } from "@/context/AuthProvider";
import bg from "@/public/vector.svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RequestPage = () => {
  const { updateUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/session", {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) {
          router.replace("/login");
        } else {
          const data = await res.json();
          console.log("Fetched Data from session:", data.user);
          updateUser(data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="w-full h-full flex justify-center p-5 overflow-hidden">
        <div className="w-4/5 h-full flex flex-row rounded-lg shadow-md shadow-blue-500 bg-blue-500 bg-opacity-30">
          <div className="w-1/2 h-full flex flex-col justify-between items-center">
            <RequestDesc />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-between items-center">
            <RequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
