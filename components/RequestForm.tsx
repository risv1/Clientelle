"use client";

import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useAuth } from "@/context/AuthProvider";

const RequestForm = () => {
  const [data, setData] = useState({
    problem_details: "",
    since_when: "",
    customer_phone: "",
    severity: "",
    category: "",
  });
  const { toast } = useToast()
  const {user} = useAuth()

  const problem_detailsRef = useRef<HTMLTextAreaElement>(null);
  const since_whenRef = useRef<HTMLInputElement>(null);
  const customer_phoneRef = useRef<HTMLInputElement>(null);
  const severityRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (
      problem_detailsRef.current &&
      since_whenRef.current &&
      customer_phoneRef.current &&
      severityRef.current &&
      categoryRef.current
    ) {
      problem_detailsRef.current.value = data.problem_details;
      since_whenRef.current.value = data.since_when;
      customer_phoneRef.current.value = data.customer_phone;
      severityRef.current.value = data.severity;
      categoryRef.current.value = data.category;
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(data);
    const requestData = {
      ...data,
      customer_email: user?.email
    }
    const res = await fetch("/api/request", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("An error occurred");
    }
    console.log(res);
    const message = await res.json();
    console.log(message);
    toast({
      title: "Request Submitted",
      description: `Your ${data.category} request has been submitted successfully.`,
      action: (
        <ToastAction altText="Go to Undo">Undo</ToastAction>
      ),
    })
  };

  return (
    <div className="w-4/5 h-10/12 flex flex-col gap-5 items-center overflow-hidden">
      <h1 className="text-white text-3xl pt-10 font-semibold">Details</h1>
      <ScrollArea className="h-full w-full pr-5 pl-5 pb-5">
        <form className="w-full justify-center flex flex-col" action="">
          <div className="mb-4">
            <label htmlFor="problem_details" className="text-white">
              Problem Details:
            </label>
            <textarea
              onChange={handleChange}
              ref={problem_detailsRef}
              id="problem_details"
              name="problem_details"
              className="w-full bg-gray-200 rounded p-2"
              rows={4}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="since_when" className="text-white">
              Since When:
            </label>
            <input
              onChange={handleChange}
              ref={since_whenRef}
              type="date"
              id="since_when"
              name="since_when"
              className="w-full bg-gray-200 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="customer_phone" className="text-white">
              Customer Phone:
            </label>
            <input
              onChange={handleChange}
              ref={customer_phoneRef}
              type="tel"
              id="customer_phone"
              name="customer_phone"
              className="w-full bg-gray-200 rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="severity" className="text-white">
              Severity:
            </label>
            <select
              onChange={handleChange}
              ref={severityRef}
              id="severity"
              name="severity"
              className="w-full bg-gray-200 rounded p-2"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="text-white">
              Category:
            </label>
            <select
              onChange={handleChange}
              ref={categoryRef}
              id="category"
              name="category"
              className="w-full bg-gray-200 rounded p-2"
            >
              <option value="technical">Technical</option>
              <option value="customer_service">Customer Service</option>
              <option value="billing">Billing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="text-white">
              Upload a photo of the product problem (optional):
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className="bg-gray-200 rounded p-2 w-full"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </ScrollArea>
    </div>
  );
};

export default RequestForm;
