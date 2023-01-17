import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopTenTable from "./TopTenTable";

function Trending() {
  const navigate = useNavigate();
  const [toggleTrending, setToggleTrending] = useState("Top");
  const [toggleVolume, setToggleVolume] = useState("All");

  const trendingBtn = ["Trending", "Top"];
  const volBtn = ["All", "1D", "7D", "30D"];

  const toggleTrendingHandler = (param: string) => {
    param === "Trending"
      ? setToggleTrending("Trending")
      : setToggleTrending("Top");
  };

  const toggleVolumeHandler = (e: any) => {
    setToggleVolume(e.target.innerText);
  };

  const navigateListings = () => {
    navigate("/listings");
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-72 border-b border-slate-200 w-full font-semibold text-gray-400 mb-10">
          <div id="trending-tab" className="flex text-3xl ">
            {trendingBtn.map((e, i) => (
              <button
                onClick={() => toggleTrendingHandler(e)}
                className={
                  e === toggleTrending
                    ? "pb-2 px-3 border-b-2 border-slate-700 text-black"
                    : "pb-2 px-3"
                }
                key={i}
              >
                {e}
              </button>
            ))}
          </div>
          <div className="flex gap-5 items-center text-xl mb-2">
            <div
              id="volume"
              className={
                toggleTrending === "Top"
                  ? "flex gap-4 border border-black rounded py-1 px-3"
                  : "flex gap-4 border border-gray-300 rounded py-1 px-3"
              }
            >
              {volBtn.map((e, i) => (
                <button
                  onClick={toggleVolumeHandler}
                  className={
                    toggleTrending === "Top" && toggleVolume === e
                      ? "text-black"
                      : ""
                  }
                  key={i}
                >
                  {e}
                </button>
              ))}
            </div>
            <button
              className="border border-black rounded px-2 py-1 text-lg text-black transition ease-in-out hover:scale-105"
              onClick={navigateListings}
            >
              View More
            </button>
          </div>
        </div>
        <TopTenTable />
      </div>
    </>
  );
}

export default Trending;
