"use client";

import Dashboard from "@/components/Dashboard";

const AdminPage = () => {
  return (
    <>
      <Dashboard>
        <div className="w-full h-full flex justify-center gap-2 items-center flex-col">
          <h1 className="text-5xl font-bold text-white">Welcome to</h1>
          <h1 className="text-5xl font-bold text-white">Admin</h1>
          <div className="mt-5 w-1/2">
            <p className="text-gray-300 text-2xl font-medium">
              Effortlessly manage users and requests with our streamlined
              solution.
            </p>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default AdminPage;
