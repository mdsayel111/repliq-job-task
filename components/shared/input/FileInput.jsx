import React from "react";

export default function FileInput({ name, placeholder, label, inputProps }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="file"
          name={name}
          accept="image/*"
          required
          placeholder={placeholder}
          className="block w-full text-sm text-yellow-900
          file:me-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-yellow-300 file:text-yellow-900
          hover:file:bg-yellow-100
          file:disabled:opacity-50 file:disabled:pointer-events-none
          dark:file:bg-yellow-300
          dark:hover:file:bg-yellow-100
          border border-yellow-300
          rounded-lg
        "
          {...inputProps}
        />
      </div>
    </div>
  );
}
