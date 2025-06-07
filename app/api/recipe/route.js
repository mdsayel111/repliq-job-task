import Recipe from "@/models/recipe";
import connectDB from "@/utils/DB";

// Create a new recipe
export async function POST(request) {
  const body = await request.json();
  await connectDB();
  const resData = await Recipe.create(body);
  return Response.json(resData);
}

// Get recipes with optional search and pagination
export async function GET(request) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q") || "";
  const page = parseInt(url.searchParams.get("p") || "1") - 1;

  await connectDB();

  let recipes;
  let totalPages;

  const ITEMS_PER_PAGE = 12;

  if (searchTerm.trim() !== "") {
    const regex = new RegExp(searchTerm, "i");

    const filter = {
      $or: [{ title: regex }, { ingredients: regex }, { category: regex }],
    };

    const totalRecipes = await Recipe.countDocuments(filter);
    totalPages = Math.ceil(totalRecipes / ITEMS_PER_PAGE);

    recipes = await Recipe.find(filter)
      .sort({ createdAt: -1 })
      .skip(page * ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE);
  } else {
    const totalRecipes = await Recipe.countDocuments();
    totalPages = Math.ceil(totalRecipes / ITEMS_PER_PAGE);

    recipes = await Recipe.find()
      .sort({ createdAt: -1 })
      .skip(page * ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE);
  }

  return Response.json({ recipes, totalPages });
}
