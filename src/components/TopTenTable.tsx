import React from "react";

function TopTenTable() {
  const mockTopTenData = [
    {
      img: "https://images.novelship.com/product/1664391359054_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 High 'Lost & Found'",
      lowest_list: 432,
      volume: "64M+",
    },
    {
      img: "https://images.novelship.com/product/1653919419146_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low 'Black White' 2021",
      lowest_list: 191,
      volume: "24M+",
    },
    {
      img: "https://images.novelship.com/product/1664411976537_AirJordan40.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 4 Retro 'Midnight Navy",
      lowest_list: 325,
      volume: "4M+",
    },
    {
      img: "https://images.novelship.com/product/1666960814609_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Low 'Aluminum'(W)",
      lowest_list: 140,
      volume: "1M+",
    },
    {
      img: "https://images.novelship.com/product/1653918046201_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low SP 'Kentucky'",
      lowest_list: 206,
      volume: "1M+",
    },
    {
      img: "https://images.novelship.com/product/1658762197699_YeezySlide0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Yeezy Slides 'Bone' (2022 Restock)",
      lowest_list: 156,
      volume: "987K",
    },
    {
      img: "https://images.novelship.com/product/1653919400399_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low 'Black White' 2021 (W)",
      lowest_list: 186,
      volume: "854K",
    },
    {
      img: "https://images.novelship.com/product/1653919040759_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Mid 'Smoke Grey'",
      lowest_list: 156,
      volume: "800K",
    },
    {
      img: "https://images.novelship.com/product/1654843117055_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Low 'Bulls'",
      lowest_list: 101,
      volume: "500K",
    },
    {
      img: "https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Air Force 1 Low White '07",
      lowest_list: 113,
      volume: "343K",
    },
  ];

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
      <div className="flex justify-between gap-10">
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
            {mockTopTenData.slice(0, 5).map((e, i) => (
              <div className="col-span-6 grid grid-cols-6 items-center py-1 rounded hover:drop-shadow-sm transition ease-in-out cursor-pointer hover:scale-105 hover:bg-gray-50">
                <div className="grid grid-cols-5 gap-2 items-center font-semibold ">
                  <div>{i + 1}</div>
                  <div className="col-start-2 col-end-6">
                    <img
                      className="w-16 h-16 py-3 border rounded  bg-white"
                      src={e.img}
                      alt="shoe"
                    />
                  </div>
                </div>
                <div className="col-span-3 break-all px-2 font-semibold">
                  {e.shoe_name}
                </div>
                <div className="place-self-center font-semibold ">
                  <p className="">
                    SGD <span>{e.lowest_list}</span>
                  </p>
                </div>
                <div className="place-self-center font-semibold">
                  {e.volume}
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
            {mockTopTenData.slice(5, 10).map((e, i) => (
              <div className="col-span-6 grid grid-cols-6 items-center py-1 rounded hover:drop-shadow-sm transition ease-in-out cursor-pointer hover:scale-105 hover:bg-gray-50">
                <div className="grid grid-cols-5 gap-2 items-center font-semibold">
                  <div>{i + 6}</div>
                  <div className="col-start-2 col-end-6">
                    <img
                      className="w-16 h-16 py-3 border rounded bg-white"
                      src={e.img}
                      alt="shoe"
                    />
                  </div>
                </div>
                <div className="col-span-3 break-all px-2 font-semibold">
                  {e.shoe_name}
                </div>
                <div className="place-self-center font-semibold ">
                  <p className="">
                    SGD <span>{e.lowest_list}</span>
                  </p>
                </div>
                <div className="place-self-center font-semibold">
                  {e.volume}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTenTable;
