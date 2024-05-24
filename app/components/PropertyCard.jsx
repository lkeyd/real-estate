import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyIcon from "./PropertyIcon";


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
          <p className="text-gray-800 text-xl font-bold  pl-2">
            {property.city}
          </p>
          <p className="text-gray-800 text-xl">{property.area}</p>
        </div>
        <div className="text-gray-800 text-xl pl-2">
          ${property.price.toLocaleString()}
        </div>
      </div>
    </Link>
  );
}
