import Link from "next/link";
import React from "react";

const Navlink = (props) => {
  const { children, href } = props;

  return (
    <Link
      href={href}
      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
    >
      {children}
    </Link>
  );
};

export default Navlink;
