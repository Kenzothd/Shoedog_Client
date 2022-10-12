import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("submit button", JSON.stringify(values));

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post("http://localhost:5001/users/login", values, config)
        .then((res) => {
          if (res.data.id !== "") {
            navigate(`/user/${res.data.id}/alerts`);
          }
        }) //navigate with user/id
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col text-center gap-5">
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
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <button className="hover:bg-slate-200" type="submit">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
