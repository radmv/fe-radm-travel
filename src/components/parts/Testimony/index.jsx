import StarRating from "@/components/elements/StarRating";
import React from "react";

const Testimony = (props) => {
  const { data } = props;

  return (
    <section
      id="stories"
      className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="max-w-2xl mx-auto lg:max-w-4xl">
        <div className="flex flex-col items-center gap-y-4">
          <span className="text-xl font-semibold">{data.name}</span>
          <StarRating rating={data.rate} />
        </div>
        <figure className="mt-10">
          <blockquote className="text-xl font-semibold leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9">
            <p>“{data.content}”</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="w-10 h-10 mx-auto rounded-full"
              src={data.imageUrl}
              alt={data.familyName}
            />
            <div className="flex items-center justify-center mt-4 space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                {data.familyName}
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{data.familyOccupation}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimony;
