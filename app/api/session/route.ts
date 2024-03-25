import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest){
    const token = request.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.json({ message: "Unauthorized" });
    }

    const user = jwt.verify(token, "secret");
    return NextResponse.json({ message: "Authorized", user: {
        //@ts-ignore
        email: user.email,
        //@ts-ignore
        name: user.username,
        //@ts-ignore
        role: user.role
    } });
}