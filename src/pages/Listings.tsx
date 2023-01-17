import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Ilistings } from "./Interface";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../components/Navbar";
import coverOne from "../imgs/cover-one.png";

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
  const [pricesTag, setPricesTag] = useState([
    { input: "under_retail", label: "Under Retail Price" },
    { input: "under_100", label: "Under- 100" },
    { input: "100-200", label: "100 - 200" },
  ]);

  const [brandsTag, setBrandsTag] = useState([
    "Nike",
    "Adidas",
    "Puma",
    "Converse",
    "New Balance",
    "Vans",
  ]);

  const [sizesTag, setSizesTag] = useState([
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5,
  ]);
  const [date, setDate] = useState(new Date().toDateString());

  const currency = useContext(NavbarContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://shoedog-server.onrender.com/listings/`)
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handlerSingleListing = (e: any) => {
    navigate(`/listings/${e.target.id}`);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
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
    <>
      <div className="my-[10rem] mx-[15rem] flex gap-10 justify-center">
        <div className="pt-2 border-2 rounded-sm w-1/5 p-4 flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-semibold">PRICES</h2>
            {pricesTag.map((e) => (
              <>
                <input
                  type="checkbox"
                  name={e.input}
                  className="border-2 rounded"
                />
                <label className="pl-2 align-middle font-medium">
                  {e.label}
                </label>
                <br />
              </>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold">BRANDS</h2>
            {brandsTag.map((e) => (
              <>
                <input type="checkbox" name={e} className="border-2 rounded" />
                <label className="pl-2 align-middle font-medium">{e}</label>
                <br />
              </>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold">SIZES(US)</h2>
            <div className="grid grid-cols-4 gap-2 place-items-center mt-2">
              {sizesTag.map((e) => (
                <button className="border-2 border-black py-0.5 w-full h-full text-center font-medium text-[10] hover:bg-slate-100">
                  {e}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">RELEASE YEAR</h2>
            <div className="mt-2 border-2 border-black p-1 flex justify-between items-center">
              Select Year
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="black"
                className="w-4 h-4 pointers-event-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-col gap-5">
          <div className="border">
            <img src={coverOne} alt="ads" />
          </div>
          <div className="my-2 flex justify-between items-center">
            <p className="text-lg">
              Browse <span className="font-semibold">8310</span> results
            </p>
            <div className="flex gap-2 items-center w-2/7">
              <p className="w-full">Sort By:</p>
              <div className="border-2 border-black py-0.5 px-2 flex items-center gap-2 font-medium w-full">
                <p className="w-5/6 pr-max whitespace-nowrap overflow-hidden">
                  Popular
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="black"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            {mockShoesData.map((e) => (
              <div className="border-2 rounded font-medium cursor-pointer transition ease-in-out hover:scale-105 h-72">
                <div className="h-1/2 p-2">
                  <img
                    className="object-contain h-full"
                    src={e.img}
                    alt="shoe"
                  />
                </div>
                <div className="p-2 h-1/2 flex flex-col justify-between">
                  <p className="pb-6 font-semibold">{e.shoe_name}</p>
                  <div>
                    <p className="font-medium text-gray-400 pt-0.5 flex justify-end">
                      Lowest List
                    </p>
                    <p className="font-semibold pt-0.5 flex justify-end">
                      SGD {e.listing_price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Listings;
