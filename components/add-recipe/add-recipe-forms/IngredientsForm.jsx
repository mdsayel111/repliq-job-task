import Input from "@/components/shared/input/Input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setIngredients as setIngredientsAction } from "@/redux/slices/add-recipe-slice";

export default function IngredientsForm({ setStep }) {
  const dispatch = useDispatch();
  const ingredientsFromStore = useSelector((state) => state.recipe.ingredients);
  const [ingredients, setIngredients] = useState(ingredientsFromStore);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (ingredients.length > 0) {
      setIsNextBtnDisabled(false);
    } else {
      setIsNextBtnDisabled(true);
    }
  }, [ingredients]);

  const handleIngredients = () => {
    if (currentIngredient === "") {
      toast.error("Please enter ingredients");
      return;
    }
    setIngredients([...ingredients, currentIngredient]);
    setCurrentIngredient("");
  };

  const handleNext = () => {
    dispatch(setIngredientsAction(ingredients));
    setStep(3);
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
          disabled={isNextBtnDisabled}
          className={`bg-yellow-300 text-yellow-900 px-3 py-1 rounded-lg block ml-2 ${
            isNextBtnDisabled ? "bg-[#b3b3b321]" : ""
          }`}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
