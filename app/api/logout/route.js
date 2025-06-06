import { cookies } from "next/headers";

export async function GET(request) {
  cookies().delete("token");
  const resObj = { message: "Logged out successfully" };
  return Response.json(resObj);
}
