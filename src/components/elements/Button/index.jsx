"use client";

const Button = (props) => {
  const {
    children,
    variant = "primary", // Default variant
    width = "w-fit",
    type = "button",
    onClick = () => {},
    isDisabled = false,
  } = props;

  // Define the styles for different variants
  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
    cancel:
      "bg-gray-600 text-white hover:bg-gray-500 focus-visible:outline-gray-600",
    // Add other variants if needed
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${width}`}
    >
      {children}
    </button>
  );
};

export default Button;
