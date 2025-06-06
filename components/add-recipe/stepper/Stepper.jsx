import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { IoImagesOutline, IoInformation } from "react-icons/io5";
import { LuComponent } from "react-icons/lu";

export default function Stepper({ step }) {
  return (
    <ol className="flex items-center w-full">
      <li
        className={`flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block  ${
          step <= 1 ? "after:border-yellow-100" : "after:border-yellow-300"
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 text-yellow-900 ${
            step <= 1
              ? "bg-white border border border-yellow-900 "
              : "bg-yellow-300"
          }`}
        >
          {step <= 1 ? <IoInformation /> : <FaCheck />}
        </span>
      </li>
      <li
        className={`flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block  ${
          step <= 2 ? "after:border-yellow-100" : "after:border-yellow-300"
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 text-yellow-900 ${
            step <= 2
              ? "bg-white border border border-yellow-900 "
              : "bg-yellow-300"
          }`}
        >
          {step <= 2 ? <LuComponent /> : <FaCheck />}
        </span>
      </li>
      <li
        className={`flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block  ${
          step <= 3 ? "after:border-yellow-100" : "after:border-yellow-300"
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 text-yellow-900 ${
            step <= 3
              ? "bg-white border border border-yellow-900 "
              : "bg-yellow-300"
          }`}
        >
          {step <= 3 ? <IoIosList /> : <FaCheck />}
        </span>
      </li>
      <li className="flex items-center w-fit">
        <span
          className={`flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 text-yellow-900 shrink-0 ${
            step <= 4
              ? "bg-white border border border-yellow-900 "
              : "bg-yellow-300"
          }`}
        >
          {step <= 4 ? <IoImagesOutline /> : <FaCheck />}
        </span>
      </li>
    </ol>
  );
}
