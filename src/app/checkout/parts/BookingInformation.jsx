"use client";

import { Button, Card, Input } from "@/components";
import React from "react";

const BookingInformation = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Booking Information
      </h1>
      <p className="mt-1 text-base text-gray-600">
        Please fill in the form below
      </p>
      <div className="flex flex-col items-start justify-center w-full mt-12 lg:flex-row gap-x-52">
        <div className="w-full max-w-sm lg:w-1/2">
          <Card
            imageUrl={data.imageUrl}
            imageAlt={data.name}
            name={data.name}
            city={data.city}
            country={data.country}
            price={data.price}
          />
        </div>
        <div className="w-full max-w-sm lg:w-1/2">
          <form action="" className="flex flex-col gap-y-4">
            <Input
              placeholder="Please type here..."
              type="text"
              name="firstName"
            >
              First Name
            </Input>
            <Input
              placeholder="Please type here..."
              type="text"
              name="lastName"
            >
              Last Name
            </Input>
            <Input placeholder="Please type here..." type="email" name="email">
              Email Address
            </Input>
            <Input placeholder="Please type here..." type="text" name="phone">
              Phone Number
            </Input>
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xs mx-auto mt-6 gap-y-2">
        <Button
          width="w-full"
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/checkout/1/2");
          }}
        >
          Continue to Book
        </Button>
        <Button
          width="w-full opacity:40"
          variant="cancel"
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/house-detail/1");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default BookingInformation;
