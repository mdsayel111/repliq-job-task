import Input from "@/components/shared/input/Input";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";

export default function IngredientsForm({setStep}) {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const handleIngredients = () => {
    if (currentIngredient === "") {
      toast.error("Please enter ingredients");
      return;
    }
    setIngredients([...ingredients, currentIngredient]);
    setCurrentIngredient("");
  };
  return (
    <div>
      <div className="flex gap-4 items-center w-full">
        <Input
          name="ingredients"
          placeholder="ingredients"
          label="ingredients"
          className={"flex-1"}
          inputProps={{
            value: currentIngredient,
            onChange: (e) => {
              setCurrentIngredient(e.target.value);
            },
          }}
        />
        <button onClick={handleIngredients}>
          <CiCirclePlus className="text-yellow-900 text-2xl mt-8" />
        </button>
      </div>

      <div className="mt-4">
        {ingredients.map((ingredient, index) => (
          <p key={index} className="text-yellow-900 text-xl mt-2">
            {index + 1}. {ingredient}
          </p>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-lg block ml-auto"
          onClick={() => setStep(1)}
        >
          Prev
        </button>
        <button
          className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-lg block ml-2"
          onClick={() => setStep(3)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
