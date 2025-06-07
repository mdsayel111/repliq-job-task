import axios from "axios";

export const uploadImage = async (file) => {
  // creat formData for upload img in imgBB
  const form = new FormData();
  form.append("image", file);
  const imgbbResult = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    form
  );
  const photoUrl = imgbbResult.data.data.display_url;
  return photoUrl;
};
