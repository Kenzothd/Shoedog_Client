import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FooterContext } from "./Footer";

function Navbar() {
  const { currency, setCurrency, setBrand } = useContext(FooterContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const currencyType = ["SGD", "USD", "MYR", "TKY"];

  const handlerCurrency = () => {
    setToggle(!toggle);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateListings = () => {
    setBrand([]);
    navigate("/listings");
  };

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="px-5 py-5 bg-black fixed w-full z-20 top-0 left-0  flex justify-between items-center">
        <div className="cursor-pointer" onClick={navigateHome}>
          <p className="text-white text-xl font-semibold">
            ShoeDog{" "}
            <span className="bg-gray-500 rounded text-sm whitespace-nowrap p-0.5">
              - In Progress
            </span>
          </p>
        </div>
        <div>
          <ul className="flex justify-between gap-6 text-base items-center  ">
            <li className="text-white cursor-pointer" onClick={navigateHome}>
              Home
            </li>
            <li
              className="text-white cursor-pointer"
              onClick={navigateListings}
            >
              Browse
            </li>
            <li className="text-white cursor-pointer" onClick={navigateAbout}>
              About
            </li>
            <li
              className="text-white flex gap-1 items-center cursor-pointer"
              onClick={navigateLogin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Sign Up/Login
            </li>

            <div
              onClick={handlerCurrency}
              className="text-white font-semibold py-0.5 pl-2 pr-1 border rounded flex items-center hover:border-bg-black cursor-pointer"
            >
              {<p>{currency}</p>}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              {toggle ? (
                <div className="absolute top-12 right-5">
                  <ul className="bg-black border-2 rounded ">
                    {currencyType.map((e, i) => (
                      <li
                        key={i}
                        onClick={(e: any) => {
                          setCurrency(e.target.innerText);
                          handlerCurrency();
                        }}
                        className="py-0.5 px-3 border-b border-b-white hover:bg-slate-600"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
