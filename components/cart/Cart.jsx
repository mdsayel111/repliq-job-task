import { removeFromCart } from "@/redux/slices/cart-slice";
import Image from "next/image";
import { use } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ data }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const handleDelete = () => {
    dispatch(removeFromCart({ id: data?._id, email: user?.email }));
  };
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
      {/* <div
        onClick={handleDelete}
        className="text-white aspect-square flex justify-center items-center bg-red-500 rounded-full p-4 lg:p-2 cursor-pointer text-xl lg:w-[3%]"
      >
        <FaRegTrashAlt />
      </div> */}
    </div>
  );
}
