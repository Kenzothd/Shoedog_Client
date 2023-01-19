import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IVolume } from "../pages/Interface";
import TopTenTable from "./TopTenTable";

export interface IStats {
  shoe_brand: string;
  shoe_model: string;
  shoe_id: number;
  shoe_img: string;
  lowest_listing_price: number;
  volume: number;
}

function Trending() {
  const navigate = useNavigate();
  const [toggleTrending, setToggleTrending] = useState("Top");
  const [toggleVolume, setToggleVolume] = useState("All");
  const [volumeStats, setVolumeStats] = useState<IVolume[]>([]);
  const [currentStats, setCurrentStats] = useState<IStats[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/listings/volume`)
      .then((res) => {
        setVolumeStats(res.data);
        setCurrentStats(
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
  }, []);

  const trendingBtn = ["Trending", "Top"];
  const volBtn = ["All", "1M", "3M", "6M", "1Y"];

  const toggleTrendingHandler = (param: string) => {
    param === "Trending"
      ? setToggleTrending("Trending")
      : setToggleTrending("Top");
  };

  const toggleVolumeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const volumePeriod = e.currentTarget.innerText;
    setToggleVolume(volumePeriod);
    let newArray: IStats[] = [];
    const volumePeriodMap: { [key: string]: string } = {
      All: "total_volume",
      "1M": "one_month_total_volume",
      "3M": "three_month_total_volume",
      "6M": "six_month_total_volume",
      "1Y": "one_year_total_volume",
    };
    const volumePeriodKey = volumePeriodMap[volumePeriod];
    if (volumeStats && volumePeriodKey) {
      newArray = volumeStats
        .map(
          ({
            shoe_brand,
            shoe_model,
            shoe_id,
            shoe_img,
            lowest_listing_price,
            [volumePeriodKey as keyof IVolume]: volume,
          }) => ({
            shoe_brand,
            shoe_model,
            shoe_id,
            shoe_img,
            lowest_listing_price,
            volume: +volume,
          })
        )
        .sort((a, b) => b.volume - a.volume);
      setCurrentStats(newArray);
    }
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
        <TopTenTable currentStats={currentStats} />
      </div>
    </>
  );
}

export default Trending;
