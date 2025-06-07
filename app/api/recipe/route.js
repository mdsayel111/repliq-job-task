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
  const page = url.searchParams.get("p") - 1;
  await connectDB();

  let recipes;
  let totalPages;

  if (searchTerm && searchTerm.trim() !== "") {
    const regex = new RegExp(searchTerm, "i");
    const totalRecipes = await Recipe.countDocuments({
      $or: [{ title: regex }, { ingredients: regex }, { category: regex }],
    });
    totalPages = Math.ceil(totalRecipes / 12);
    recipes = Recipe.find({
      $or: [{ title: regex }, { ingredients: regex }, { category: regex }],
    })
      .skip(page * 12)
      .limit(12);
  } else {
    totalPages = Math.ceil((await Recipe.countDocuments()) / 12);
    recipes = await Recipe.find()
      .skip(page * 12)
      .limit(12);
  }

  return Response.json({ recipes, totalPages });
}
