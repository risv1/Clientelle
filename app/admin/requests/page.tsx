"use client";

import { AdminTable } from "@/components/AdminTable";
import Dashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";
import { columns } from "./columns";

const AdminRequests = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await fetch("/api/admin/requests", {
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
      console.log(data);
      setData(data);
    };
    fetchRequests();
  }, []);

  return (
    <Dashboard>
      <div className="p-8 w-full h-full">
        {data.length === 0 ? (
          <h1 className="text-2xl text-white">No requests found</h1>
        ) : (
          <AdminTable columns={columns} data={data} />
        )}
      </div>
    </Dashboard>
  );
};

export default AdminRequests;
