import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { User } from "@/models/users";

const UserRequests = ({ user }: { user: User | null }) => {
  const [requests, setRequests] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await fetch("/api/request", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.log("Error fetching requests");
        toast({
          title: "Failed to fetch requests!",
          description: `Failed to fetch requests for ${user?.email}. Please try again later.`,
          action: <ToastAction altText="Goto undo">Undo</ToastAction>,
        });
      } else {
        const data = await res.json();
        console.log(data);
        setRequests(data.data);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="w-full h-4/5 p-8 flex flex-col gap-5">
      <h1 className="text-white text-3xl font-bold">Submitted Requests</h1>
      {requests ? (
        <ScrollArea className="flex justify-center items-center flex-col">
          <div className="w-4/5 h-full flex flex-col justify-center gap-3 items-center">
            {requests.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-white text-2xl font-semibold">
                  No requests found
                </h1>
              </div>
            ) : (
              requests.map((request: any, index: any) => (
                <div
                  key={index}
                  className="w-full p-3 bg-blue-500 bg-opacity-30 rounded-lg flex flex-col"
                >
                  <h1 className="text-white text-2xl">
                    {`Request ${index+1}`}: {request.problem_details}
                  </h1>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      ): (
        <div className="w-full h-4/5 flex justify-center items-center">
          <h1 className="text-white text-2xl font-semibold">No submitted requests</h1>
        </div>
      )}
    </div>
  );
};

export default UserRequests;
