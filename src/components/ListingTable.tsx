import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IDisplayListings } from "../pages/Interface";

type Props = {
  listings: IDisplayListings[];
  condition: string;
  gap: number;
};

function ListingTable({ listings, condition, gap }: Props) {
  const navigate = useNavigate();
  const navigateSingleListing = () => {
    navigate("/listings/0");
  };
  return (
    <div className={`grid grid-cols-4 gap-${gap} px-12 mt-4`}>
      {listings?.map((e, i) => (
        <div
          key={i}
          className="border-2 rounded font-medium cursor-pointer transition ease-in-out hover:scale-105 h-72"
          onClick={navigateSingleListing}
        >
          <div className="h-1/2 p-2">
            <img
              className="object-contain h-full"
              src={e.shoe_img}
              alt="shoe"
            />
          </div>
          <div className="p-2 h-1/2 flex flex-col justify-between">
            <p className="pb-6 font-semibold">{e.shoe_model}</p>
            <div>
              <p className="text-sm text-gray-400">Size: US {e.shoe_size}</p>
              <div className="pt-0.5 flex justify-between">
                <p className="text-sm text-gray-400">
                  {condition === "Listed" ? "Listed" : "Closed"}:{" "}
                  {format(new Date(e.date), "dd/MM/yy")}
                </p>
                <p className="font-semibold">SGD {e.listing_price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListingTable;