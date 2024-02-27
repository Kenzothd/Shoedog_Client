import { useContext } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FooterContext } from "./Footer";

function PersonalNavBar() {
  const { currency, setCurrency, setBrand, username, setUsername } =
    useContext(FooterContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const currencyType = ["SGD", "USD", "MYR", "TKY"];

  const handlerCurrency = () => {
    setToggle(!toggle);
  };

  const navigateHome = () => {
    navigate(`/in/${username}/home`);
  };

  const navigateListings = () => {
    setBrand([]);
    navigate(`/in/${username}/listings`);
  };

  const navigateLogin = () => {
    setUsername("");
    navigate("/login");
  };

  const navigateUserProfile = () => {
    navigate(`/in/${username}`);
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
          <ul className="flex justify-between gap-6 text-base items-center text-white ">
            <li className="cursor-pointer" onClick={navigateHome}>
              Home
            </li>
            <li className="cursor-pointer" onClick={navigateListings}>
              Browse
            </li>
            <li
              className="cursor-pointer flex gap-3 items-center"
              onClick={navigateUserProfile}
            >
              <img
                src="https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200"
                className="h-8 w-8 border-slate-300 border-2 rounded-3xl pointers-event-none"
                alt="profile-pic"
              />
              Profile
            </li>
            <li className="cursor-pointer" onClick={navigateLogin}>
              Log Out
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

export default PersonalNavBar;
