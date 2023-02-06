import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IAlertsHistory, IShoes } from "../pages/Interface";

type Props = {
  // alertsHistory: IAllAlerts[];
  // setAlertsHistory: any;
  // alertBtn: boolean;
  // toggleAlertBtn: any;
  // allAlerts: string;
  // setAllAlerts: any;
};

function CreateAlert({}: // alertBtn,
// toggleAlertBtn,
// alertsHistory,
// setAlertsHistory,
// setAllAlerts,
// allAlerts,
Props) {
  const [shoes, setShoes] = useState<IShoes[]>([]);
  const { username } = useParams();
  // const shoeSize = shoes.map((e) => e.shoe_size);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/shoes`)
      .then((res) => setShoes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const formik = useFormik({
    initialValues: {
      shoe_brand: "",
      shoe_model: "",
      shoe_size: "",
      alert_price: "",
    },
    validationSchema: Yup.object({
      shoe_brand: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      shoe_model: Yup.string().required("Required"),
      shoe_size: Yup.number().required("Required"),
      alert_price: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      //   console.log("submit button", JSON.stringify(values));
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // axios
      //   .post(
      //     `${process.env.REACT_APP_API_BASE_URL}/alerts/${id}`,
      //     values,
      //     config
      //   )
      //   .then((res) => {
      //     toggleAlertBtn(!alertBtn);
      //     setAllAlerts(!allAlerts);
      //   })
      //   .catch((err) => console.log(err));
    },
  });

  // const closeAlertPopUp = () => {
  //   toggleAlertBtn(!alertBtn);
  // };

  return (
    <>
      <div className="absolute py-3 px-20 rounded opacity-90 bg-black text-center  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white py-3 font-bold">Alert Settings</h2>
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
                {/* {shoeSize.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))} */}
              </select>
              {formik.touched.shoe_size && formik.errors.shoe_size ? (
                <div>{formik.errors.shoe_size}</div>
              ) : null}
            </div>

            <div>
              <input
                id="alert_price"
                name="alert_price"
                type="text"
                placeholder="Alert price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.alert_price}
              />
              {formik.touched.alert_price && formik.errors.alert_price ? (
                <div>{formik.errors.alert_price}</div>
              ) : null}
            </div>

            <div className="flex justify-center gap-5">
              <button
                className="text-white rounded border-2 border-solid border-white hover:bg-slate-400 p-2"
                type="submit"
              >
                Create Alert
              </button>
              <button
                // onClick={closeAlertPopUp}
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

export default CreateAlert;
