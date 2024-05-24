import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PhoneAppModule() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-end">
        <div className="relative bottom-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px]">
          <Image
            src="/images/phone.png"
            alt="phone"
            fill
            style={{ objectFit: "Contain" }}
          ></Image>
        </div>
      </div>
      <div className="flex flex-col w-full pt-8 space-y-4 pb-4">
        <h2 className="text-gray-800 text-md md:text-2xl font-bold">
          Download the property app that lets you find your dream home
        </h2>
        <p className="text-gray-800 text-xs md:text-md">
          Get a better view of what you want. Organise your dream home in the
          Prime Property app.
        </p>
        <div className="flex space-x-8 pt-4 md:pt-16 scale-75 md:scale-100">
          <Link href="#">
            <Image
              src="/images/applestore.svg"
              alt="applestore"
              height={72}
              width={178}
            ></Image>
          </Link>
          <Link href="#">
            <Image
              src="/images/googleplay.png"
              alt="googleplay"
              height={72}
              width={200}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
