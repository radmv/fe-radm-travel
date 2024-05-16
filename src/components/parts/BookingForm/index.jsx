"use client";

import { Button, Input } from "@/components/elements";
import { formatDate } from "@/utils/dateFormat";
import { useState } from "react";

const BookingForm = (props) => {
  const { price } = props;
  const [nightBooked, setNightBooked] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const paidTotal = price * nightBooked;

  const handleNightBookedChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNightBooked(value);

    if (startDate) {
      const newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() + value);
      setEndDate(formatDate(newEndDate));
    }
  };

  const handleStartDateChange = (event) => {
    const dateValue = event.target.value;
    setStartDate(dateValue);

    if (dateValue) {
      const newEndDate = new Date(dateValue);
      newEndDate.setDate(newEndDate.getDate() + nightBooked);
      setEndDate(formatDate(newEndDate));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace("/checkout/1");
  };

  return (
    <div className="mx-auto mt-4 lg:row-span-3 lg:mt-0">
      <h2 className="sr-only">Booking Form</h2>
      <h3 className="text-base font-semibold text-gray-600">Start Booking</h3>
      <p className="text-3xl font-semibold leading-6 text-indigo-600">
        ${price}
        <span className="mt-10 text-3xl font-light text-center text-gray-500">
          {" "}
          per night
        </span>
      </p>
      <form className="grid grid-cols-1 mt-12 gap-y-6" onSubmit={handleSubmit}>
        <Input
          type="number"
          name="sumOfNights"
          min="1"
          max="30"
          placeholder="1"
          value={nightBooked}
          onChange={handleNightBookedChange}
        >
          How long you will stay?
        </Input>
        <Input
          name="startDate"
          type="date"
          value={startDate}
          prefix="From"
          onChange={handleStartDateChange}
        >
          Pick a Date
        </Input>
        <Input
          name="endDate"
          type="date"
          value={endDate}
          prefix="To"
          isDisabled={true}
        />
        <p className="mt-2 mb-10 text-sm font-light text-center text-gray-500">
          you will pay
          <span className="text-sm font-semibold leading-6 text-center text-indigo-600">
            {" "}
            ${paidTotal}
          </span>{" "}
          per
          <span className="text-sm font-semibold leading-6 text-center text-indigo-600">
            {" "}
            {nightBooked} night
          </span>
        </p>
        <Button
          isDisabled={startDate === null ? true : false}
          type="submit"
          width="w-full"
        >
          Continue to Book
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
