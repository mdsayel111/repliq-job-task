import User from "@/models/user-model";
import connectDB from "@/utils/DB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  await connectDB();
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;
  const resData = await User.create(body);
  const resObj = { name: resData.name, email: resData.email };
  var token = jwt.sign(resObj, process.env.NEXT_PUBLIC_JWT_SECRET);
  cookies().set("token", token, { httpOnly: true });
  return Response.json(resObj);
}
