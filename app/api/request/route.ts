import { db } from "@/lib/db";
import { requests } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(request: NextRequest){
    try{
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
        });
        if (sendData) {
            console.log("Data sent");
        }else{
            console.log("Database Insertion: An error occurred");
        }
        return NextResponse.json({ message: "Data received", data: data });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error: error });
    }
}