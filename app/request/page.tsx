import Navbar from "@/components/Navbar";
import RequestDesc from "@/components/RequestDesc";
import RequestForm from "@/components/RequestForm";
import bg from "@/public/vector.svg";

const RequestPage = () => {
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
