import Input from "@/components/shared/input/Input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSteps as setStepsAction } from "@/redux/slices/add-recipe-slice";

export default function StepsForm({ setStep }) {
  const dispatch = useDispatch();
  const stepFromStore = useSelector((state) => state.recipe.steps);
  const ingredientsFromStore = useSelector((state) => state.recipe.ingredients);
  console.log(ingredientsFromStore);
  const [steps, setSteps] = useState(stepFromStore);
  const [currentStep, setCurrentStep] = useState("");
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);
  useEffect(() => {
    if (steps.length > 0) {
      setIsNextBtnDisabled(false);
    } else {
      setIsNextBtnDisabled(true);
    }
  }, [steps]);
  const handleStep = () => {
    if (currentStep === "") {
      toast.error("Please enter step");
      return;
    }
    setSteps([...steps, currentStep]);
    setCurrentStep("");
  };

  const handleNext = () => {
    dispatch(setStepsAction(steps));
    setStep(4);
  };
  return (
    <div>
      <div className="flex gap-4 items-center w-full">
        <Input
          name="step"
          placeholder="Step"
          label="Step"
          className={"flex-1"}
          inputProps={{
            value: currentStep,
            onChange: (e) => {
              setCurrentStep(e.target.value);
            },
          }}
        />
        <button onClick={handleStep}>
          <CiCirclePlus className="text-yellow-900 text-2xl mt-8" />
        </button>
      </div>

      <div className="mt-4">
        {steps.map((step, index) => (
          <p key={index} className="text-yellow-900 text-xl mt-2">
            {index + 1}. {step}
          </p>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-lg block ml-auto"
          onClick={() => setStep(2)}
        >
          Prev
        </button>
        <button
          disabled={isNextBtnDisabled}
          className={`bg-yellow-300 disabled:bg-[#b3b3b321] text-yellow-900 px-3 py-1 rounded-lg block ml-2 `}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
