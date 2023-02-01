import React, { useCallback, useEffect, useState } from "react";
import { IlistingsSoldFalse, IPriceHistoryData, IShoeData } from "./Interface";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { format, formatDistanceToNow } from "date-fns";
import PriceHistory from "../components/PriceHistory";

function SingleListing() {
  const [listings, setListings] = useState<IlistingsSoldFalse[]>([]);
  const [sort, setSort] = useState("Most Recent");
  const [toggle, setToggle] = useState(false);
  const [shoeData, setShoeData] = useState<IShoeData[]>([]);
  const [toggleVolume, setToggleVolume] = useState("All");
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IPriceHistoryData[]>([]);

  const sortList = [
    "Most Recent",
    "Least Recent",
    "Lowest Price",
    "Highest Price",
    "Smallest Size",
    "Largest Size",
  ];

  const volbtn = ["1M", "3M", "6M", "1Y", "All"];

  const fetchPriceHistory = useCallback(
    (duration: string, dateRange: string = "dd MMM yy") => {
      axios
        .get(
          `${process.env.REACT_APP_API_BASE_URL}/listings/true/${id}/${duration}`
        )
        .then((res) => {
          const filteredData = res.data.map((e: any) => ({
            "Average price": Number(e.avg_listing_price),
            listing_start_date: format(
              new Date(e.listing_start_date),
              dateRange
            ),
          }));
          setData(filteredData);
        })
        .catch((err) => console.log(err));
    },
    [id]
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/shoes/${id}`)
      .then((res) => setShoeData(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/listings/false/${id}/all`)
      .then((res) => {
        setListings(res.data);
      })
      .catch((err) => console.log(err));

    let timer = setTimeout(() => fetchPriceHistory("all"), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, fetchPriceHistory]);

  let sortedListings = listings;

  const avgListingPrice =
    listings?.map((e) => e.listing_price).reduce((a, b) => a + b, 0) /
    listings.length;

  const handleToggleSort = () => {
    setToggle(!toggle);
  };

  switch (sort) {
    case "Least Recent":
      sortedListings = sortedListings?.sort(
        (a, b) => Date.parse(a.listing_date) - Date.parse(b.listing_date)
      );
      break;
    case "Lowest Price":
      console.log("Lowest Price sorting");
      sortedListings = sortedListings?.sort(
        (a, b) => a.listing_price - b.listing_price
      );
      break;
    case "Highest Price":
      console.log("Highest Price sorting");
      sortedListings = sortedListings?.sort(
        (a, b) => b.listing_price - a.listing_price
      );
      break;
    case "Smallest Size":
      console.log("Smallest Size sorting");
      sortedListings = sortedListings.sort(
        (a, b) => Number(a.shoe_size) - Number(b.shoe_size)
      );
      break;
    case "Largest Size":
      console.log("Largest Size sorting");
      sortedListings = sortedListings.sort(
        (a, b) => Number(b.shoe_size) - Number(a.shoe_size)
      );
      break;
    default:
      sortedListings = sortedListings?.sort(
        (a, b) => Date.parse(b.listing_date) - Date.parse(a.listing_date)
      );
  }

  const handleToggleVol = (e: any) => {
    const volume = e.target.innerText;
    setData([]);
    setToggleVolume(volume);

    switch (volume) {
      case "1Y":
        fetchPriceHistory("one-year");
        break;
      case "6M":
        fetchPriceHistory("six-month");
        break;
      case "3M":
        fetchPriceHistory("three-month");
        break;
      case "1M":
        fetchPriceHistory("one-month", "dd MMM yy HH:mm");
        break;
      case "All":
        fetchPriceHistory("all");
        break;
    }
  };

  const navigateProfile = () => {
    navigate("/profile/0");
  };

  return (
    <>
      <div className="mt-[10rem] mx-[10rem] flex flex-col gap-10">
        <div className="flex gap-12 justify-center items-center">
          <div className="rounded w-[36rem] border-2 mb-12">
            <img
              className="py-8 px-2 h-[21.3rem] w-full aspect-auto object-contain border-b rounded"
              src={
                shoeData[0]
                  ? shoeData[0].shoe_img
                  : "https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
              }
              alt="shoe"
            />
            <div className="px-2 py-3 flex justify-between items-center">
              <p className="font-semibold text-xl">{shoeData[0]?.shoe_model}</p>
              <div className="flex gap-1">
                <p>{shoeData[0] ? shoeData[0].shoe_likes : "..."}</p>
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
          <div className="flex flex-col gap-2 w-[36rem]">
            <h2 className="font-medium text-lg text-slate-400">
              {shoeData[0]?.shoe_brand}
            </h2>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">
                {shoeData[0]?.shoe_model}
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
            <div className="border-2 rounded">
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
                  <div className="relative text-center">
                    <button
                      onClick={handleToggleSort}
                      className="p-1 bg-white rounded border border-solid border hover:bg-slate-300 font-semibold flex gap-0.5"
                    >
                      {sort}
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
                    {toggle ? (
                      <div className="absolute">
                        <ul className="bg-white border-2 rounded ">
                          {sortList
                            .filter((e) => e !== sort)
                            .map((e, i) => (
                              <li
                                key={i}
                                onClick={(e: any) => {
                                  setSort(e.target.innerText);
                                  handleToggleSort();
                                }}
                                className="py-1 px-3 border-b hover:bg-slate-300 cursor-pointer"
                              >
                                {e}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
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
                {sortedListings[0] ? (
                  sortedListings.map((e, i) => {
                    return (
                      <React.Fragment key={i}>
                        <div className="col-span-5"></div>
                        <div className="font-semibold pl-2">
                          SGD {e.listing_price}
                        </div>
                        <div>{e.shoe_size}</div>
                        <div className="text-sm">
                          {formatDistanceToNow(new Date(e.listing_date))
                            ?.split(" ")
                            .filter((e) => e !== "about")
                            .join(" ")}{" "}
                          ago
                        </div>
                        <div
                          className="text-blue-500 font-semibold text-sm flex items-center justify-center cursor-pointer hover:text-blue-700 whitespace-normal"
                          onClick={navigateProfile}
                        >
                          {e.username}
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
                          <button className="border rounded px-2 py-1 bg-black text-white font-semibold transition ease-in-out hover:scale-105">
                            Buy Now
                          </button>
                        </div>
                        <div className="col-span-5">
                          <hr />
                        </div>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <>
                    <div className="col-span-5 p-20 flex flex-col justify-align  items-center h-full w-full border">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                      <div className="pt-2 font-medium">
                        Loading might take awhile...
                      </div>
                    </div>
                  </>
                )}
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
              <p className="font-semibold text-md">Retail Price</p>
              <p>${shoeData[0]?.shoe_retail_price}</p>
              <p className="font-semibold text-md">Average Price</p>
              <p>${Math.round(avgListingPrice)}</p>
              <p className="font-semibold text-md">Release Date</p>
              <p>
                {shoeData[0]
                  ? format(
                      new Date(shoeData[0]?.shoe_release_date),
                      "dd MMM yyyy"
                    )
                  : " "}
              </p>
            </div>
            <div className="w-8/12">
              <h4 className="font-semibold text-lg pb-1">
                Product Description
              </h4>
              <p className="text-md">
                {shoeData[0]?.shoe_description}
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 border-b-2 pb-10">
          <h2 className="font-semibold text-xl">Price History</h2>
          <div className="flex justify-between items-center mt-5">
            <div className="flex border rounded font-medium text-sm">
              {volbtn.map((e, i) => (
                <button
                  key={i}
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
            <div>
              {/*For future view sales(KIV) */}
              {/* <button className="font-medium flex items-center gap-1 text-green-700">
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
            </button> */}
            </div>
          </div>
          <div className="mt-4 border border-black text-center p-4">
            {data[0] ? (
              <PriceHistory data={data} />
            ) : (
              <div className="py-28">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
                <div>Loading might take awhile...</div>{" "}
              </div>
            )}
          </div>
        </div>
        <div className="px-5 pb-10">
          <h2 className="font-semibold text-xl">12-Month Historical</h2>
          {shoeData[0] ? (
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="bg-gray-100 rounded py-4 px-6">
                <p className="font-semibold text-xl">
                  SGD {shoeData[0]?.one_year_lowest_listing_price + 10} - SGD{" "}
                  {shoeData[0]?.one_year_highest_listing_price - 10}
                </p>
                <p className="font-medium text-sm">12-Month Trade Range</p>
              </div>
              <div className="bg-gray-100 rounded py-4 px-6">
                <p className="font-semibold text-xl">
                  SGD {shoeData[0]?.all_time_lowest_listing_price} - SGD{" "}
                  {shoeData[0]?.all_time_highest_listing_price}
                </p>
                <p className="font-medium text-sm">All-Time Trade Range</p>
              </div>
              <div className="bg-gray-100 rounded py-4 px-6">
                <p className="font-semibold text-xl">
                  {shoeData[0] ? shoeData[0].volatility : "loading..."}%
                </p>
                <p className="font-medium text-sm">Volatility</p>
              </div>
              <div className="bg-gray-100 rounded py-4 px-6">
                <p className="font-semibold text-xl">
                  {shoeData[0]?.number_of_sales}
                </p>
                <p className="font-medium text-sm">Number of Sales</p>
              </div>
              <div className="bg-gray-100 rounded py-4 px-6">
                <p className="font-semibold text-xl">25%</p>
                <p className="font-medium text-sm">Price Premium</p>
              </div>
              <div className="bg-gray-100 rounded py-4 px-6">
                <p className="font-semibold text-xl">
                  SGD {shoeData[0]?.average_listing_price}
                </p>
                <p className="font-medium text-sm">Average Sale Price</p>
              </div>
            </div>
          ) : (
            <div className="col-span-6 text-center py-16 w-full border mt-5">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
              <div className="pt-2 font-medium">
                Loading might take awhile...
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleListing;
