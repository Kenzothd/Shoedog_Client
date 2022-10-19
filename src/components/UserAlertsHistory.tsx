import React, { useEffect, useState } from "react";
import { IAllAlerts } from "../pages/Interface";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  //   alertsHistory: IAllAlerts[];
  //   setAlertsHistory: any;
  allAlerts: string;
  setAllAlerts: any;
};

function UserAlertsHistory({
  allAlerts,
  setAllAlerts,
}: //   alertsHistory,
//   setAlertsHistory,
Props) {
  const [alertsHistory, setAlertsHistory] = useState<IAllAlerts[]>([
    {
      alert_id: 0,
      alert_price: 0,
      listing_id: 0,
      listing_price: 0,
      shoe_brand: "",
      shoe_description: "",
      shoe_id: 0,
      shoe_img: "",
      shoe_model: "",
      shoe_size: "",
      sold: false,
      user_alert_id: 0,
      user_listing_id: 0,
    },
  ]);

  console.log(alertsHistory);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(alertsHistory);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`${process.env.REACT_APP_API_BASE_UR}/alerts/history`)
        .then((res) => {
          const allUserAlerts = res.data.filter(
            (e: IAllAlerts) => e.user_alert_id === Number(id)
          );
          setAlertsHistory(allUserAlerts);
          console.log("that");
        })
        .catch((err) => console.log(err));
    }, 3000);
    //fetch and reflect homepage line chart
    return () => clearInterval(interval);
  });

  const handlerSingleListing = (e: any) => {
    navigate(`/listings/${e.target.id}`);
  };

  return (
    <>
      {alertsHistory.map((e) => (
        <div
          onClick={handlerSingleListing}
          id={e.listing_id.toString()}
          key={e.listing_id}
          className="flex justify-center items-center gap-5 p-5 m-5 rounded border-2 border-solid border-black cursor-pointer"
        >
          <img
            src={e.shoe_img}
            className="h-20 w-20 object-fit rounded-t-lg pointer-events-none"
            alt="shoe"
          />
          <p className="pointer-events-none">Listing ID: {e.listing_id}</p>
          <p className="pointer-events-none">User ID: {e.user_alert_id}</p>
          <p className="pointer-events-none">Shoe Model: {e.shoe_model}</p>
          <p className="pointer-events-none">Shoe Size: {e.shoe_size}</p>
          <p className="pointer-events-none">
            Listing Price: {e.listing_price}
          </p>
          <p className="pointer-events-none">Alert Price: {e.alert_price}</p>
        </div>
      ))}
    </>
  );
}

export default UserAlertsHistory;
