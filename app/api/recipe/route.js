import Recipe from "@/models/recipe";
import connectDB from "@/utils/DB";

export async function POST(request) {
  const body = await request.json();
  await connectDB();
  const resData = await Recipe.create(body);
  return Response.json(resData);
}
