import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase";

const LoginForm = () => {

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