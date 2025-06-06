import React from "react";

export default function Input({ name, placeholder, label, type = "text", className, inputProps }) {
  return (
    <div className={className}>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
        {...inputProps}
          id={name}
          name={name}
          type={type}
          required
          autoComplete="email"
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none border border-yellow-300 focus:border-yellow-700 placeholder:text-gray-400 sm:text-sm/6"
        />
      </div>
    </div>
  );
}
