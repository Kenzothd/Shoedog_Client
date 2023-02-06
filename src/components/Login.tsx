import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  handleAutoGenerate: any;
  loginDetails: { username: string; password: string };
};

function Login({ handleAutoGenerate, loginDetails }: Props) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: loginDetails.username,
      password: loginDetails.password,
    },
    validationSchema: Yup.object({
      username: Yup.string(),
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
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/users/login`,
          values,
          config
        )
        .then((res) => {
          if (res.data.username !== "") {
            navigate(`/in/${res.data.username}`);
          }
        }) //navigate with user/id
        .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-rows-4 place-items-center ">
          <div className="flex flex-col gap-2 items-center">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="m-0"
            />
            {formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="flex flex-col gap-2 items-center">
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
            ) : (
              <div></div>
            )}
          </div>

          <button
            className="hover:bg-slate-200 border p-2 font-medium w-44"
            type="submit"
          >
            Log in
          </button>

          <button
            onClick={handleAutoGenerate}
            className="hover:bg-slate-200 border p-2 font-medium w-44"
          >
            Auto Generate
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
