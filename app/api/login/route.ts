import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const [user] = await db.select().from(users).where(eq(users.email, email));
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ message: "Password incorrect" });
    }

    const token = jwt.sign(user, "secret", { expiresIn: "24h" });
    cookies().set("token", token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60 * 1000)})

    return NextResponse.json({ message: "Logged in successfully", user: {
      email: user.email,
      name: user.username,
      role: user.role
    } });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error });
  }
}
