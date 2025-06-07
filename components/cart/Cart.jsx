import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cart({ data }) {
  return (
    <div className="flex justify-between items-center">
      <Image
        src={data.coverImage}
        alt="Cart"
        width={500}
        height={500}
        className="w-[10%] aspect-square border border-yellow-300 rounded-lg"
      />
      <h1 className="text-lg font-semibold w-[30%] text-center">
        {data?.title}
      </h1>
      <p className="w-[50%] text-center">{data?.description}</p>
      {/* <div className="flex gap-4 items-center">
        <button className="p-2 bg-yellow-500 rounded-full">
          <FiMinus />
        </button>
        <span className="text-3xl">2</span>
        <button className=" p-2 bg-green-500 rounded-full">
          <IoMdAdd />
        </button>
      </div> */}
      <FaRegTrashAlt className="text-red-500 cursor-pointer text-xl w-[5%]" />
    </div>
  );
}
