import axios from "axios";
import React, { useEffect, useState } from "react";
import { IShoes } from "../pages/Interface";
import * as Yup from "yup";
import { useFormik } from "formik";

type Props = {
  //   alertsHistory: IAllAlerts[];
  //   setAlertsHistory: any;
  fetchListings: any;
  title: string;
  listingBtn: boolean;
  toggleListingBtn: any;
  userId?: number;
  listingId: number;
  shoeModel: string;
  shoeSize: string;
  shoePrice: string;
  // allAlerts: string;
  // setAllAlerts: any;
};

function CreateListing({
  fetchListings,
  title,
  userId,
  listingBtn,
  toggleListingBtn,
  listingId,
  shoeModel,
  shoeSize,
  shoePrice,
}: Props) {
  const [shoes, setShoes] = useState<IShoes[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/shoes`)
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const shoeModels = shoes?.map((e) => e.shoe_model);
  const shoeSizes = Array.from({ length: 18 }, (_, index) =>
    (6 + index * 0.5).toString()
  );

  const formik = useFormik({
    initialValues: {
      shoe_model: title === "Edit" && shoeModel ? shoeModel : "",
      shoe_size: title === "Edit" && shoeSize ? shoeSize : "6",
      listing_price: title === "Edit" && shoePrice ? shoePrice : "",
    },
    validationSchema: Yup.object({
      shoe_model: Yup.string().required("Required"),
      shoe_size: Yup.string().required("Required"),
      listing_price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("submit button", values);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (title === "Create") {
        axios
          .post(
            `${process.env.REACT_APP_API_BASE_URL}/listings/${userId}`,
            values,
            config
          )
          .then((res) => {
            fetchListings("false");
          })
          .catch((err) => console.log(err));
      } else if (title === "Edit") {
        axios
          .put(
            `${process.env.REACT_APP_API_BASE_URL}/listings/${listingId}`,
            values,
            config
          )
          .then((res) => {
            fetchListings("false");
          })
          .catch((err) => console.log(err));
      }

      closeListingPopUp();
    },
  });

  const closeListingPopUp = () => {
    toggleListingBtn(!listingBtn);
  };

  const handleDeleteListing = () => {
    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/listings/${listingId}`)
      .then((res) => {
        fetchListings("false");
        toggleListingBtn(!listingBtn);
        // setAllAlerts(!allAlerts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="absolute p-12 rounded opacity-90 bg-black text-center  left-1/2 transform -translate-x-1/2 top-[46rem] z-10">
      <h2 className="text-white py-3 text-xl font-bold">{title} Listing</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col text-center items-center justify-center gap-5">
          <div className="grid grid-cols-4 gap-4 pl-6 place-items-start">
            <label className="text-white text-lg font-semibold pr-4 my-auto">
              Shoe Model
            </label>
            <select
              id="shoe_model"
              name="shoe_model"
              placeholder="Shoe Model"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shoe_model}
              className="col-span-2 w-52 place-self-center"
            >
              <option value="">Select a Model</option>
              {shoeModels?.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
            {formik.touched.shoe_model && formik.errors.shoe_model ? (
              <div className="text-white place-self-center">
                {formik.errors.shoe_model}
              </div>
            ) : (
              <div></div>
            )}

            <label className="text-white text-lg font-semibold pr-4 flex my-auto">
              Shoe Size
            </label>
            <select
              id="shoe_size"
              name="shoe_size"
              placeholder="Shoe Size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shoe_size}
              className="col-span-2 w-52 place-self-center"
            >
              {shoeSizes.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
            {formik.touched.shoe_size && formik.errors.shoe_size ? (
              <div className="text-white place-self-center">
                {formik.errors.shoe_size}
              </div>
            ) : (
              <div></div>
            )}

            <label className="text-white text-lg font-semibold pr-4 flex my-auto">
              Listing Price
            </label>
            <input
              id="listing_price"
              name="listing_price"
              type="text"
              placeholder="Listing price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.listing_price}
              className="col-span-2 w-52 place-self-center"
            />
            {formik.touched.listing_price && formik.errors.listing_price ? (
              <div className="text-white place-self-center">
                {formik.errors.listing_price}
              </div>
            ) : (
              <div></div>
            )}

            <div className="col-span-4 w-full text-center flex justify-center gap-5 ">
              <button
                className="text-white rounded border-2 border-solid border-white hover:bg-green-500 p-2"
                type="submit"
              >
                {title}
              </button>
              <button
                onClick={closeListingPopUp}
                className="text-white rounded border-2 border-solid border-white hover:bg-slate-400 p-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
      <button
        className="absolute top-4 right-4 text-white rounded border-2 border-solid border-white hover:bg-red-500 p-2 flex gap-1 items-center"
        onClick={handleDeleteListing}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 pointers-event-none"
        >
          <path
            fillRule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
            clipRule="evenodd"
          />
        </svg>
        Delete Listing
      </button>
    </div>
  );
}

export default CreateListing;
