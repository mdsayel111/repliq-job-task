import fetchData from "@/utils/fetch-data";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const SingleRecipe = ({ id, setIsOpen }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe-details"],
    queryFn: async () => {
      const resData = await fetchData(`/recipe/${id}`);
      return resData;
    },
  });

  console.log(data);

  if (!id) return <div>No recipe selected.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;
  return (
    <div className="flex flex-col gap-5 h-[70vh] overflow-y-auto">
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
      <div className="space-y-2 lg:space-y-4">
        <div>
          <Image
            src={data?.coverImage}
            alt="Recipe"
            width={500}
            height={500}
            className="rounded-lg w-1/2 mx-auto aspect-square object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 lg:!mt-8">
          {data?.images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Recipe"
              width={500}
              height={500}
              className="rounded-lg aspect-square object-cover"
            />
          ))}
        </div>
        <h2 className="text-lg lg:text-xl font-semibold">{data?.title}</h2>
        <p className="text-sm lg:text-base ">{data?.description}</p>
        <div>
          <p>Ingredients:</p>
          {data?.ingredients.map((ingredient, i) => (
            <p key={i} className="text-gray-600 text-sm ml-4">
              {i + 1}. {ingredient}
            </p>
          ))}
        </div>
        <div>
          <p>Steps:</p>
          {data?.steps.map((step, i) => (
            <p key={i} className="text-gray-600 text-sm ml-4">
              {i + 1} {step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
