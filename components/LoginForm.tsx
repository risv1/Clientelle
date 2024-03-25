import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const LoginForm = () => {

    const router = useRouter();
    const { toast } = useToast()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    useEffect(()=>{
        if(emailRef.current && passwordRef.current){
            emailRef.current.value = data.email;
            passwordRef.current.value = data.password;
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.preventDefault();
        console.log(data)
        const res = await fetch("/api/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }   
        })
        if(!res.ok){
            console.log("An error occurred")
        }
        console.log(res)
        const message = await res.json();
        console.log(message)
        toast({
            title: "Logged in successfully",
            description: `User ${data.email} has been logged in successfully.`,
            action: (
              <ToastAction altText="Goto undo">Undo</ToastAction>
            ),
          })
        router.replace("/")
    }

    return(
        <form action="">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white">Email</label>
                <input
                ref={emailRef}
                type="email"
                onChange={handleChange}
                id="email"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your email"
                />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="password" className="text-white">Password</label>
                <input
                onChange={handleChange}
                ref={passwordRef}
                type="password"
                id="password"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your password"
                />
            </div>
            <div className="mt-6">
                <Button onClick={handleSubmit} className="w-full">Login</Button>
            </div>
        </form>
    )
}

export default LoginForm;