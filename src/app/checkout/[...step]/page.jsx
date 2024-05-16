import { Stepper } from "@/components";
import React from "react";
import { BookingInformation, CompletePayment, PaymentProcess } from "..";

const data = [
  { id: "1", isActive: false, isDone: false },
  { id: "2", isActive: false, isDone: false },
  { id: "3", isActive: false, isDone: false },
];

const HouseData = {
  _id: "asd1293uasdads1",
  name: "Jung Hook Sie",
  type: "Apartment",
  imageUrl: "/images/image-mostpicked-1.jpg",
  country: "South Korea",
  city: "Seoul Flore",
  price: "80",
  unit: "night",
};

const page = ({ params }) => {
  const nowStep = params.step[params.step.length - 1];
  let content = null;
  if (nowStep === "1") {
    content = <BookingInformation data={HouseData} />;
    data[0].isActive = true;
    data[1].isActive = false;
    data[2].isActive = false;
  } else if (nowStep === "2") {
    content = <PaymentProcess />;
    data[1].isActive = true;
    data[2].isActive = false;
  } else if (nowStep === "3") {
    content = <CompletePayment />;
    data[2].isActive = true;
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <nav
          className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
          aria-label="Global"
        >
          <div className="flex justify-center lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              Staycation
            </a>
          </div>
        </nav>
      </header>
      <div className="flex flex-col items-center mx-auto mb-6 max-w-7xl">
        <div className="my-12">{nowStep != "3" && <Stepper step={data} />}</div>
        {content}
      </div>
    </>
  );
};

export default page;
