"use client";

import Cart from "@/components/cart/Cart";
import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist?.wishlist);
  return (
    <div className="py-20 lg:py-32">
      <div className="w-[89%] mx-auto">
        {/* Cart page */}
        <h1 className="text-2xl font-bold">Wishlist</h1>
        <div className="mt-10 space-y-6">
          {wishlist.map((item) => (
            <Cart key={item._id} data={item} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
