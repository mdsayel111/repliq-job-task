"use client";

import Cart from "@/components/cart/Cart";
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart?.carts);
  return (
    <div className="py-20 lg:py-32">
      <div className="w-[89%] mx-auto">
        {/* Cart page */}
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="mt-10 space-y-6">
          {cart.map((item) => (
            <Cart key={item._id} data={item} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
