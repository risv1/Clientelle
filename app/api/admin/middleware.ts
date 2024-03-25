import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function IsAdmin(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = jwt.verify(token, "secret");
    // @ts-ignore
    if (user.role !== "admin") {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.next();
}