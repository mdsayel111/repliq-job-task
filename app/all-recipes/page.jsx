"use client";
import Modal from "@/components/Modal";
import RecipeCard from "@/components/Recipes/RecipeCard";
import SingleRecipe from "@/components/Recipes/SingleRecipe";
import Pagination from "@/components/shared/pagination/Pagination";
import useCartData from "@/hooks/useCartData";
import useWishlistData from "@/hooks/useWishlistData";
import { addToCart } from "@/redux/slices/cart-slice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/slices/wishlist-slice";
import fetchData from "@/utils/fetch-data";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AllRecipes = () => {
  const dispatch = useDispatch();
  const cart = useCartData();
  const wishlist = useWishlistData();
  const user = useSelector((state) => state.user?.user);
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const resData = await fetchData(`/recipe?q=${searchInput}`);
      return resData;
    },
  });

  const handleDetailsOpen = (id) => {
    setRecipeId(id);
    setOpenDetails(true);
  };

  const handleAddToWishlist = (recipe, isWishlist) => {
    if (isWishlist) {
      dispatch(removeFromWishlist({ id: recipe?._id, email: user?.email }));
      toast.success("Removed from wishlist");
      return;
    }
    dispatch(addToWishlist({ recipe, email: user?.email }));
    toast.success("Added to wishlist");
  };

  const handleAddToCart = (recipe) => {
    if (cart.find((item) => item._id === recipe?._id)) {
      toast.error("Product already in cart");
      return;
    }
    dispatch(addToCart({ recipe, email: user?.email }));
    toast.success("Added to cart");
  };

  return (
    <div className="pt-32">
      <div className="w-[89%] mx-auto">
        <h1 className="text-2xl font-bold">All recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data?.map((recipe) => (
            <RecipeCard
              key={recipe?._id}
              recipe={recipe}
              handleDetailsOpen={handleDetailsOpen}
              hasBtn={true}
              handleAddToWishlist={handleAddToWishlist}
              handleAddToCart={handleAddToCart}
              isWishlist={wishlist.find((item) => item?._id === recipe?._id)}
            />
          ))}
        </div>
        {/* Modal*/}
        <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
          <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
        </Modal>
        <Pagination />
      </div>
    </div>
  );
};

export default AllRecipes;
