import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IAlertsHistory } from "../pages/Interface";

type Props = {
  userId: number;
  username: string;
};

function AlertHistory({ userId, username }: Props) {
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState("Most Recent");
  const [alertsHistory, setAlertsHistory] = useState<IAlertsHistory[]>([]);
  const navigate = useNavigate();

  const sortList = [
    "Most Recent",
    "Least Recent",
    "Lowest Price",
    "Highest Price",
    "Smallest Size",
    "Largest Size",
  ];

  const fetchAlertsHistory = (userId: number) => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/alerts/history/${userId}`)
      .then((res) => {
        setAlertsHistory(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let timer = setTimeout(() => fetchAlertsHistory(userId), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [userId]);

  let sortedAlertsHistory = alertsHistory;

  console.log(sortedAlertsHistory);

  const handleToggleSort = () => {
    setToggle(!toggle);
  };

  switch (sort) {
    case "Least Recent":
      sortedAlertsHistory = sortedAlertsHistory?.sort(
        (a, b) => Date.parse(a.listing_date) - Date.parse(b.listing_date)
      );
      break;
    case "Lowest Price":
      console.log("Lowest Price sorting");
      sortedAlertsHistory = sortedAlertsHistory?.sort(
        (a, b) => a.listing_price - b.listing_price
      );
      break;
    case "Highest Price":
      console.log("Highest Price sorting");
      sortedAlertsHistory = sortedAlertsHistory?.sort(
        (a, b) => b.listing_price - a.listing_price
      );
      break;
    case "Smallest Size":
      console.log("Smallest Size sorting");
      sortedAlertsHistory = sortedAlertsHistory.sort(
        (a, b) => Number(a.shoe_size) - Number(b.shoe_size)
      );
      break;
    case "Largest Size":
      console.log("Largest Size sorting");
      sortedAlertsHistory = sortedAlertsHistory.sort(
        (a, b) => Number(b.shoe_size) - Number(a.shoe_size)
      );
      break;
    default:
      sortedAlertsHistory = sortedAlertsHistory?.sort(
        (a, b) => Date.parse(b.listing_date) - Date.parse(a.listing_date)
      );
  }

  const navigateProfile = (e: any) => {
    navigate(`/in/${username}/profile/${e.target.id}`);
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
              className="p-1 bg-white rounded border-2 border-solid  hover:bg-slate-100 font-semibold flex gap-0.5"
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
      <div className="grid grid-cols-9 gap-1.5 items-center text-center font-medium pl-2 pr-3 border-b">
        <div className="col-span-3">Shoe Model</div>
        <div>Size</div>
        <div>Price</div>
        <div className="col-span-3">
          <div className="grid grid-cols-2">
            <div>Expirations</div>
            <div>Seller</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-80 overflow-auto text-sm">
        {sortedAlertsHistory[0] ? (
          sortedAlertsHistory.map((e) => (
            <div
              key={e.listing_id}
              className="grid grid-cols-9 gap-1.5 items-center text-center pl-2 pr-1 border-b"
            >
              <div className="col-span-3 grid grid-cols-4 py-2">
                <img
                  className="h-12 w-12 py-3 border rounded bg-white object-fit"
                  src={e.shoe_img}
                  alt="shoe"
                />
                <p className="col-span-3 flex items-center">{e.shoe_model}</p>
              </div>
              <div>{e.shoe_size}</div>
              <div>SGD {e.listing_price}</div>
              <div className="col-span-3">
                <div className="grid grid-cols-2">
                  <div>
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
            </div>
          ))
        ) : (
          <div className="text-center text-lg py-32">No Alerts History yet</div>
        )}
      </div>
    </div>
  );
}

export default AlertHistory;
