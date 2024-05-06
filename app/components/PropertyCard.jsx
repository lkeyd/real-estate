import React from "react";
import Image from "next/image";
import Link from "next/link";

const PropertyIcon = (props) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <p className="text-black text-bold text-xl text-opacity-80">
        {props.property[props.icon]}
      </p>
      <Image
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
  const property = props.object

  return (
    <Link href={`/buy/${property.id}`}>
      <div className="inline-flex flex-col space-y-1 pb-2 rounded-lg shadow-md overflow-hidden border-2 border-black border-opacity-10">
        <div
          className={`relative group overflow-hidden`}
          style={{ width: props.width, height: props.height }}
        >
          <Image
            src={property.image[0]}
            alt={property.id}
            fill
            style={{ objectFit: "cover" }}
            sizes={`(max-width: ${props.width}px) 100vw, 50vw`}
            className="group group-hover:scale-110 group-hover:opacity-90 duration-300 ease-in-out"
          ></Image>
        </div>
        <div className="flex pl-2 space-x-4">
          <PropertyIcon icon="beds" property={property}></PropertyIcon>
          <PropertyIcon icon="baths" property={property}></PropertyIcon>
          <PropertyIcon icon="parking" property={property}></PropertyIcon>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-black text-xl font-bold text-opacity-80 pl-2">
            {property.city}
          </p>
          <p className="text-black opacity-80 text-xl">{property.area}</p>
        </div>
        <div className="text-black opacity-80 text-xl pl-2">
          ${property.price.toLocaleString()}
        </div>
      </div>
    </Link>
  );
}
