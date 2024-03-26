import { User } from "@/models/users";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useRouter } from "next/navigation";

const ProfileDetails = ({
  user,
  onHandleLogout,
}: {
  user: User | null;
  onHandleLogout: () => void;
}) => {

    const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-10 w-1/2">
      <h1 className="text-4xl text-white font-bold flex flex-row gap-3">
        <Image width={50} height={30} src={logo} alt="Logo" />
        <span>Profile</span>
      </h1>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl text-white">
          Name: <span className="text-sky-300">{user?.username}</span>
        </h1>
        <h1 className="text-2xl text-white">
          Email: <span className="text-sky-300">{user?.email}</span>
        </h1>
      </div>
      <div className="w-2/3 flex flex-row justify-between">
        <Button
          onClick={() => router.replace("/")}
          className="bg-blue-400 hover:bg-blue-500"
        >
          Go Home
        </Button>
        <Button onClick={onHandleLogout} className="bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileDetails;
