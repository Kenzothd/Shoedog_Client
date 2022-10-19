import React, { useEffect, useState } from "react";
import { Ilistings } from "./Interface";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleListing() {
  const [listing, setListing] = useState<Ilistings>({
    country: "",
    email: "",
    first_name: "",
    last_name: "",
    listing_id: 0,
    listing_price: 0,
    password: "",
    shoe_brand: "",
    shoe_description: "",
    shoe_id: 0,
    shoe_img: "",
    shoe_model: "",
    shoe_size: "",
    sold: false,
    user_listing_id: 0,
    verified: "",
  });

  const { id } = useParams();

  console.log(listing);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_UR}/listings/${id}`)
      .then((res) => setListing(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="mt-32 max-w-32 text-center">
        <div>
          <img
            className="h-60 w-full mx-auto max-w-sm object-cover object-center"
            src={listing.shoe_img}
            alt={listing.shoe_brand}
          />
        </div>
        <h1>{listing.shoe_model}</h1>
        <h1>Owner: {listing.first_name}</h1>
        <p>{listing.shoe_description}</p>
        <button className="p-1 bg-white rounded border-2 border-solid border-black hover:bg-slate-300">
          Add to cart
        </button>
      </div>
    </>
  );
}

export default SingleListing;
