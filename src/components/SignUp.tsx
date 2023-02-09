import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      country: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string().max(15, "Must be 15 characters or less"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Required"),
      country: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log("submit button", JSON.stringify(values));

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/users/`, values, config)
        .then((res) => {
          console.log(res.data);
          if (res.data.username !== "") {
            navigate(`/in/${res.data.username}`);
          }
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-rows-6 place-items-center gap-2">
        <div>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <div>{formik.errors.first_name}</div>
          ) : null}
        </div>

        <div>
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <div>{formik.errors.last_name}</div>
          ) : null}
        </div>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country ? (
            <div>{formik.errors.country}</div>
          ) : null}
        </div>

        <button
          className="hover:bg-slate-200 border p-2 font-medium w-44"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignUp;
