import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IAllAlerts, Ilistings } from "../pages/Interface";
import CreateListing from "./CreateListing";

type Props = {
  // alertsHistory: IAllAlerts[];
  // setAlertsHistory: any;
  allAlerts: string;
  setAllAlerts: any;
};

function UserListings({
  allAlerts,
  setAllAlerts,
}: // alertsHistory,
// setAlertsHistory,
Props) {
  const [listings, setListings] = useState<Ilistings[]>([
    {
      country: "",
      email: "",
      first_name: "",
      last_name: "",
      listing_id: 0,
      listing_price: 0,
      password: "",
      shoe_brand: "",
      shoe_description: "",
      shoe_id: 0,
      shoe_img: "",
      shoe_model: "",
      shoe_size: "",
      sold: false,
      user_listing_id: 0,
      verified: "",
    },
  ]);
  const [listingBtn, toggleListingBtn] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/listings/user/${id}`)
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }, [id, listingBtn]);

  const handlerCreateListing = () => {
    toggleListingBtn(!listingBtn);
  };

  return (
    <>
      <div className="text-center mx-30 relative">
        <button
          onClick={handlerCreateListing}
          className="p-1 bg-white rounded border-2 border-solid border-black hover:bg-slate-300 mb-10"
        >
          +Create Listing
        </button>
        {listings.map((e) => (
          <div
            key={e.listing_id}
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
            <p>Listing Price: ${e.listing_price}</p>
            <button className="p-1 bg-white rounded border-2 border-solid border-black hover:bg-slate-300">
              Delete
            </button>
          </div>
        ))}
        {listingBtn ? (
          <CreateListing
            // alertsHistory={alertsHistory}
            // setAlertsHistory={setAlertsHistory}
            allAlerts={allAlerts}
            setAllAlerts={setAllAlerts}
            listingBtn={listingBtn}
            toggleListingBtn={toggleListingBtn}
          />
        ) : null}
      </div>
    </>
  );
}

export default UserListings;
