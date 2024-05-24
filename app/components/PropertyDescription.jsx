"use client";
import React from "react";
import { useState } from "react";

export default function PropertyDescription() {
  const [read, setRead] = useState(false);

  const handleReadClick = () => {
    const currentRead = !read;
    setRead(currentRead);
  };

  return (
    <div className="flex flex-col pt-4">
      <h2 className="text-2xl text-black opacity-80 font-bold">
        Property Description
      </h2>
      <div className="relative flex flex-col pt-4 ">
        <div
          className={`relative text-xl text-gray-800 overflow-hidden ${
            read ? "max-h-[10000px]" : "max-h-48"
          } transition-max-height duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4">
            <p>Open By Prior Appointment Only </p>
            <p>
              A harbourside manor at the very tip of the Darling Point
              peninsular has been conceived as a private sanctuary in one of
              Sydney's most tightly held pockets of real estate. Facing north
              and capturing views out over the harbour to manly and The Heads
              from the upper level, the five bedroom home celebrates fun and
              family life. Eclectic interiors curated in collaboration with
              Bourkeshire
            </p>
            <p>
              Interiors balance the elegance of the early 1900s home's original
              features with custom finishes to give the home an air of
              refinement. Bathed in sunshine during the day with a heated pool
              as the centrepiece, the home transforms into a magical oasis by
              night when the gardens light up and the city lights dazzle. Fine
              craftsmanship set a mood of relaxed luxury with a sequence of
              outdoor spaces to relax, entertain or soak up the sunshine with a
              rooftop terrace the perfect spot to enjoy panoramic views out over
              the harbour. This magnificent and rare home features a choice of
              living rooms with a custom kitchen as the social heart and an
              entertainer's terrace conceived as an alfresco lounge. Upper level
              accommodation features five large bedrooms, two ensuites and an
              upper level retreat with a wet bar and a rooftop terrace with
              northerly views over Clark Island from the Opera House to Manly.
            </p>
            <p>
              Featuring internal access to a double lock-up garage and ducted
              air for year-round comfort, this is an extraordinary opportunity
              to buy in one of Australia's most coveted and exclusive addresses.
              A home of enduring style and substance in a truly world-class
              setting, this pocket of paradise is just 300m to Darling Point
              Wharf for a relaxed commute into the city and within easy reach of
              the harbour splendour at Rushcutters Bay Park and Double Bay's
              celebrated dining and social scene. Stroll down to Richie's Cafe
              or down to McKell Park and the Cruising Yacht Club and enjoy an
              extraordinary sense of peace and privacy in magical surrounds.
              Additional features of this dress-circle residence include:
            </p>
            <ul>
              <li>- Private parterre gardens travertine courtyards</li>
              <li>- Views from the iconic city skyline out to The Heads</li>
              <li> - Custom marble kitchen by DeGabriele kitchens</li>
              <li> - Breakfast island, Wolf appliances, SubZero fridge</li>
              <li> - Tongue & Groove Oak floorboards, exposed beams</li>
              <li> - Lounge and casual living with Jetmaster fireplaces</li>
              <li>- Dining room with bi-folds to a north-facing terrace</li>
              <li> - Heated pool with spa, outdoor lighting schemes</li>
              <li> - 3 full bathrooms plus a powder room, separate laundry</li>
              <li>
                - Top floor retreat with ensuite, wet bar, roof terrace - Ducted
                reverse air (zoned), extensive custom joinery
              </li>
              <li>
                - Double garage (internal access), additional parking for 2 cars
                on driveway
              </li>
              <li> - First-rate high-level security</li>
            </ul>
          </div>
        </div>

        {!read && (
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-white t-0"></div>
        )}
        <div className="flex pt-2">
          <button
            onClick={handleReadClick}
            className="rounded-sm text-gray-800 z-10 text-lg border-2 border-gray-800 border-opacity-80  px-2"
          >
            {read ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}
