import Image from "next/image";
import logo from "@/public/logo.png";

const RequestDesc = () => {
    return(
        <div className="w-full h-full p-8 flex gap-10 flex-col">
        <div className="flex flex-row gap-3 items-center">
          <Image width={60} height={30} src={logo} alt="Logo" />
          <h1 className="text-white text-4xl font-semibold">Request</h1>
        </div>
        <div className="w-4/5 self-center h-full flex-col flex justify-between items-center">
          <p className="text-white text-2xl p-6 font-medium">Effortlessly submit any product-related issues or queries via this request form.</p>
          <div className="w-full h-full p-6 flex flex-col gap-3">
            <p className="text-white text-2xl font-medium">Fill in the form on the right to submit your request.</p>
            <p className="text-white text-2xl font-medium">Our team will get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    )
}

export default RequestDesc;