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
import { current } from "@reduxjs/toolkit";
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
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes", searchQuery],
    queryFn: async () => {
      const resData = await fetchData(`/recipe?q=${searchInput}&p=${page}`);
      return resData;
    },
  });

  const recipes = data?.recipes;
  const totalPages = data?.totalPages;

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

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
        {/* Search form */}
        <div>
          <form action="" className="w-full mt-12">
            <div className="relative flex p-1 rounded-full bg-white   border border-yellow-200 shadow-md md:p-2">
              <input
                placeholder="Your favorite food"
                className="w-full p-4 rounded-full outline-none bg-transparent "
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                onClick={() => handleSearch()}
                type="button"
                title="Start buying"
                className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
              >
                <span className="hidden text-yellow-900 font-semibold md:block">
                  Search
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 mx-auto text-yellow-900 md:hidden"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {recipes?.map((recipe) => (
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
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default AllRecipes;


