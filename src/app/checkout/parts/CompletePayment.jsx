"use client";

import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const CompletePayment = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Yay! Completed
      </h1>
      <div className="mt-2">
        <Image
          alt="bank"
          width={360}
          height={32}
          src="/assets/images/completed.jpg"
          loading="lazy"
        />
      </div>
      <p className="mt-1 text-base text-center text-gray-600">
        We will inform you via email later <br /> once the transaction has been
        accepted
      </p>
      <div className="flex flex-col w-full max-w-xs mx-auto mt-24 gap-y-2">
        <Button
          width="w-full"
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/");
          }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default CompletePayment;
