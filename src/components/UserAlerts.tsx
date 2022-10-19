import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAlerts, IAllAlerts } from "../pages/Interface";
import CreateAlert from "./CreateAlert";

type Props = {
  // alertsHistory: IAllAlerts[];
  // setAlertsHistory: any;
  allAlerts: string;
  setAllAlerts: any;
};

function UserAlerts({
  allAlerts,
  setAllAlerts,
}: // alertsHistory,
// setAlertsHistory,
Props) {
  const [alerts, setAlerts] = useState<IAlerts[]>([
    {
      alert_id: 0,
      alert_price: 0,
      country: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      shoe_brand: "",
      shoe_description: "",
      shoe_id: 0,
      shoe_img: "",
      shoe_model: "",
      shoe_size: "",
      user_alert_id: 0,
      verified: "",
    },
  ]);
  const [alertBtn, toggleAlertBtn] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_UR}/alerts/${id}`)
      .then((res) => setAlerts(res.data))
      .catch((err) => console.log(err));
  }, [id, alertBtn]);

  const handlerCreateAlert = () => {
    toggleAlertBtn(!alertBtn);
  };

  return (
    <>
      <div className="text-center mx-30 relative">
        <button
          onClick={handlerCreateAlert}
          className="p-1 bg-white rounded border-2 border-solid border-black hover:bg-slate-300 mb-10"
        >
          +Create Alert
        </button>
        {alerts.map((e) => (
          <div
            key={e.alert_id}
            className="flex justify-center items-center gap-10 mb-10"
          >
            <img
              className="h-72 max-w-md object-cover rounded-t-lg pointer-events-none"
              src={e.shoe_img}
              alt="shoe"
            />
            <p>{e.shoe_brand}</p>
            <p>{e.shoe_model}</p>
            <p>size {e.shoe_size}</p>
            <p>Alert Price: ${e.alert_price}</p>
            <button className="p-1 bg-white rounded border-2 border-solid border-black hover:bg-slate-300">
              Delete
            </button>
          </div>
        ))}
        {alertBtn ? (
          <CreateAlert
            // alertsHistory={alertsHistory}
            // setAlertsHistory={setAlertsHistory}
            allAlerts={allAlerts}
            setAllAlerts={setAllAlerts}
            alertBtn={alertBtn}
            toggleAlertBtn={toggleAlertBtn}
          />
        ) : null}
      </div>
    </>
  );
}

export default UserAlerts;
