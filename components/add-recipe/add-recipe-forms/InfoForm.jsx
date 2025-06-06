import Input from "@/components/shared/input/Input";
import TextArea from "@/components/shared/input/TextArea";
import React from "react";
import FileInput from "../../shared/input/FIleInput";

export default function InfoForm({ setStep }) {
  return (
    <div>
      <Input name="title" placeholder="Title" label="Title" />
      <TextArea
        name="description"
        placeholder="Description"
        label="Description"
      />
      <Input name="category" placeholder="Category" label="Category" />
      {/* <FileInput name="imageFile" placeholder="Image" label="Image" /> */}
      <div className="mt-6">
        <button
          className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-lg block ml-auto"
          onClick={() => setStep(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
