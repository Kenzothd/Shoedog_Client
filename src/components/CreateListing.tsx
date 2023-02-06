import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IShoes } from "../pages/Interface";
import * as Yup from "yup";
import { useFormik } from "formik";

type Props = {
  //   alertsHistory: IAllAlerts[];
  //   setAlertsHistory: any;
  title: string;
  listingBtn: boolean;
  toggleListingBtn: any;
  userId?: number;
  // allAlerts: string;
  // setAllAlerts: any;
};

function CreateListing({ title, userId, listingBtn, toggleListingBtn }: Props) {
  const [shoes, setShoes] = useState<IShoes[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/shoes`)
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const shoeModel = shoes?.map((e) => e.shoe_model);
  const shoeSize = Array.from({ length: 18 }, (_, index) =>
    (6 + index * 0.5).toString()
  );

  const formik = useFormik({
    initialValues: {
      shoe_model: "",
      shoe_size: "6",
      listing_price: "",
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

      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/listings/${userId}`,
          values,
          config
        )
        .then((res) => {
          console.log(res.data);
          // toggleListingBtn(!listingBtn);
          // setAllAlerts(!allAlerts);
        })
        .catch((err) => console.log(err));
    },
  });

  const closeListingPopUp = () => {
    toggleListingBtn(!listingBtn);
  };

  return (
    <div className="absolute p-3 rounded opacity-90 bg-black text-center  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              {shoeModel?.map((e, i) => (
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
              {shoeSize.map((e, i) => (
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
                className="text-white rounded border-2 border-solid border-white hover:bg-slate-400 p-2"
                type="submit"
              >
                {title} Listing
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
    </div>
  );
}

export default CreateListing;
