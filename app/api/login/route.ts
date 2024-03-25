import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

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
    const serialized = serialize("token", token, {
      httpOnly: true,
    });

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email,
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": serialized,
        },
      }
    );
  } catch (error) {
    return NextResponse.json({ message: "An error occurred", error: error });
  }
}
