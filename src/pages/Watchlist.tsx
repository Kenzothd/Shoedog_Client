import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import AlertHistory from "../components/AlertHistory";
import Alerts from "../components/Alerts";
import CreateAlert from "../components/CreateAlert";
import { IAlerts, IDisplayListings } from "./Interface";

type Props = {
  userId: number;
  username: string;
  profileListings: IDisplayListings[];
};

function Watchlist({ userId, username, profileListings }: Props) {
  const [alertBtn, setAlertButton] = useState(false);
  const [title, setTitle] = useState("");
  const [alerts, setAlerts] = useState<IAlerts[]>([]);
  //For edit/update alert
  const [alertId, setAlertId] = useState(0);
  const [shoeModel, setShoeModel] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [shoePrice, setShoePrice] = useState("");

  const fetchAlerts = useCallback(
    () =>
      axios
        .get(
          `${process.env.REACT_APP_API_BASE_URL}/alerts/findbyuserid/${userId}`
        )
        .then((res) => {
          setAlerts(res.data);
        })
        .catch((err) => console.log(err)),
    [userId]
  );

  useEffect(() => {
    // fetchAlerts();
    let timer = setTimeout(() => fetchAlerts(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [userId, fetchAlerts]);

  //used to open the alert popup
  const handleToggleAlert = (
    e: any,
    alert_id: number = 0,
    shoe_model: string = "",
    shoe_size: string = "",
    shoe_price: string = ""
  ) => {
    if (e.target.id === "Create") {
      setTitle("Create");
    } else {
      setTitle("Edit");
      setAlertId(alert_id);
      setShoeModel(shoe_model);
      setShoeSize(shoe_size);
      setShoePrice(shoe_price);
    }
    setAlertButton(true);
  };

  return (
    <div className="grid grid-cols-3 gap-6 px-2 mt-4">
      <Alerts
        userId={userId}
        handleToggleAlert={handleToggleAlert}
        alerts={alerts}
      />
      {alertBtn ? (
        <CreateAlert
          title={title}
          userId={userId}
          alertId={alertId}
          shoeModel={shoeModel}
          shoeSize={shoeSize}
          shoePrice={shoePrice}
          alertBtn={alertBtn}
          setAlertBtn={setAlertButton}
          handleToggleAlert={handleToggleAlert}
          fetchAlerts={fetchAlerts}
        />
      ) : (
        <></>
      )}

      <div className="col-span-2">
        <AlertHistory
          profileListings={profileListings}
          alerts={alerts}
          userId={userId}
          username={username}
        />
      </div>
    </div>
  );
}

export default Watchlist;
