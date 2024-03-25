import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const RequestForm = () => {
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
          <button
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
