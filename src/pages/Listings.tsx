import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { IListings } from "./Interface";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../components/Navbar";
import coverOne from "../imgs/cover-one.png";
import { format } from "date-fns";

function Listings() {
  const [listings, setListings] = useState<IListings[]>([]);
  const [toggleSort, setToggleSort] = useState(false);
  const [sort, setSort] = useState("Most Recent");
  const [toggleYear, setToggleYear] = useState(false);
  const [year, setYear] = useState("All Year");
  const [toggleMonth, setToggleMonth] = useState(false);
  const [month, setMonth] = useState("All Month");
  const [pricesTag, setPricesTag] = useState<string[]>([]);
  const [brandsTag, setBrandsTag] = useState<string[]>([]);
  const currency = useContext(NavbarContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/listings`)
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(listings);

  let yearList = [
    "All Year",
    ...Array.from(
      new Set(
        listings?.map((e) => format(new Date(e.shoe_release_date), "yyyy"))
      )
    ),
  ];

  let monthList = [
    ...Array.from(
      new Set(
        listings?.map((e) => format(new Date(e.shoe_release_date), "MMMM"))
      )
    ),
    "All Month",
  ].reverse();

  const sortList = [
    "Most Recent",
    "Least Recent",
    "Lowest Price",
    "Highest Price",
  ];

  const brandsList = [
    "Nike",
    "Adidas",
    "Puma",
    "Converse",
    "New Balance",
    "Vans",
  ];

  const priceList = [
    { input: "under_retail", label: "Under Retail Price" },
    { input: "> 100", label: "Under - 100" },
    {
      input: "100 200",
      label: "100 - 200",
    },
    {
      input: "200 300",
      label: "200 - 300",
    },
    {
      input: "e.lowest_listing_price >= 300 && e.lowest_listing_price <= 400",
      label: "300 - 400",
    },
    { input: "price >= 400 && price < 500", label: "400 - 500" },
    { input: "price >= 500 && price < 600", label: "500 - 600" },
    { input: "price >= 600 && price < 700", label: "600 - 700" },
    { input: "price >= 700 && price < 800", label: "700 - 800" },
    { input: "price >= 800 && price < 900", label: "800 - 900" },
    { input: "price >= 900 && price < 1000", label: "900 - 1000" },
  ];

  let sortedListings = listings;

  const sortAndFilter = () => {
    // Filter by brand
    sortedListings = !brandsTag[0]
      ? listings
      : listings.filter((obj) => brandsTag.includes(obj.shoe_brand));

    //Filter by price
    if (pricesTag[0]) {
      sortedListings = sortedListings.filter((e) => {
        if (pricesTag.includes("under_retail")) {
          return e.shoe_retail_price > e.lowest_listing_price;
        } else {
          return pricesTag.some((prices) => {
            if (prices.startsWith(">")) {
              return e.lowest_listing_price <= 100;
            } else {
              let [lower, upper] = prices.split("-").map(Number);
              return (
                e.lowest_listing_price >= lower &&
                e.lowest_listing_price <= upper
              );
            }
          });
        }
      });
    }

    // Filter by month
    if (month !== "All Month") {
      sortedListings = sortedListings.filter(
        (ele) => format(new Date(ele.shoe_release_date), "MMMM") === month
      );
    }

    // Filter by year
    if (year !== "All Year") {
      sortedListings = sortedListings.filter(
        (item) => format(new Date(item.shoe_release_date), "yyyy") === year
      );
    }

    switch (sort) {
      case "Least Recent":
        sortedListings = sortedListings.sort(
          (a, b) =>
            Date.parse(a.shoe_release_date) - Date.parse(b.shoe_release_date)
        );
        break;
      case "Lowest Price":
        console.log("Lowest Price sorting");
        sortedListings = sortedListings?.sort(
          (a, b) => a.lowest_listing_price - b.lowest_listing_price
        );
        break;
      case "Highest Price":
        console.log("Highest Price sorting");
        sortedListings = sortedListings?.sort(
          (a, b) => b.lowest_listing_price - a.lowest_listing_price
        );
        break;
      default:
        sortedListings = sortedListings?.sort(
          (a, b) =>
            Date.parse(b.shoe_release_date) - Date.parse(a.shoe_release_date)
        );
    }
  };
  sortAndFilter();

  const handleToggleSort = () => {
    setToggleSort(!toggleSort);
  };

  const handleToggleYear = () => {
    setToggleYear(!toggleYear);
  };

  const handleToggleMonth = () => {
    setToggleMonth(!toggleMonth);
  };

  const handleAddPrice = (event: ChangeEvent<HTMLInputElement>) => {
    pricesTag.find((ele) => ele === event.target.id)
      ? setPricesTag(pricesTag.filter((ele) => ele !== event.target.id))
      : setPricesTag((arr) => [...arr, event.target.id]);
  };

  const handleAddBrands = (event: ChangeEvent<HTMLInputElement>) => {
    brandsTag.find((ele) => ele === event.target.id)
      ? setBrandsTag(brandsTag.filter((ele) => ele !== event.target.id))
      : setBrandsTag((arr) => [...arr, event.target.id]);
  };

  const navigateSingleListing = (e: any) => {
    navigate(`/listings/${e.currentTarget.id}`);
  };

  const mockShoesData = [
    {
      img: "https://images.novelship.com/product/1664391359054_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 High 'Lost & Found'",
      listing_price: 432,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653919419146_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low 'Black White' 2021",
      listing_price: 191,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1664411976537_AirJordan40.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 4 Retro 'Midnight Navy",
      listing_price: 325,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1666960814609_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Low 'Aluminum'(W)",
      listing_price: 140,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653918046201_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low SP 'Kentucky'",
      listing_price: 206,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1658762197699_YeezySlide0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Yeezy Slides 'Bone' (2022 Restock)",
      listing_price: 156,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653919400399_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Dunk Low 'Black White' 2021 (W)",
      listing_price: 186,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653919040759_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Mid 'Smoke Grey'",
      listing_price: 156,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1654843117055_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Jordan 1 Low 'Bulls'",
      listing_price: 101,
      size: "US 6",
      quantity: 1,
    },
    {
      img: "https://images.novelship.com/product/1653918670849_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      shoe_name: "Air Force 1 Low White '07",
      listing_price: 113,
      size: "US 6",
      quantity: 1,
    },
  ];

  return (
    <>
      <div className="mt-[10rem] mb-[4rem] mx-[12rem] flex gap-10 justify-center">
        <div className="pt-2 border-2 rounded-sm w-1/5 p-4 flex flex-col gap-6 h-[80rem]">
          <div>
            <h2 className="text-lg font-semibold">PRICES</h2>
            {priceList.map((e, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  id={e.input}
                  className="border-2 rounded"
                  onChange={handleAddPrice}
                />
                <label className="pl-2 align-middle font-medium">
                  {e.label}
                </label>
                <br />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold">BRANDS</h2>
            {brandsList.map((e, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  id={e}
                  className="border-2 rounded"
                  onChange={handleAddBrands}
                />
                <label className="pl-2 align-middle font-medium">{e}</label>
                <br />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold">RELEASE MONTH</h2>
            <div className="relative text-center">
              <button
                onClick={handleToggleMonth}
                className="p-1 w-full bg-white rounded border-2 border-solid  hover:bg-slate-100 font-semibold flex gap-0.5 flex justify-between"
              >
                {month}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 pointers-event-none "
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {toggleMonth ? (
                <div className="absolute w-full">
                  <ul className="bg-white border-2 rounded z-0">
                    {monthList
                      .filter((e) => e !== month)
                      .map((e, i) => (
                        <li
                          key={i}
                          onClick={(e: any) => {
                            setMonth(e.target.innerText);
                            handleToggleMonth();
                          }}
                          className="py-1 px-3 border-b hover:bg-slate-100 cursor-pointer"
                        >
                          {e}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div className="z--10">
            <h2 className="text-lg font-semibold">RELEASE YEAR</h2>
            <div className="relative text-center ">
              <button
                onClick={handleToggleYear}
                className="p-1 w-full bg-white rounded border-2 border-solid  hover:bg-slate-100 font-semibold flex gap-0.5 flex justify-between"
              >
                {year}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 pointers-event-none "
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {toggleYear ? (
                <div className="absolute w-full">
                  <ul className="bg-white border-2 rounded ">
                    {yearList
                      .filter((e) => e !== year)
                      .map((e, i) => (
                        <li
                          key={i}
                          onClick={(e: any) => {
                            setYear(e.target.innerText);
                            handleToggleYear();
                          }}
                          className="py-1 px-3 border-b hover:bg-slate-100 cursor-pointer"
                        >
                          {e}
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-4/5 flex flex-col gap-5">
          <div className="border">
            <img src={coverOne} alt="ads" />
          </div>
          <div className="my-2 flex justify-between items-center">
            <p className="text-lg">
              Browse{" "}
              {sortedListings[0] ? (
                <span className="font-semibold">{sortedListings.length}</span>
              ) : (
                0
              )}{" "}
              results
            </p>
            <div className=" flex gap-2 items-center py-2">
              Sort By:
              <div className="relative text-center">
                <button
                  onClick={handleToggleSort}
                  className="p-1 bg-white rounded border-2 border-solid  hover:bg-slate-100 font-semibold flex gap-0.5"
                >
                  {sort}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {toggleSort ? (
                  <div className="absolute">
                    <ul className="bg-white border-2 rounded ">
                      {sortList
                        .filter((e) => e !== sort)
                        .map((e, i) => (
                          <li
                            key={i}
                            onClick={(e: any) => {
                              setSort(e.target.innerText);
                              handleToggleSort();
                            }}
                            className="py-1 px-3 border-b hover:bg-slate-100 cursor-pointer"
                          >
                            {e}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            {sortedListings.map((e, i) => (
              <div
                key={i}
                id={e.shoe_id.toString()}
                className="border-2 rounded font-medium cursor-pointer transition ease-in-out hover:scale-105 h-72"
                onClick={navigateSingleListing}
              >
                <div className="h-1/2 p-2">
                  <img
                    className="object-contain h-full"
                    src={e.shoe_img}
                    alt="shoe"
                  />
                </div>
                <div className="p-2 h-1/2 flex flex-col justify-between">
                  <p className="pb-6 font-semibold">{e.shoe_model}</p>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <p className="font-medium text-gray-400 pt-0.5">
                        Released Date:
                      </p>
                      <p className="font-medium text-gray-400 pt-0.5">
                        Lowest List
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium text-gray-400 pt-0.5">
                        {format(new Date(e.shoe_release_date), "dd/MM/yy")}
                      </p>
                      <p className="font-semibold pt-0.5 flex justify-end">
                        SGD {e.lowest_listing_price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {sortedListings.map((e, i) => {
              if (i % 12) {
                return (
                  <button className="border-2 px-4 py-1 font-semibold hover:bg-slate-100">
                    1
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Listings;
