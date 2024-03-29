import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IVolumeStats } from "../pages/Interface";
import { FooterContext } from "./Footer";
import TopTenTable from "./TopTenTable";

function Trending() {
  const navigate = useNavigate();
  const { setBrand, username } = useContext(FooterContext);
  const [toggleTrending, setToggleTrending] = useState("Top");
  const [toggleVolume, setToggleVolume] = useState("6M");
  const [volumeStats, setVolumeStats] = useState<IVolumeStats[]>([]);

  const fetchVolume = (time: string) => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/listings/volume/${time}`)
      .then((res) => {
        setVolumeStats(
          res.data.map(
            ({
              shoe_brand,
              shoe_model,
              shoe_id,
              shoe_img,
              lowest_listing_price,
              total_volume,
            }: {
              shoe_brand: string;
              shoe_model: string;
              shoe_id: number;
              shoe_img: string;
              lowest_listing_price: number;
              total_volume: number;
            }) => ({
              shoe_brand,
              shoe_model,
              shoe_id,
              shoe_img,
              lowest_listing_price,
              volume: total_volume,
            })
          )
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    switch (toggleVolume) {
      case "1M":
        fetchVolume("one-month");
        break;
      case "3M":
        fetchVolume("three-month");
        break;
      case "6M":
        fetchVolume("six-month");
        break;
      case "1Y":
        fetchVolume("one-year");
        break;
      case "All":
        fetchVolume("all");
        break;
    }
  }, [toggleVolume]);

  const trendingBtn = ["Trending", "Top"];
  const volBtn = ["All", "1Y", "6M", "3M", "1M"];

  const toggleTrendingHandler = (tab: string) => {
    tab === "Trending"
      ? setToggleTrending("Trending")
      : setToggleTrending("Top");
  };

  const toggleVolumeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const volumePeriod = e.currentTarget.innerText;
    setVolumeStats([]);
    setToggleVolume(volumePeriod);
  };

  const navigateListings = () => {
    setBrand([]);
    username ? navigate(`/in/${username}/listings`) : navigate("/listings");
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
        <TopTenTable volumeStats={volumeStats} />
      </div>
    </>
  );
}

export default Trending;
