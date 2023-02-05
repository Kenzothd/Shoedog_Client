import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { IListingsAndUsersSoldFalse } from "../pages/Interface";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  listings: IListingsAndUsersSoldFalse[];
};

function AlertHistory({ listings }: Props) {
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState("Most Recent");
  const navigate = useNavigate();

  const sortList = [
    "Most Recent",
    "Least Recent",
    "Lowest Price",
    "Highest Price",
    "Smallest Size",
    "Largest Size",
  ];

  let sortedListings = listings;

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

  const navigateProfile = (e: any) => {
    navigate(`/profile/${e.target.id}`);
  };

  return (
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
          <p className="font-bold">Alerts History</p>
        </div>
        <div className="flex gap-2 items-center py-2">
          Sort:
          <div className="relative text-center">
            <button
              onClick={handleToggleSort}
              className="p-1 bg-white rounded border-2 border-solid border hover:bg-slate-100 font-semibold flex gap-0.5"
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
                        className="py-1 px-3 border-b hover:bg-slate-100 cursor-pointer"
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
      <div className="grid grid-cols-9 gap-1.5 items-center text-center pl-2 pr-3 border-b">
        <div className="col-span-3">Shoe</div>
        <div>Price</div>
        <div>Size</div>
        <div className="col-span-3">
          <div className="grid grid-cols-2">
            <div>Expirations</div>
            <div>Seller</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-80 overflow-auto text-sm">
        <div className="grid grid-cols-9 gap-1.5 items-center text-center pl-2 pr-1 py-1 border-b">
          <div className="col-span-3 flex justify-center items-center gap-0.5 ">
            <img
              className="h-12 w-12 py-3 border rounded bg-white"
              src="https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
              alt="shoe"
            />
            <p>Yeezy Slides "Bone" (2022 Restock)ll</p>
          </div>
          <div>SGD 100</div>
          <div>US 10</div>
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              <div>1 days ago</div>
              <div className="text-blue-500 font-semibold text-sm flex items-center justify-center cursor-pointer hover:text-blue-700 whitespace-normal">
                <p>big_migus</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 pointer-events-none"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <button className="border rounded px-2 py-1 my-1 bg-black text-white font-semibold transition ease-in-out hover:scale-105">
              Buy Now
            </button>
          </div>
          {/* {sortedListings[0] ? (
          <>
            <div className="col-span-5"></div>
            {sortedListings.map((e, i) => {
              return (
                <React.Fragment key={i}>
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
                    id={e.username}
                    onClick={navigateProfile}
                  >
                    <p className="pointer-events-none">{e.username}</p>
                    <div className="pointer-events-none">
                      {e.verified ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 pointer-events-none"
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
                  </div>
                  <div>
                    <button className="border rounded px-2 py-1 my-1 bg-black text-white font-semibold transition ease-in-out hover:scale-105">
                      Buy Now
                    </button>
                  </div>
                  <div className="col-span-5">
                    <hr />
                  </div>
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <>
            <div className="col-span-5 p-20 flex flex-col justify-align  items-center h-full w-full">
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
        )} */}
        </div>
      </div>
    </div>
  );
}

export default AlertHistory;
