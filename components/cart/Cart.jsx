import Image from "next/image";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

export default function Cart() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/images/home/food.webp"
          alt="Cart"
          width={500}
          height={500}
          className="w-[100px] aspect-square border border-yellow-300 rounded-lg"
        />
        <h1 className="text-lg font-semibold">Name</h1>
      </div>
      <div className="flex gap-4 items-center">
        <button className="p-2 bg-yellow-500 rounded-full">
          <FiMinus />
        </button>
        <span className="text-3xl">2</span>
        <button className=" p-2 bg-green-500 rounded-full">
          <IoMdAdd />
        </button>
      </div>
      <FaRegTrashAlt className="text-red-500 cursor-pointer text-xl" />
    </div>
  );
}
