import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try{

  
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  cookies().delete("token");
  const check = cookies().get("token");
  if (check?.value !== "") {
    return NextResponse.json({message: "Couldn't Logout"});
  }
  return NextResponse.json({message: "Logged out successfully"});
} catch (error) {
  return NextResponse.json({message: "An error occurred",});
}
  
}