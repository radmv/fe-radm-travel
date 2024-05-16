"use client";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import {
  BookingForm,
  Breadcrumb,
  Categories,
  FeaturedImage,
  Footer,
  Header,
  ParseHtmlContent,
  Testimony,
} from "@/components";
import ItemDetails from "@/json/itemDetails.json";
import Image from "next/image";

const page = ({ params }) => {
  const data = ItemDetails;

  return (
    <>
      <Header />

      {/* content */}
      <div className="bg-white">
        <div className="pt-6">
          <Breadcrumb params={params} />

          {/* Image gallery */}
          <FeaturedImage data={data.imageUrls} />

          {/* Detail info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {data.name}
              </h1>
              <h2 className="mt-1 text-base text-gray-600">
                {data.city} • {data.country}
              </h2>
            </div>

            {/* Booking Form */}
            <BookingForm price={data.price} />

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    <ParseHtmlContent htmlString={data.description} />
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <div
                  role="list"
                  className="pl-4 mx-auto mt-6 space-y-2 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8"
                >
                  {data.features.map((item, index) => (
                    <dl
                      key={index}
                      className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3"
                    >
                      <div className="flex flex-col justify-center gap-y-2">
                        <Image
                          alt="treasure"
                          width={32}
                          height={32}
                          src={item.imageUrl}
                        ></Image>
                        <div className="flex items-center gap-x-2">
                          <dd className="text-base font-semibold text-gray-900">
                            {item.qty}
                          </dd>
                          <dt className="text-sm text-gray-600">{item.name}</dt>
                        </div>
                      </div>
                    </dl>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories data={data.categories} />
      <Testimony data={data.testimonial} />
      <Footer />
    </>
  );
};

export default page;
