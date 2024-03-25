import { Button } from "./ui/button";

const LoginForm = () => {
    return(
        <form action="">
            <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-white">Username</label>
                <input
                type="text"
                id="username"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your username"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white">Email</label>
                <input
                type="email"
                id="email"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your email"
                />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="password" className="text-white">Password</label>
                <input
                type="password"
                id="password"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your password"
                />
            </div>
            <div className="mt-6">
                <Button className="w-full">Login</Button>
            </div>
        </form>
    )
}

export default LoginForm;