import React from "react";

export default function TextArea({ name, placeholder, label, inputProps }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={name}
          name={name}
          required
          autoComplete="email"
          placeholder={placeholder}
          rows={5}
          className="block resize-none w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none border border-yellow-300 focus:border-yellow-700 placeholder:text-gray-400 sm:text-sm/6"
          {...inputProps}
        />
      </div>
    </div>
  );
}
