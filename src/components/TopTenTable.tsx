import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IVolumeStats } from "../pages/Interface";
import { FooterContext } from "./Footer";

type Props = {
  volumeStats: IVolumeStats[];
};

function TopTenTable({ volumeStats }: Props) {
  const { currency, username } = useContext(FooterContext);
  const navigate = useNavigate();

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return parseFloat((num / 1000000000).toFixed(2)) + "B";
    }
    if (num >= 1000000) {
      return parseFloat((num / 1000000).toFixed(2)) + "M";
    }
    if (num >= 1000) {
      return parseFloat((num / 1000).toFixed(2)) + "K";
    }
    return num;
  };

  const navigateSingleListing = (e: any) => {
    username
      ? navigate(`/in/${username}/listings/${e.currentTarget.id}`)
      : navigate(`/listings/${e.currentTarget.id}`);
  };

  return (
    <>
      {/* using table HTML */}
      {/* <div className="flex justify-between gap-5 my-10">
        <div id="type-1">
          <table className="">
            <tr>
              <td className="px-2 text-sm font-semibold">COLLECTION</td>
              <td className="px-2"></td>
              <td className="px-2 text-sm font-semibold w-28 text-center">
                LOWEST LIST
              </td>
              <td className="px-2 text-sm font-semibold text-center">VOLUME</td>
            </tr>
            <tr className="">
              <td className="px-2 py-3 flex gap-2 justify-around items-center font-semibold">
                <p>1</p>
                <img
                  className="w-20 py-3 border rounded"
                  src="https://images.novelship.com/product/1664391359054_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
                  alt="shoe"
                />
              </td>
              <td className="w-60 px-2 break-normal font-semibold">
                Jordan 1 High 'Lost & Found' Jordan 1 High 'Lost & Foundttttttt'
              </td>
              <td className="text-center font-semibold">SGD 432</td>
              <td className="text-center font-semibold">64M</td>
            </tr>
          </table>
        </div>
        <div id="type-1">
          <table className="">
            <tr>
              <td className="px-2 text-xs font-semibold">COLLECTION</td>
              <td className="px-2"></td>
              <td className="px-3 text-xs font-semibold w-28 text-center">
                LOWEST LIST
              </td>
              <td className="px-2 text-xs font-semibold text-center">VOLUME</td>
            </tr>
            <tr className="">
              <td className="px-2 py-3 flex gap-2 justify-around items-center font-semibold">
                <p>1</p>
                <img
                  className="w-20 py-3 border rounded"
                  src="https://images.novelship.com/product/1664391359054_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
                  alt="shoe"
                />
              </td>
              <td className="w-60 px-2 break-normal font-semibold">
                Jordan 1 High 'Lost & Found' Jordan 1 High 'Lost & Foundttttttt'
              </td>
              <td className="text-center font-semibold">SGD 432</td>
              <td className="text-center font-semibold">64M</td>
            </tr>
          </table>
        </div>
      </div> */}

      {/* using grid with divs */}
      {volumeStats[0] ? (
        <div className="grid grid-cols-2 gap-14">
          <div id="type-2-left">
            <div className="grid grid-cols-6 gap-2 items-center">
              <div className="col-span-6 grid grid-cols-6 mb-2">
                <div className="place-self-start text-sm text-gray-400 font-semibold ">
                  COLLECTION
                </div>
                <div className="col-span-3"></div>
                <div className="place-self-center  text-center w-28 text-sm text-gray-400 font-semibold">
                  LOWEST LIST
                </div>
                <div className="place-self-center  text-center text-sm text-gray-400 font-semibold">
                  VOLUME
                </div>
              </div>
              {volumeStats?.slice(0, 5).map((e, i) => (
                <div
                  className="col-span-6 grid grid-cols-6 items-center py-1 rounded hover:drop-shadow-sm transition ease-in-out cursor-pointer hover:scale-105 hover:bg-gray-50"
                  key={e.shoe_id}
                  id={e.shoe_id.toString()}
                  onClick={navigateSingleListing}
                >
                  <div className="grid grid-cols-5 gap-2 items-center font-semibold ">
                    <div>{i + 1}</div>
                    <div className="col-start-2 col-end-6">
                      <img
                        className="w-16 h-16 py-3 border rounded  bg-white"
                        src={e.shoe_img}
                        alt="shoe"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 break-all px-2 font-semibold overflow-hidden">
                    {e.shoe_model}
                  </div>
                  <div className="place-self-center font-semibold ">
                    <p className="">
                      {currency} <span>{e.lowest_listing_price}</span>
                    </p>
                  </div>
                  <div className="place-self-center font-semibold">
                    {formatNumber(e.volume)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="type-2-right">
            <div className="grid grid-cols-6 gap-2 items-center ">
              <div className="col-span-6 grid grid-cols-6 mb-2">
                <div className="place-self-start text-sm text-gray-400 font-semibold ">
                  COLLECTION
                </div>
                <div className="col-span-3"></div>
                <div className="place-self-center  text-center w-28 text-sm text-gray-400 font-semibold">
                  LOWEST LIST
                </div>
                <div className="place-self-center  text-center text-sm text-gray-400 font-semibold">
                  VOLUME
                </div>
              </div>
              {volumeStats?.slice(5, 10).map((e, i) => (
                <div
                  className="col-span-6 grid grid-cols-6 items-center py-1 rounded hover:drop-shadow-sm transition ease-in-out cursor-pointer hover:scale-105 hover:bg-gray-50"
                  key={e.shoe_id}
                  id={e.shoe_id.toString()}
                  onClick={navigateSingleListing}
                >
                  <div className="grid grid-cols-5 gap-2 items-center font-semibold ">
                    <div>{i + 6}</div>
                    <div className="col-start-2 col-end-6">
                      <img
                        className="w-16 h-16 py-3 border rounded  bg-white"
                        src={e.shoe_img}
                        alt="shoe"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 break-all px-2 font-semibold overflow-hidden">
                    {e.shoe_model}
                  </div>
                  <div className="place-self-center font-semibold ">
                    <p className="">
                      {currency} <span>{e.lowest_listing_price}</span>
                    </p>
                  </div>
                  <div className="place-self-center font-semibold">
                    {formatNumber(e.volume)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-6 text-center py-44 w-full border">
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
            Loading might take up to 3 mins...
          </div>
        </div>
      )}
    </>
  );
}

export default TopTenTable;
