import React from "react";

const Stepper = ({ step }) => {
  return (
    <nav
      className="inline-flex items-center -space-x-px rounded-md shadow-sm isolate"
      aria-label="Pagination"
    >
      {step.map((item, index) => {
        return (
          <>
            {index > 0 && <span>---</span>}
            <NumberPart key={index} number={item.id} isActive={item.isActive} />
          </>
        );
      })}
    </nav>
  );
};

const NumberPart = ({ number, isActive }) => {
  return (
    <div
      className={
        isActive
          ? "relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          : "relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex rounded-full"
      }
    >
      {number}
    </div>
  );
};

export default Stepper;
