import React from "react";

const Card = (props) => {
  const {
    imageUrl,
    imageAlt,
    href = "#",
    name,
    city,
    country,
    price,
    id,
  } = props;

  return (
    <div key={id} className="relative h-full mb-8 group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="object-cover object-center w-full h-full lg:h-full lg:w-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {city}, {country}
          </p>
        </div>
        {price && (
          <p className="text-sm font-medium text-gray-900">
            ${price}
            <span className="ml-1 text-sm text-gray-500">per night</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
