import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const SingleRecipe = ({ id, setIsOpen }) => {
  console.log(id, "SingleRecipe");
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe-details"],
    queryFn: () => HttpKit.getRecipeDetails(id),
  });

  console.log(data);

  if (!id) return <div>No recipe selected.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
      <div>
        <Image
          src={data?.strMealThumb}
          width={500}
          height={500}
          alt="Image"
          className="w-1/2 aspect-square object-cover rounded-lg mx-auto mt-6"
        />
      </div>
      <h2 className="text2xl font-semibold w-fit mx-auto">{data?.strMeal}</h2>
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>
    </div>
  );
};

export default SingleRecipe;
