import React from "react";
import Image from "next/image";

const PropertyIcon = (props) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <p className="text-black text-bold text-xl text-opacity-80">
        {props.property.beds}
      </p>
      <Image
        priority
        src={`/images/${props.icon}.svg`}
        alt={`${props.icon}`}
        height={24}
        width={24}
        className="opacity-80"
      ></Image>
    </div>
  );
};

export default function PropertyCard(props) {
  return (
    <div className="inline-flex flex-col space-y-1 pb-2 rounded-lg overflow-hidden border-2 border-black border-opacity-10">
      <div
        className={`relative`}
        style={{ width: props.width, height: props.height }}
      >
        <Image
          src={props.data.image}
          alt={props.data.id}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="flex pl-2 space-x-4">
        <PropertyIcon icon="bed" property={props.data}></PropertyIcon>
        <PropertyIcon icon="bath" property={props.data}></PropertyIcon>
        <PropertyIcon icon="car" property={props.data}></PropertyIcon>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-black text-xl font-bold text-opacity-80 pl-2">
          {props.data.city}
        </p>
        <p className="text-black opacity-80 text-xl">{props.data.area}</p>
      </div>
      <div className="text-black opacity-80 text-xl pl-2">${props.data.price.toLocaleString()}</div>
    </div>
  );
}
