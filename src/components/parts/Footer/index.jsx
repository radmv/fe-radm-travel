import { CompanyLogo } from "@/components/elements";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Footer = () => {
  const forBeginners = [
    { name: "New Account", href: "#" },
    { name: "Start Booking a Room", href: "#" },
    { name: "Use Payments", href: "#" },
  ];

  const exploreUs = [
    { name: "Our Careers", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  const connectUs = [
    { name: "support@staycation.id", href: "#" },
    { name: "021 - 2208 - 1996", href: "#" },
    { name: "Staycation, Kemang, Jakarta", href: "#" },
  ];

  return (
    <footer
      id="agents"
      className="text-black bg-white border-t border-gray-200"
    >
      <div className="container px-6 py-8 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-2/5">
            <h2 className="text-xl font-bold">
              <CompanyLogo />
            </h2>
            <p className="mt-2 text-gray-600">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-bold">For Beginners</h3>
            <ul className="mt-4 space-y-2">
              {forBeginners.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-bold">Explore Us</h3>
            <ul className="mt-4 space-y-2">
              {exploreUs.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-bold">Connect Us</h3>
            <ul className="mt-4 space-y-2">
              {connectUs.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-4 mt-8 text-center">
          <p className="text-gray-600">
            © 2024 Staycation • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
