import axiosInstance from "./axios-instance";

const fetchData = async (url) => {
  const response = await axiosInstance.get(url);
  const data = response.data;
  return data;
};

export default fetchData;
