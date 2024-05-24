import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhileYoureHere() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pb-8">
        <h2 className="text-gray-800  text-3xl font-bold">While you're here</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center w-full">
        <Link
          href="#"
          className="flex flex-col space-y-4 flex-grow items-center w-full h-full border-2 border-gray-800 border-opacity-10 p-4 py-8 hover:shadow-md hover:scale-[1.01] hover:z-10 transform-all duration-100"
        >
          <Image
            src="/images/dollarsign.svg"
            alt="Dollarsign"
            width={100}
            height={64}
            className="green-500"
          ></Image>
          <p className="text-xl font-bold text-gray-800 text-center">
            See what your home may be worth
          </p>
        </Link>
        <Link
          href="#"
          className="flex flex-col space-y-4 items-center w-full border-2 border-gray-800 border-opacity-10 p-4 py-8 hover:shadow-md hover:scale-[1.01] hover:z-10 transform-all duration-100"
        >
          <Image
            src="/images/house.svg"
            alt="house"
            width={100}
            height={64}
            className="green-500"
          ></Image>
          <p className="text-xl font-bold text-gray-800">Looking to sell?</p>
        </Link>
        <Link
          href="#"
          className="flex flex-col space-y-4  items-center w-full border-2 border-gray-800 border-opacity-10 p-4 py-8 hover:shadow-md hover:scale-[1.01] hover:z-10 transform-all duration-100"
        >
          <Image
            src="/images/housetree.svg"
            alt="housetree"
            width={100}
            height={64}
            className="green-500"
          ></Image>
          <p className="text-xl font-bold text-gray-800">
            Where can I afford to buy?
          </p>
        </Link>
        <Link
          href="#"
          className="flex flex-col space-y-4 items-center w-full border-2 border-gray-800 border-opacity-10 p-4 py-8 hover:shadow-md hover:scale-[1.01] hover:z-10 transform-all duration-100"
        >
          <Image
            src="/images/auction.svg"
            alt="auction"
            width={100}
            height={64}
            className="green-500"
          ></Image>
          <p className="text-xl font-bold text-gray-800">See auction results</p>
        </Link>
      </div>
    </div>
  );
}
