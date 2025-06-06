import { setWishlist } from "@/redux/slices/wishlist-slice";
import { syncWishlistWithDB } from "@/utils/wishlist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useWishlistData() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist?.wishlist);
  const user = useSelector((state) => state.user?.user);

  const getWishlistFromDB = async () => {
    const resData = await syncWishlistWithDB(wishlist, user?.email);
    dispatch(setWishlist(resData));
  };

  useEffect(() => {
    if (user?.email) {
      getWishlistFromDB();
    }
  }, []);
  return wishlist;
}
