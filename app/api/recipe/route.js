import Recipe from "@/models/recipe";
import connectDB from "@/utils/DB";

export async function POST(request) {
  const body = await request.json();
  await connectDB();
  const resData = await Recipe.create(body);
  return Response.json(resData);
}

export async function GET(request) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  await connectDB();

  let recipes;
  let totalPages;

  if (searchTerm && searchTerm.trim() !== "") {
    const regex = new RegExp(searchTerm, "i");
    recipes = await Recipe.find({
      $or: [{ title: regex }, { ingredients: regex }, { category: regex }],
    });
  } else {
    recipes = await Recipe.find();
  }
  totalPages = Math.ceil(recipes.length / 12);

  return Response.json(recipes);
}
