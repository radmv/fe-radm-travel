"use client";

import React from "react";

const Input = (props) => {
  const {
    type,
    name,
    placeholder,
    value,
    min,
    max,
    children,
    suffix,
    prefix,
    isDisabled,
    onChange = () => {},
  } = props;

  return (
    <>
      <label
        htmlFor={name}
        className="block text-xl font-medium leading-6 text-gray-900"
      >
        {children || ""}
      </label>
      <div className="flex items-center">
        {prefix && <span className="mr-2">{prefix}</span>}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed"
          placeholder={placeholder}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
          disabled={isDisabled}
        />
        {suffix && <span className="ml-2">{suffix}</span>}
      </div>
    </>
  );
};

export default Input;
