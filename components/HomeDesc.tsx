import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <div className="w-full h-full flex overflow-hidden">
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
          <div className="w-4/5 h-5/6 rounded-lg flex justify-center items-center p-3 flex-col gap-3 bg-blue-500 bg-opacity-30">
            <h1 className="text-6xl font-bold text-white">Welcome to</h1>
            <h1 className="text-6xl font-bold text-white">Clientelle</h1>
            <p className="text-2xl text-white pl-10">
              Facilitating client support processes to ensure seamless
              interactions and enhance overall customer satisfaction.
            </p>
            <Link
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
              href="/request"
            >
              Submit Request
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-4/5 h-5/6 flex-col p-5 bg-blue-500 flex justify-center items-center bg-opacity-30 rounded-lg">
            <Image
              src="/customer-service.png"
              width={400}
              height={400}
              alt="vector"
              className="w-2/3 mt-10 h-2/3 object-cover"
            />
            <p className="text-white text-xl font-medium">
              At Clientelle, we understand the importance of exceptional
              customer service in building and maintaining strong relationships
              with your clientele. Our app is designed to streamline and enhance
              your customer service operations, ensuring that every interaction
              with your clients is seamless and satisfactory.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
