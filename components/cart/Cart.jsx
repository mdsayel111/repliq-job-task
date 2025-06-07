import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cart({ data }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
      <Image
        src={data.coverImage}
        alt="Cart"
        width={500}
        height={500}
        className="lg:w-[10%] aspect-square border border-yellow-300 rounded-lg"
      />
      <h1 className="lg:text-lg font-semibold lg:w-[30%] text-center">
        {data?.title}
      </h1>
      <p className="lg:w-[50%] text-sm lg:text-base text-center">
        {data?.description}
      </p>
      {/* <div className="flex gap-4 items-center">
        <button className="p-2 bg-yellow-500 rounded-full">
          <FiMinus />
        </button>
        <span className="text-3xl">2</span>
        <button className=" p-2 bg-green-500 rounded-full">
          <IoMdAdd />
        </button>
      </div> */}
      <div className="text-white bg-red-500 rounded-full p-4 cursor-pointer text-xl lg:w-[5%]">
        <FaRegTrashAlt />
      </div>
    </div>
  );
}
