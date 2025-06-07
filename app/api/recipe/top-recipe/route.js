import Recipe from "@/models/recipe";
import connectDB from "@/utils/DB";

export async function GET(request) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  await connectDB();

  let recipes;

  if (searchTerm && searchTerm.trim() !== "") {
    const regex = new RegExp(searchTerm, "i");
    recipes = await Recipe.find({
      $or: [{ title: regex }, { ingredients: regex }, { category: regex }],
    }).sort({ createdAt: -1 }).limit(9);
  } else {
    recipes = await Recipe.find().limit(9);;
  }

  return Response.json(recipes);
}
