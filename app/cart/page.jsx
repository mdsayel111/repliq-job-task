import Cart from "@/components/cart/Cart";
import React from "react";

const CartPage = () => {
  return (
    <div className="pt-32">
      <div className="w-[89%] mx-auto">
        {/* Cart page */}
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="mt-10">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
