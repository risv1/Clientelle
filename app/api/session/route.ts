import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get("token");
  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const parsedUser = jwt.verify(token.value, "secret");
  if (!parsedUser) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(
    JSON.stringify({ message: "Authorized", user: {
        // @ts-ignore
        username: parsedUser.username,
        // @ts-ignore
        email: parsedUser.email,
        // @ts-ignore
        role: parsedUser.role,
    } }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    }
  );
}
