import { db } from "@/lib/db";
import { requests } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);

    const id = uuid();
    const sendData = await db.insert(requests).values({
      id: id,
      problem_details: data.problem_details,
      since_when: data.since_when,
      customer_email: data.customer_email,
      customer_phone: data.customer_phone,
      severity: data.severity,
      category: data.category,
      status: "pending",
    });
    if (sendData) {
      console.log("Data sent");
    } else {
      console.log("Database Insertion: An error occurred");
    }
    return NextResponse.json({ message: "Data received", data: data });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error });
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" });
    }

    const user = jwt.verify(token, "secret");
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" });
    }
    
    const data = await db
      .select()
      .from(requests)
      // @ts-ignore
      .where(eq(requests.customer_email, user.email));

    if(data.length === 0){
        return NextResponse.json({ message: "No requests found" });
    }

    return NextResponse.json({ message: "Sent user requests", data: data });
  } catch (error) {
    return NextResponse.json({ message: "Can't get requests", error: error });
  }
}
