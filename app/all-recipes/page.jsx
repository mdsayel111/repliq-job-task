"use client";
import HttpKit from "@/common/helpers/HttpKit";
import RecipeCard from "@/components/Recipes/RecipeCard";
import Pagination from "@/components/shared/pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const AllRecipes = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [recipes, setRecipes] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: HttpKit.getTopRecipes,
  });

  useEffect(() => {
    if (data) {
      setRecipes(data);
    }
  }, [data]);

  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
    setRecipeId(id);
  };

  console.log(data);
  return (
    <div className="pt-32">
      <div className="w-[89%] mx-auto">
        <h1 className="text-2xl font-bold">All recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((recipe) => (
            <RecipeCard
              key={recipe?.id}
              recipe={recipe}
              handleDetailsOpen={handleDetailsOpen}
              hasBtn={true}
            />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default AllRecipes;
