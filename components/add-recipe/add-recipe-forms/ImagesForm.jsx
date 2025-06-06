"use client";

import FileInput from "@/components/shared/input/FIleInput";
import axiosInstance from "@/utils/axios-instance";
import { uploadImage } from "@/utils/upload-image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function ImagesForm({ setStep }) {
  const router = useRouter();
  const infoFromStore = useSelector((state) => state.recipe.info);
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState("");
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);

  useEffect(() => {
    if (images.length > 0 && coverImage) {
      setTimeout(() => {
        setIsSubmitBtnDisabled(false);
      }, 1000);
    } else {
      setIsSubmitBtnDisabled(true);
    }
  }, [images, coverImage]);

  const handleImageOnChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async () => {
    const reqInfo = { ...infoFromStore };
    const coverImageUrl = await uploadImage(coverImage);
    reqInfo.coverImage = coverImageUrl;
    reqInfo.images = [];

    for (let i = 0; i < images.length; i++) {
      const imageUrl = await uploadImage(images[i]);
      reqInfo.images.push(imageUrl);
    }

    try {
      await axiosInstance.post("/recipe", reqInfo);
      toast.success("Recipe submitted successfully");
      router.push("/all-recipes");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div>
        <div className="w-full">
          <FileInput
            name="coverImage"
            placeholder="Cover Image"
            label="Cover Image"
            inputProps={{
              onChange: (e) => {
                setCoverImage(e.target.files[0]);
              },
            }}
          />
          {coverImage && (
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="Preview"
              width={500}
              height={500}
              className="w-1/2 aspect-square object-cover rounded-lg mx-auto mt-6"
            />
          )}
        </div>
      </div>
      <div>
        <div className="flex gap-4 items-center w-full mt-8">
          <FileInput
            name="imageFile"
            placeholder="Image"
            label="Image"
            inputProps={{
              multiple: true,
              onChange: handleImageOnChange,
              ref: fileInputRef,
            }}
          />
        </div>

        {/* Display added images */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="border rounded p-2">
              <Image
                src={URL.createObjectURL(img)}
                alt={`Preview ${idx}`}
                width={500}
                height={500}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-lg block ml-auto"
          onClick={() => setStep(3)}
        >
          Prev
        </button>
        <button
          disabled={isSubmitBtnDisabled}
          className={`bg-yellow-300 text-yellow-900 px-3 py-1 rounded-lg block ml-2 ${
            isSubmitBtnDisabled ? "bg-[#b3b3b321]" : ""
          }`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
