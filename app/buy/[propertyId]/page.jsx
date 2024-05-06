import PropertyImageSliderModule from "@/app/modules/PropertyImageSliderModule";
import PropertyInfo from "@/app/components/PropertyInfo";

export default function PropertyPage(props) {
  const propertyId = props.params.propertyId;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col max-w-7xl w-full">
        <PropertyImageSliderModule
          id={propertyId}
          imageWidth={1024}
          imageHeight={512}
          imageSpacing={12}
          borderWidth={2}
          numberOfDisplayImages={1}
        />
        <PropertyInfo id={propertyId}></PropertyInfo>
      </div>
    </div>
  );
}
