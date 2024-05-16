import { Card } from "@/components/elements";
import React from "react";

const MostPicked = (props) => {
  const { data } = props;

  return (
    <section id="browse-by" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h4 className="ml-8 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
        Most Picked
      </h4>
      <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        {data.map((item, index) => {
          return (
            <div key={index} className={`mb-8`}>
              <Card
                id={item._id}
                href={`/house-detail/${item._id}`}
                imageUrl={item.imageUrl}
                imageAlt={item.name}
                name={item.name}
                price={item.price}
                city={item.city}
                country={item.country}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPicked;
