import Recipe from "@/models/recipe";
import connectDB from "@/utils/DB";

export async function GET(request, { params }) {
  const { id } = params;
  const url = new URL(request.url);
  await connectDB();

  const recipes = await Recipe.findById(id);

  return Response.json(recipes);
}
