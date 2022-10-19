import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ilistings } from "./Interface";
import { useNavigate } from "react-router-dom";

function Listings() {
  const [listings, setListings] = useState<Ilistings[]>([
    {
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
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_UR}/listings/`)
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handlerSingleListing = (e: any) => {
    navigate(`/listings/${e.target.id}`);
  };

  return (
    <>
      <div className="mt-32 mx-32 flex flex-wrap justify-center gap-10">
        {listings.map((e) => (
          <div
            onClick={handlerSingleListing}
            id={e.listing_id.toString()}
            key={e.listing_id}
            className="w-56 max-w-xs bg-white rounded-lg shadow-md"
          >
            <img
              className="h-40 object-cover rounded-t-lg pointer-events-none"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"
              alt={e.listing_id.toString()}
            />

            <div className="px-5 pb-5 py-1 pointer-events-none">
              <h5 className="text-md font-semibold tracking-tight pointer-events-none">
                {e.shoe_model}
              </h5>

              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-yellow-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-yellow-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-yellow-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-yellow-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-yellow-300 pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded pointer-events-none">
                  5.0
                </span>
              </div>
              <div className="flex justify-between items-center pointer-events-none">
                <span>size {e.shoe_size}</span>
                <span className="text-xl font-bold text-gray-900 pointer-events-none">
                  ${e.listing_price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listings;
