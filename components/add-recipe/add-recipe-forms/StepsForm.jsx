import Input from "@/components/shared/input/Input";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";

export default function StepsForm({ setStep }) {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const handleStep = () => {
    if (currentIngredient === "") {
      toast.error("Please enter step");
      return;
    }
    setSteps([...steps, currentStep]);
    setCurrentStep("");
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
          className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-lg block ml-2"
          onClick={() => setStep(4)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
