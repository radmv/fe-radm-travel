import { Card } from "@/components/elements";
import React from "react";

const Categories = (props) => {
  const { data } = props;

  return (
    <section>
      {data.map((category) => {
        return (
          <div
            key={category._id}
            className="px-4 mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8"
          >
            <h4 className="ml-8 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              {category.name}
            </h4>
            <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8">
              {category.items.map((item) => {
                return (
                  <Card
                    key={item._id}
                    id={item._id}
                    href={`/house-detail/${item._id}`}
                    imageUrl={item.imageUrl}
                    imageAlt={item.name}
                    name={item.name}
                    city={item.city}
                    country={item.country}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
