import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const RegisterForm = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    useEffect(()=>{
        if(nameRef.current && emailRef.current && passwordRef.current){
            nameRef.current.value = data.name;
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

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(data)
        const res = await fetch("/api/register", {
            method: "POST",
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
    }


    return(
        <form action="">
            <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-white">Username</label>
                <input
                type="text"
                ref={nameRef}
                onChange={handleChange}
                id="username"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your username"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white">Email</label>
                <input
                type="email"
                ref={emailRef}
                onChange={handleChange}
                id="email"
                className="p-2 pl-4 rounded-md bg-white text-black"
                placeholder="Enter your email"
                />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="password" className="text-white">Password</label>
                <input
                ref={passwordRef}
                type="password"
                onChange={handleChange}
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

export default RegisterForm;