"use client";

import { Button } from "@/components/elements";
import Image from "next/image";

const Hero = (props) => {
  const { data } = props;
  return (
    <section id="hero" className="relative px-6 isolate pt-14 lg:px-8">
      <div className="flex flex-col items-center justify-center py-32 mx-auto max-w-7xl sm:py-48 lg:py-56 lg:flex-row lg:gap-16">
        <div className="text-center lg:text-left lg:max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Forget Busy Work,
            <br /> Start Next Vacation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <div className="flex items-center justify-center mt-10 lg:justify-start gap-x-6">
            <Button>Show Me Now</Button>
          </div>
          <div className="hidden sm:mt-12 sm:flex sm:justify-center lg:justify-start">
            <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
              <div className="flex flex-col justify-center gap-y-2">
                <Image
                  alt="traveler"
                  width={32}
                  height={32}
                  src="/images/icon-traveler.svg"
                ></Image>
                <div className="flex items-center max-w-xs mx-auto gap-x-2">
                  <dd className="text-base font-semibold tracking-tight text-gray-900">
                    {data.travelers}
                  </dd>
                  <dt className="text-base leading-7 text-gray-600">
                    Travelers
                  </dt>
                </div>
              </div>
            </dl>
            <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
              <div className="flex flex-col justify-center gap-y-2">
                <Image
                  alt="treasure"
                  width={32}
                  height={32}
                  src="/images/icon-treasure.svg"
                ></Image>
                <div className="flex items-center max-w-xs mx-auto gap-x-2">
                  <dd className="text-base font-semibold tracking-tight text-gray-900">
                    {data.treasures}
                  </dd>
                  <dt className="text-base leading-7 text-gray-600">
                    Treasure
                  </dt>
                </div>
              </div>
            </dl>
            <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
              <div className="flex flex-col justify-center gap-y-2">
                <Image
                  alt="city"
                  width={32}
                  height={32}
                  src="/images/icon-cities.svg"
                ></Image>
                <div className="flex items-center max-w-xs mx-auto gap-x-2">
                  <dd className="text-base font-semibold tracking-tight text-gray-900">
                    {data.cities}
                  </dd>
                  <dt className="text-base leading-7 text-gray-600">Cities</dt>
                </div>
              </div>
            </dl>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-0 lg:flex-shrink-0">
          <Image
            loading="lazy"
            width={520}
            height={411}
            className="w-full max-w-md mx-auto lg:max-w-none lg:w-[28rem] lg:rounded-lg relative z-10"
            src="/assets/images/img-hero.jpg"
            alt="Hero illustration"
          />
          <Image
            loading="lazy"
            width={520}
            height={411}
            className="absolute top-8 left-8 w-full max-w-md mx-auto lg:max-w-none lg:w-[28rem] lg:rounded-lg opacity-80"
            src="/assets/images/img-hero-frame.jpg"
            alt="Hero illustration secondary"
          />
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
