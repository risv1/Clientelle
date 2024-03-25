import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import bg from "@/public/vector.svg";

const HomePage = () => {
  return (
    <>
      <div
      className="w-screen h-screen flex"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      </div>
    </>
  );
};

export default HomePage;
