import React from "react";
import Image from "next/image";
import Link from "next/link";
import AgentGridCard from "../components/AgentGridCard"

export default function PropertyGridCard(props) {
  const agentIndex = Math.floor(Math.random() * 4);
  return (
    
      <div className="flex justify-between w-full border-2 border-gray-800 border-opacity-20 shadow-md rounded-md overflow-hidden">
        <Link href={`/buy/${props.property.id}`} className="">
        <div className="flex space-x-8">
          <div className="relative w-72 h-72 border-gray-800 border-r-2 border-opacity-20">
            <Image
              src={props.property.image[0]}
              alt={props.property.id}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 288px"
              className=""
            ></Image>
          </div>
          <div className="flex flex-col space-y-6 pt-2">
            <p className="text-3xl text-gray-800">{`$${props.property.price.toLocaleString()}`}</p>
            <div className="space-y-4">
              <p className="text-2xl text-gray-800 font-bold">
                {props.property.address}
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src={`/images/beds.svg`}
                  alt={`beds`}
                  height={24}
                  width={24}
                  className="opacity-80"
                ></Image>
                <p className="text-xl text-gray-800">
                  {props.property.beds}{" "}
                  {props.property.beds === 1 ? "bedroom" : "bedrooms"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src={`/images/baths.svg`}
                  alt={`baths`}
                  height={24}
                  width={24}
                  className="opacity-80"
                ></Image>
                <p className="text-xl text-gray-800">
                  {props.property.baths}{" "}
                  {props.property.baths === 1 ? "bathroom" : "bathrooms"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src={`/images/parking.svg`}
                  alt={`parking`}
                  height={24}
                  width={24}
                  className="opacity-80"
                ></Image>
                <p className="text-xl text-gray-800">
                  {props.property.parking}{" "}
                  {props.property.parking === 1 ? "carport" : "carports"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src={`/images/floorspace.svg`}
                  alt={`floorspace`}
                  height={24}
                  width={24}
                  className="opacity-60"
                ></Image>
                <p className="text-xl text-gray-800">
                  {props.property.floorspace}m<sup>2</sup> of floorspace
                </p>
              </div>
            </div>
          </div>
        </div>
        </Link>
        <AgentGridCard agent={agentIndex}></AgentGridCard>
      </div>
    
  );
}
