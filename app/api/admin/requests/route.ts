import { NextRequest, NextResponse } from "next/server";
import { IsAdmin } from "../middleware";
import { db } from "@/lib/db";
import { requests} from "@/lib/schema";

export async function GET(request: NextRequest) {
    
    const response = await IsAdmin(request);
    if (response.status === 401) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const requestsData = await db.select().from(requests)
    if (!requestsData) {
        return NextResponse.json({ message: "No requests found" }, { status: 404 });
    }

    return NextResponse.json(requestsData);
}