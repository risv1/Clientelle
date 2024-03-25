import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);

    const id = uuid()
    const passwordHash = await bcrypt.hash(data.password, 10);

    const sendData = await db.insert(users).values({
      id: id,
      username: data.username,
      email: data.email,
      password: passwordHash,
      role: "user",
    });

    if (sendData) {
      console.log("Data sent");
    } else {
      console.log("Database Insertion: An error occurred");
    }

    return NextResponse.json({ message: "Data received", data: data});
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error });
  }
}
