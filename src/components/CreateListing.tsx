import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAllAlerts, Ishoes } from "../pages/Interface";
import * as Yup from "yup";
import { useFormik } from "formik";

type Props = {
  //   alertsHistory: IAllAlerts[];
  //   setAlertsHistory: any;
  listingBtn: boolean;
  toggleListingBtn: any;
  allAlerts: string;
  setAllAlerts: any;
};
function CreateListing({
  //   alertsHistory,
  //   setAlertsHistory,
  listingBtn,
  toggleListingBtn,
  setAllAlerts,
  allAlerts,
}: Props) {
  const [shoes, setShoes] = useState<Ishoes[]>([
    {
      shoe_brand: "",
      shoe_description: "",
      shoe_id: 0,
      shoe_img: "",
      shoe_model: "",
      shoe_size: "",
    },
  ]);
  const { id } = useParams();
  const shoeSize = shoes.map((e) => e.shoe_size);

  useEffect(() => {
    axios
      .get("http://localhost:5001/shoes")
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const formik = useFormik({
    initialValues: {
      shoe_brand: "",
      shoe_model: "",
      shoe_size: "",
      listing_price: "",
    },
    validationSchema: Yup.object({
      shoe_brand: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      shoe_model: Yup.string().required("Required"),
      shoe_size: Yup.number().required("Required"),
      listing_price: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      //   console.log("submit button", JSON.stringify(values));

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(`http://localhost:5001/listings/${id}`, values, config)
        .then((res) => {
          toggleListingBtn(!listingBtn);
          setAllAlerts(!allAlerts);
        })
        .catch((err) => console.log(err));
    },
  });

  const closeListingPopUp = () => {
    toggleListingBtn(!listingBtn);
  };

  return (
    <>
      <div className="absolute p-3 rounded opacity-90 bg-black text-center top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white py-3 font-bold">Listing Settings</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col text-center gap-5">
            <div>
              <select
                id="shoe_brand"
                name="shoe_brand"
                placeholder="Shoe Brand"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shoe_brand}
              >
                <option>Select a Brand</option>
                <option value="Nike">Nike</option>
              </select>
              {formik.touched.shoe_brand && formik.errors.shoe_brand ? (
                <div>{formik.errors.shoe_brand}</div>
              ) : null}
            </div>

            <div>
              <select
                id="shoe_model"
                name="shoe_model"
                placeholder="Shoe Model"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shoe_model}
              >
                <option value="">Select a Model</option>
                <option value="Nike Air Force 1 07 white">
                  Nike Air Force 1 07 white
                </option>
              </select>
              {formik.touched.shoe_model && formik.errors.shoe_model ? (
                <div>{formik.errors.shoe_model}</div>
              ) : null}
            </div>

            <div>
              <select
                id="shoe_size"
                name="shoe_size"
                placeholder="Shoe Size"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shoe_size}
              >
                {shoeSize.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {formik.touched.shoe_size && formik.errors.shoe_size ? (
                <div>{formik.errors.shoe_size}</div>
              ) : null}
            </div>

            <div>
              <input
                id="listing_price"
                name="listing_price"
                type="text"
                placeholder="Listing price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.listing_price}
              />
              {formik.touched.listing_price && formik.errors.listing_price ? (
                <div>{formik.errors.listing_price}</div>
              ) : null}
            </div>

            <div className="flex justify-center gap-5">
              <button
                className="text-white rounded border-2 border-solid border-white hover:bg-slate-400 p-2"
                type="submit"
              >
                Create Listing
              </button>
              <button
                onClick={closeListingPopUp}
                className="text-white rounded border-2 border-solid border-white hover:bg-slate-400 p-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateListing;
