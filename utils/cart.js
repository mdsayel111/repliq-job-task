import axiosInstance from "./axios-instance";

export const syncCartWithDB = async (data, email) => {
  const resData = await axiosInstance.patch(
    `/cart/${email}`,
    JSON.stringify({ data })
  );
  return resData?.data;
};
