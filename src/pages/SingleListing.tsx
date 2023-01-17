import React, { useEffect, useState } from "react";
import { Ilistings } from "./Interface";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
  const [toggleVolume, setToggleVolume] = useState("All");

  const { id } = useParams();
  const navigate = useNavigate();

  const data = [
    {
      price: 177,
      size: 6,
      expirations: "7 hours ago",
      seller: "big_migus",
      verified: false,
    },
    {
      price: 179,
      size: 6,
      expirations: "8 hours ago",
      seller: "shadyjawn",
      verified: false,
    },
    {
      price: 185,
      size: 6.5,
      expirations: "16 hours ago",
      seller: "franklinisbored",
      verified: false,
    },
    {
      price: 190,
      size: 6.5,
      expirations: "1 day ago",
      seller: "StreetPigeon",
      verified: false,
    },
    {
      price: 199,
      size: 7,
      expirations: "1 day ago",
      seller: "Darlington",
      verified: true,
    },
    {
      price: 199,
      size: 7,
      expirations: "1 day ago",
      seller: "Darlington",
      verified: true,
    },
    {
      price: 199,
      size: 7,
      expirations: "1 day ago",
      seller: "Darlington",
      verified: true,
    },
  ];

  const volbtn = ["1M", "3M", "6M", "1Y", "All"];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/listings/${id}`)
      .then((res) => setListing(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleToggleVol = (e: any) => {
    setToggleVolume(e.target.innerText);
  };

  const navigateProfile = () => {
    navigate("/profile/0");
  };

  return (
    <>
      <div className="mt-[10rem] mx-[10rem] flex flex-col gap-10">
        <div className="flex gap-12 justify-center items-center">
          <div className="rounded w-[44%] border-2 mb-12">
            <img
              className="py-10 object-contain border-b rounded"
              src="https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
              alt="shoe"
            />
            <div className="px-2 py-3 flex justify-between items-center">
              <p className="font-semibold text-xl">Air Force 1 Low White '07</p>
              <div className="flex gap-1">
                <p>121</p>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-lg text-slate-400">Nike</h1>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">
                Air Force 1 Low White '07
              </h2>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 border border-black rounded-full p-0.5 pointer-events-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border rounded">
              <div className="flex justify-between border-b px-2 items-center">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Listings
                </div>
                <div className="flex gap-2 items-center py-2">
                  Sort:
                  <button className="p-1 bg-white rounded border border-solid border hover:bg-slate-300 font-semibold flex gap-0.5">
                    Most Recent
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-1.5 items-center text-center pl-2 pr-6 border-b">
                <div>Price</div>
                <div>Size</div>
                <div>Expirations</div>
                <div>Seller</div>
                <div></div>
              </div>
              <div className="grid grid-cols-5 gap-1.5 items-center text-center h-60 overflow-auto ">
                <div className="col-span-5"></div>
                {data.map((e, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="font-semibold pl-2">SGD {e.price}</div>
                      <div>{e.size}</div>
                      <div className="text-sm">{e.expirations}</div>
                      <div
                        className="text-blue-500 font-semibold text-sm flex items-center justify-center cursor-pointer hover:text-blue-700"
                        onClick={navigateProfile}
                      >
                        {e.seller}
                        {e.verified ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <button className="border rounded px-2 py-1  bg-black text-white font-semibold transition ease-in-out hover:scale-105">
                          Buy Now
                        </button>
                      </div>
                      <div className="col-span-5">
                        <hr />
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <p className="font-semibold text-md">Last Sale: SGD 175</p>
              <p className="font-semibold text-[#68C066] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
                    clipRule="evenodd"
                  />
                </svg>
                SGD 2 (+1%)
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 border-y-2 py-10 ">
          <h3 className="font-semibold text-xl mb-10">Product Details</h3>
          <div className="flex  gap-28 px-2">
            <div className="grid grid-cols-2 place-items-start gap-x-10 gap-y-1 h-1/2">
              <p className="font-semibold text-md">Colorway</p>
              <p>White</p>
              <p className="font-semibold text-md">Retail Price</p>
              <p>$120</p>
              <p className="font-semibold text-md">Average Price</p>
              <p>$160</p>
              <p className="font-semibold text-md">Release Date</p>
              <p>06 Apr 2022</p>
            </div>
            <div className="w-8/12">
              <h4 className="font-semibold text-lg pb-1">
                Product Description
              </h4>
              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 border-b-2 pb-10">
          <h2 className="font-semibold text-xl">Price History</h2>
          <div className="flex justify-between items-center mt-5">
            <div className="flex border rounded font-medium text-sm">
              {volbtn.map((e) => (
                <button
                  className={
                    toggleVolume === e
                      ? "px-8 border rounded bg-black text-white"
                      : "px-8 bg-gray-100"
                  }
                  onClick={handleToggleVol}
                >
                  {e}
                </button>
              ))}
            </div>
            <button className="font-medium flex items-center gap-1 text-green-700">
              View Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className=" mt-4 border border-black text-center py-28">
            Input Chart Here
          </div>
        </div>
        <div className="px-5 pb-10">
          <h2 className="font-semibold text-xl">12-Month Historical</h2>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="bg-gray-100 rounded py-4 px-6">
              <p className="font-semibold text-xl">SGD 69 - SGD 550</p>
              <p className="font-medium text-sm">12-Month Trade Range</p>
            </div>
            <div className="bg-gray-100 rounded py-4 px-6">
              <p className="font-semibold text-xl">SGD 170 - SGD 244</p>
              <p className="font-medium text-sm">All-Time Trade Range</p>
            </div>
            <div className="bg-gray-100 rounded py-4 px-6">
              <p className="font-semibold text-xl">18%</p>
              <p className="font-medium text-sm">Volatility</p>
            </div>
            <div className="bg-gray-100 rounded py-4 px-6">
              <p className="font-semibold text-xl">2,190</p>
              <p className="font-medium text-sm">Number of Sales</p>
            </div>
            <div className="bg-gray-100 rounded py-4 px-6">
              <p className="font-semibold text-xl">25%</p>
              <p className="font-medium text-sm">Price Premium</p>
            </div>
            <div className="bg-gray-100 rounded py-4 px-6">
              <p className="font-semibold text-xl">SGD 232</p>
              <p className="font-medium text-sm">Average Sale Price</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleListing;
