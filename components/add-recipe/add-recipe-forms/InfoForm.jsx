import Input from "@/components/shared/input/Input";
import TextArea from "@/components/shared/input/TextArea";
import { setInfo } from "@/redux/slices/add-recipe-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InfoForm({ setStep }) {
  const infoFromStore = useSelector((state) => state.recipe.info);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(infoFromStore.title);
  const [description, setDescription] = useState(infoFromStore.description);
  const [category, setCategory] = useState(infoFromStore.category);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (title && description && category) {
      setIsNextBtnDisabled(false);
    } else {
      setIsNextBtnDisabled(true);
    }
  }, [title, description, category]);

  const handleNext = () => {
    dispatch(setInfo({ title, description, category }));
    setStep(2);
  };

  return (
    <div>
      <Input
        name="title"
        placeholder="Title"
        label="Title"
        inputProps={{
          value: title,
          onChange: (e) => {
            setTitle(e.target.value);
          },
        }}
      />
      <TextArea
        name="description"
        placeholder="Description"
        label="Description"
        inputProps={{
          value: description,
          onChange: (e) => {
            setDescription(e.target.value);
          },
        }}
      />
      <Input
        name="category"
        placeholder="Category"
        label="Category"
        inputProps={{
          value: category,
          onChange: (e) => {
            setCategory(e.target.value);
          },
        }}
      />
      {/* <FileInput name="imageFile" placeholder="Image" label="Image" /> */}
      <div className="mt-6">
        <button
          disabled={isNextBtnDisabled}
          className={`bg-yellow-300 disabled:bg-[#b3b3b321] text-yellow-900 px-3 py-1 rounded-lg block ml-auto`}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
