import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchUser = async (updateUser: any) => {
  try {
    const res = await fetch("/api/session", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    updateUser(data.user);
  } catch (error) {
    console.log(error);
  }
};