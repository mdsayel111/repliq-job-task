import axiosInstance from "./axios-instance";

export const syncWishlistWithDB = async (data, email) => {
  console.log({ data }, "data for wishlist");
  const resData = await axiosInstance.patch(
    `/wishlist/${email}`,
    JSON.stringify({ data })
  );
  return resData?.data;
};
