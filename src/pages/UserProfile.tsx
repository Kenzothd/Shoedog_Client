import React, { useState } from "react";

function UserProfile() {
  const [tab, setTab] = useState("Listed");
  const tabs = ["Listed", "Reviews", "Favourited", "Alerts", "Alert History"];

  const toggleTabHandler = (e: any) => {
    setTab(e.target.innerText);
  };

  const mockShoesData = [
    {
      img: "https://images.novelship.com/product/1664391359054_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 High 'Lost & Found'",
      listing_price: 432,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653919419146_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low 'Black White' 2021",
      listing_price: 191,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1664411976537_AirJordan40.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 4 Retro 'Midnight Navy",
      listing_price: 325,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1666960814609_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Low 'Aluminum'(W)",
      listing_price: 140,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653918046201_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low SP 'Kentucky'",
      listing_price: 206,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1658762197699_YeezySlide0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Yeezy Slides 'Bone' (2022 Restock)",
      listing_price: 156,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653919400399_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low 'Black White' 2021 (W)",
      listing_price: 186,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653919040759_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Mid 'Smoke Grey'",
      listing_price: 156,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1654843117055_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Low 'Bulls'",
      listing_price: 101,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Air Force 1 Low White '07",
      listing_price: 113,
      size: "US 6",
      quantity: 1,
    },
  ];

  return (
    <div className="my-[10rem] mx-[16rem] flex flex-col gap-8">
      <div className="flex flex-start gap-12 items-center ">
        <div className="py-12 border-2 rounded-[5rem] w-[18%] overflow-hidden">
          <img
            src="https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
            alt="shoe"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-3xl">Darlington</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="font-semibold ">@big_mingus777</p>
        </div>
      </div>
      <div className="flex items-center justify-between font-medium ">
        <div className="flex items-center gap-5 text-gray-400">
          <button>Followers (212)</button>
          <button>Following (430)</button>
          <p>Joined April 2022</p>
        </div>
        <div className="flex gap-2 items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 pointer-events-none"
            >
              <path
                fillRule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="tab"
        className="flex gap-5 font-semibold border-b-2 text-lg mt-4"
      >
        {tabs.map((e, i) => (
          <button
            onClick={toggleTabHandler}
            className={
              e === tab
                ? "pb-2 px-3 border-b-2 border-slate-700 text-black"
                : "pb-2 px-3 text-gray-400"
            }
            key={i}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-8 px-10 mt-4">
        {mockShoesData.map((e) => (
          <div className="border-2 rounded font-medium cursor-pointer transition ease-in-out hover:scale-105 h-72">
            <div className="h-1/2 p-2">
              <img className="object-contain h-full" src={e.img} alt="shoe" />
            </div>
            <div className="p-2 h-1/2 flex flex-col justify-between">
              <p className="pb-6 font-semibold">{e.shoe_name}</p>
              <div>
                <p className=" text-gray-400">Size: {e.size}</p>
                <div className="pt-0.5 flex justify-between">
                  <p className="text-gray-400">Quantity: {e.quantity}</p>
                  <p className="font-semibold">SGD {e.listing_price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
