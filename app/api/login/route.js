import connectDB from "@/utils/DB";
import User from "@/models/user-model";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  await connectDB();
  const resData = await User.findOne({ email: body.email });
  if (!resData) {
    return Response.json({ message: "User not found" }, 401);
  }
  const resObj = { name: resData.name, email: resData.email };
  var token = jwt.sign(resObj, process.env.NEXT_PUBLIC_JWT_SECRET);
  cookies().set("token", token, { httpOnly: true });
  return Response.json(resObj);
}
