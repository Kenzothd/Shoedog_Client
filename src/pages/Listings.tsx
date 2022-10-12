import React, { useEffect } from "react";
import axios from "axios";

function Listings() {
  useEffect(() => {
    axios
      .get("http://localhost:5001/listings/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>reflects listing here</h1>
    </>
  );
}

export default Listings;
