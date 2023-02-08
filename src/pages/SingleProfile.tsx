import axios from "axios";
import format from "date-fns/format";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingGrid from "../components/ListingGrid";
import { IProfileDetails, IDisplayListings } from "./Interface";

function SingleProfile() {
  const [tab, setTab] = useState("Listed");
  const [profileDetails, setProfileDetails] = useState<IProfileDetails[]>([]);
  const [ProfileListings, setProfileListings] = useState<IDisplayListings[]>(
    []
  );
  const tabs = ["Listed", "Sold"];

  const { username } = useParams();

  const fetchListings = useCallback(
    (condition: string) => {
      axios
        .get(
          `${process.env.REACT_APP_API_BASE_URL}/listings/sold-${condition}/${username}/limit-ten`
        )
        .then((res) => {
          setProfileListings(res.data);
        })
        .catch((err) => console.log(err));
    },
    [username]
  );

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/users/findbyusername/${username}`
      )
      .then((res) => {
        setProfileDetails(res.data);
      })
      .catch((err) => console.log(err));

    switch (tab) {
      case "Listed":
        fetchListings("false");
        break;
      case "Sold":
        fetchListings("true");
        break;
    }
  }, [username, fetchListings, tab]);

  const toggleTabHandler = (e: any) => {
    setTab(e.target.innerText);
  };

  return (
    <div className="mt-[8rem] mb-[4rem] mx-[12rem] flex flex-col gap-8">
      <div className="flex flex-start gap-12 items-center mx-[0.5rem]">
        <div className="py-12 border-2 rounded-[5rem] w-1/6 overflow-hidden">
          <img
            src="https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
            alt="shoe"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-3xl">
              {profileDetails[0]
                ? profileDetails[0].first_name + profileDetails[0].last_name
                : "Loading..."}
            </p>
            {profileDetails?.[0]?.verified ? (
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
            ) : (
              ""
            )}
          </div>
          <p className="font-semibold ">
            @{profileDetails[0] ? profileDetails[0].username : "Loading..."}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between font-medium mx-[1rem]">
        <div className="flex items-center gap-5 text-gray-400">
          <button>Followers (212)</button>
          <button>Following (430)</button>
          <p>
            {profileDetails[0]
              ? "Joined " +
                format(new Date(profileDetails[0].joined_date), "dd MMM yy")
              : "Loading..."}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button className="font-semibold flex items-center border border-black pr-1 py-1 transition ease-in-out hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 pointer-events-none"
            >
              <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
            </svg>
            Follow
          </button>
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

      <ListingGrid listings={ProfileListings} tab={tab} gap={10} />
    </div>
  );
}

export default SingleProfile;
