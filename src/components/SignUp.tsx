import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
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
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
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
        .post("http://localhost:5001/users/", JSON.stringify(values), config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="first_name">First Name</label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.first_name}
      />
      {formik.touched.first_name && formik.errors.first_name ? (
        <div>{formik.errors.first_name}</div>
      ) : null}

      <label htmlFor="last_name">Last Name</label>
      <input
        id="last_name"
        name="last_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
      />
      {formik.touched.last_name && formik.errors.last_name ? (
        <div>{formik.errors.last_name}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <label htmlFor="country">Country</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
      />
      {formik.touched.country && formik.errors.country ? (
        <div>{formik.errors.country}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
