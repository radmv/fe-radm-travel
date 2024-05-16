import React from "react";

const FeaturedImage = (props) => {
  const { data } = props;
  return (
    <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
        <img
          src={data[0].url}
          alt={data._id}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3"
            >
              {index > 0 && (
                <img
                  src={item.url}
                  alt={item._id}
                  className="object-cover object-center w-full h-full"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedImage;
