"use client";

import { AdminTable } from "@/components/AdminTable";
import Dashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";
import { columns } from "./columns";

const AdminUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/admin/users", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.error("Error fetching data");
      }
      const data = await res.json();
      setData(data);
    };
    fetchUsers();
  }, []);

  return (
    <Dashboard>
      <div className="w-full h-full flex">
        <div className="p-8 w-full h-full">
          {data.length === 0 ? (
            <h1 className="text-2xl text-white">No users found</h1>
          ) : (
            <AdminTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default AdminUsers;
