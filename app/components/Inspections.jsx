"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Inspections() {
  const inspections = [
    {
      name: "1",
      id: "1",
      date: "13-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
    {
      name: "2",
      id: "2",
      date: "14-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
    {
      name: "3",
      id: "3",
      date: "21-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
    {
      name: "4",
      id: "4",
      date: "22-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
    {
      name: "5",
      id: "5",
      date: "27-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
    {
      name: "6",
      id: "6",
      date: "28-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
    {
      name: "7",
      id: "7",
      date: "29-May-2023",
      start: "2:30pm",
      finish: "3:30pm",
    },
  ];

  const [showTooltip, setShowTooltip] = useState(
    Array(inspections.length).fill(false)
  );
  const [test, setTest] = useState(false);

  const handleMouseEnter = (index) => {
    const newShow = showTooltip;
    newShow[index] = true;
    setTest(true);
    setShowTooltip(newShow);
  };

  const handleMouseLeave = (index) => {
    const newShow = showTooltip;
    newShow[index] = false;
    setTest(false);
    setShowTooltip(newShow);
  };

  return (
    <div className="flex flex-col justify-center items-between pt-4 space-y-6">
      <div className="flex">
        <p className="text-2xl text-gray-800 font-bold">Inspection times</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-y-6">
        {inspections.map((inspection, index) => {
          return (
            <div className="flex justify-between max-w-72 p-2 border-2 border-gray-800 border-opacity-50">
              <div className="flex flex-col justify-between">
                <p className="text-gray-800 text-xl font-bold">
                  {inspection.date}
                </p>
                <p className="text-gray-800 text-lg">
                  {inspection.start} - {inspection.finish}
                </p>
              </div>
              <Link
                href=""
                className="relative flex"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {showTooltip[index] && (
                  <div className="absolute -top-6 -left-12 z-10 bg-gray-800 text-white text-s px-2 py-2 rounded whitespace-nowrap">
                    Add to calendar
                  </div>
                )}
                <Image
                  src="/images/calendar.svg"
                  alt="calendar"
                  width={24}
                  height={24}
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex ">
        <Link href="#">
          <div className="flex justify-center bg-green-500 text-xl text-white font-bold px-4 py-2 rounded-lg">
            Book and appointment
          </div>
        </Link>
      </div>
    </div>
  );
}
