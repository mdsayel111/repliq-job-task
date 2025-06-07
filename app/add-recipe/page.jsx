"use client";
import ImagesForm from "@/components/add-recipe/add-recipe-forms/ImagesForm";
import InfoForm from "@/components/add-recipe/add-recipe-forms/InfoForm";
import IngredientsForm from "@/components/add-recipe/add-recipe-forms/IngredientsForm";
import StepsForm from "@/components/add-recipe/add-recipe-forms/StepsForm";
import Stepper from "@/components/add-recipe/stepper/Stepper";
import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const renderComponent = () => {
    switch (step) {
      case 1:
        return <InfoForm setStep={setStep} />;
      case 2:
        return <IngredientsForm setStep={setStep} />;
      case 3:
        return <StepsForm setStep={setStep} />;
      case 4:
        return <ImagesForm setStep={setStep} />;
      // default:
      //   return <InfoForm />;
    }
  };

  return (
    <div className="pt-32 w-[40%] mx-auto">
      <Stepper step={step} />
      <div className="w-60% mt-10">{renderComponent()}</div>
    </div>
  );
}
