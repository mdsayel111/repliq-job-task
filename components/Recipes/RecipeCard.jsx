import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

const RecipeCard = ({
  isWishlist,
  recipe,
  handleDetailsOpen,
  handleAddToWishlist,
  handleAddToCart,
}) => {
  console.log(isWishlist, "isWishlist");
  return (
    <div className="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10 flex flex-col">
      <div className="relative">
        <Image
          className="mx-auto rounded-2xl"
          src={recipe?.strMealThumb}
          alt="Web Development"
          loading="lazy"
          width={500}
          height={500}
        />
        <div
          onClick={() => handleAddToWishlist(recipe, isWishlist)}
          className={`absolute top-4 right-4 p-3 bg-gray-300 rounded-full ${
            isWishlist && "bg-red-400 text-white"
          }`}
        >
          <FaRegHeart className="text-xl" />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">
        {recipe?.strMeal}
      </h3>
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4 w-fit mx-auto mt-auto flex-grow flex items-end">
        <button
          onClick={() => handleDetailsOpen(recipe?.idMeal)}
          className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-xl"
        >
          Details
        </button>
        <button
          onClick={() => handleAddToCart(recipe)}
          className="bg-yellow-300 text-yellow-900 px-4 py-2 rounded-xl"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
