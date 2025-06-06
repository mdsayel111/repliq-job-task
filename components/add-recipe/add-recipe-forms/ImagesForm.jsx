import FileInput from "@/components/shared/input/FIleInput";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function ImagesForm({ setStep }) {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);
  const [coverImage, setCoverImage] = useState("");

  const handleImageOnChange = (e) => {
    const files = Array.from(e.target.files);
    setCurrentImages(files);
  };

  const handleAddImages = () => {
    setImages([...images, ...currentImages]);
    setCurrentImages([]);
    fileInputRef.current.value = null;
  };

  const handleSubmit = () => {
    console.log(images);
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
              className="w-full aspect-square object-cover rounded-lg"
            />
          )}
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
      <div>
        <div className="flex gap-4 items-center w-full">
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
          <button onClick={handleAddImages} type="button">
            <CiCirclePlus className="text-yellow-900 text-2xl mt-8" />
          </button>
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
          className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-lg block ml-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
