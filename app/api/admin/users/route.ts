import { NextRequest, NextResponse } from "next/server";
import { IsAdmin } from "../middleware";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";

export async function GET(request: NextRequest) {
    
    const response = await IsAdmin(request);
    if (response.status === 401) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const usersData = await db.select().from(users)
    if (!usersData) {
        return NextResponse.json({ message: "No requests found" }, { status: 404 });
    }

    return NextResponse.json(usersData);
}