import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAlerts } from "../pages/Interface";

type Props = {
  userId: number;
  handleToggleAlert: any;
  alerts: IAlerts[];
};

function Alerts({ userId, handleToggleAlert, alerts }: Props) {
  const navigate = useNavigate();

  const navigateSingleListing = (e: any) => {
    navigate(`/listings/${e.currentTarget.id}`);
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
          <p className="font-bold">Alerts</p>
        </div>

        <button
          id="Create"
          onClick={handleToggleAlert}
          className="p-1 bg-white rounded border-2 border-solid border-grey-900 hover:bg-slate-100 font-semibold flex gap-0.5 my-2"
        >
          + Create Alert
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1.5 items-center text-center font-medium border-b pr-2">
        <div className="col-span-4">Shoe Model</div>
        <div className="col-span-2 grid grid-cols-3">
          <div>Size</div>
          <div className="col-span-2">Price</div>
        </div>
        <div></div>
      </div>

      <div className="h-80 overflow-auto">
        {alerts[0] ? (
          alerts.map((ele) => (
            <div
              key={ele.alert_id}
              className="grid grid-cols-7 items-center text-center pl-3 border-b text-sm "
            >
              <div
                id={ele.shoe_id.toString()}
                onClick={navigateSingleListing}
                className="col-span-4 grid grid-cols-4 gap-2 py-2 cursor-pointer hover:text-gray-500"
              >
                <img
                  className="h-12 w-12 py-3 border rounded bg-white object-fit"
                  src={ele.shoe_img}
                  alt="shoe"
                />
                <p className="col-span-3 flex items-center font-medium ">
                  {ele.shoe_model}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-3">
                <div>{ele.shoe_size}</div>
                <div className="col-span-2">SGD {ele.alert_price}</div>
              </div>

              <div className="flex justify-center items-center gap-1">
                <button
                  onClick={(e) =>
                    handleToggleAlert(
                      e,
                      ele.alert_id,
                      ele.shoe_model,
                      ele.shoe_size,
                      ele.alert_price.toString()
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 pointer-events-none"
                  >
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg py-32">No Alerts yet</div>
        )}
      </div>
    </div>
  );
}

export default Alerts;
