"use client";

import { Button, Input } from "@/components";
import Image from "next/image";
import React from "react";

const PaymentProcess = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Payment
      </h1>
      <p className="mt-1 text-base text-gray-600">
        Kindly follow the instructions below
      </p>
      <div className="flex flex-col items-center justify-center w-full mt-12 lg:flex-row gap-x-52">
        <div className="w-full max-w-sm lg:w-1/2">
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Transfer Pembayaran
                </dt>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Tax:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  10%
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Sub total:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  $480 USD
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Total:
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  $580 USD
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  <Image
                    alt="bank"
                    width={90}
                    height={32}
                    src="/assets/images/logo-bca.jpg"
                    loading="lazy"
                  />
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul>
                    <li>Bank Central Asia</li>
                    <li>2208 1996</li>
                    <li>Adam Angga</li>
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  <Image
                    alt="bank"
                    width={90}
                    height={32}
                    src="/assets/images/logo-mandiri.jpg"
                    loading="lazy"
                  />
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul>
                    <li>Bank Mandiri</li>
                    <li>2208 1996</li>
                    <li>Adam Angga</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="w-full max-w-sm lg:w-1/2">
          <form action="" className="flex flex-col gap-y-4">
            <Input
              placeholder="Please type here..."
              type="file"
              name="buktiTransfer"
            >
              Upload Bukti Transfer
            </Input>
            <Input
              placeholder="Please type here..."
              type="text"
              name="namaBank"
            >
              Nama Bank
            </Input>
            <Input
              placeholder="Please type here..."
              type="email"
              name="pengirim"
            >
              Pengirim
            </Input>
          </form>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xs mx-auto mt-6 gap-y-2">
        <Button
          width="w-full"
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/checkout/1/2/3");
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

export default PaymentProcess;
