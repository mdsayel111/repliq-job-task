import { setCart } from "@/redux/slices/cart-slice";
import axiosInstance from "@/utils/axios-instance";
import { syncCartWithDB } from "@/utils/cart";
import fetchData from "@/utils/fetch-data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useCartData() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.carts);
  const user = useSelector((state) => state.user?.user);

  const getCartFromDB = async () => {
    const resData = await syncCartWithDB(cart, user?.email);
    dispatch(setCart(resData));
  };

  useEffect(() => {
    if (user?.email) {
      getCartFromDB();
    }
  }, []);
  return cart;
}
