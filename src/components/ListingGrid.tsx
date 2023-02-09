import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDisplayListings } from "../pages/Interface";
import CreateListing from "./CreateListing";

type Props = {
  fetchListings?: any;
  userId?: number;
  listings: IDisplayListings[];
  tab: string;
  gap: number;
};

function ListingGrid({ fetchListings, userId, listings, tab, gap }: Props) {
  const [toggleSort, setToggleSort] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState("Most Recent");
  const [title, setTitle] = useState("");
  const [listingId, setListingId] = useState(0);
  const [shoeModel, setShoeModel] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [shoePrice, setShoePrice] = useState("");
  const navigate = useNavigate();

  const sortList = [
    "Most Recent",
    "Least Recent",
    "Lowest Price",
    "Highest Price",
    "Smallest Size",
    "Largest Size",
  ];

  let sortedListings = listings;

  switch (sort) {
    case "Least Recent":
      sortedListings = sortedListings?.sort(
        (a, b) => Date.parse(a.date) - Date.parse(b.date)
      );
      break;
    case "Lowest Price":
      console.log("Lowest Price sorting");
      sortedListings = sortedListings?.sort(
        (a, b) => a.listing_price - b.listing_price
      );
      break;
    case "Highest Price":
      console.log("Highest Price sorting");
      sortedListings = sortedListings?.sort(
        (a, b) => b.listing_price - a.listing_price
      );
      break;
    case "Smallest Size":
      console.log("Smallest Size sorting");
      sortedListings = sortedListings.sort(
        (a, b) => Number(a.shoe_size) - Number(b.shoe_size)
      );
      break;
    case "Largest Size":
      console.log("Largest Size sorting");
      sortedListings = sortedListings.sort(
        (a, b) => Number(b.shoe_size) - Number(a.shoe_size)
      );
      break;
    default:
      sortedListings = sortedListings?.sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date)
      );
  }

  const handleToggleSort = () => {
    setToggleSort(!toggleSort);
  };

  //used to open the listing popup
  const handleToggle = (
    e: any,
    listing_id: number = 0,
    shoe_model: string = "",
    shoe_size: string = "",
    shoe_price: string = ""
  ) => {
    if (e.target.id === "Create") {
      setTitle("Create");
    } else {
      setTitle("Edit");
      setListingId(listing_id);
      setShoeModel(shoe_model);
      setShoeSize(shoe_size);
      setShoePrice(shoe_price);
    }

    setToggle(true);
  };

  const navigateSingleListing = (e: any) => {
    navigate(`/listings/${e.currentTarget.id}`);
  };

  return (
    <div className="px-12">
      <div className="flex justify-between items-center">
        {userId && tab === "Listed" ? (
          <button
            id="Create"
            onClick={handleToggle}
            className="p-2 bg-white rounded border-2 border-solid border-grey-900 hover:bg-slate-100 font-semibold flex gap-0.5 my-2 transition ease-in-out "
          >
            + Create New Listings
          </button>
        ) : (
          <div></div>
        )}
        <div className=" flex gap-2 items-center py-2">
          Sort:
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
      <div className={`grid grid-cols-4 gap-${gap} mt-4`}>
        {toggle ? (
          <CreateListing
            fetchListings={fetchListings}
            listingId={listingId}
            shoeModel={shoeModel}
            shoeSize={shoeSize}
            shoePrice={shoePrice}
            title={title}
            userId={userId}
            listingBtn={toggle}
            toggleListingBtn={setToggle}
          />
        ) : (
          <></>
        )}
        {sortedListings?.map((ele, i) => (
          <div
            key={i}
            className={`border-2 rounded font-medium cursor-pointer transition ease-in-out h-72 ${
              toggle ? null : "hover:scale-105"
            }`}
            id={ele.shoe_id.toString()}
            onClick={
              userId && tab === "Listed"
                ? (e) =>
                    handleToggle(
                      e,
                      ele.listing_id,
                      ele.shoe_model,
                      ele.shoe_size,
                      ele.listing_price.toString()
                    )
                : navigateSingleListing
            }
          >
            <div className="h-1/2 p-2">
              <img
                className="object-contain h-full"
                src={ele.shoe_img}
                alt="shoe"
              />
              {userId && tab === "Listed" ? (
                <button
                  id="Update"
                  className="absolute top-1 right-1 transition ease-in-out hover:scale-105 hover:text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8 pointer-events-none "
                  >
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                  </svg>
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="p-2 h-1/2 flex flex-col justify-between">
              {userId && tab === "Listed" ? (
                <p
                  id={ele.shoe_id.toString()}
                  onClick={navigateSingleListing}
                  className="pb-6 font-semibold  transition ease-in-out hover:text-gray-500"
                >
                  {ele.shoe_model}
                </p>
              ) : (
                <p className="pb-6 font-semibold">{ele.shoe_model}</p>
              )}

              <div className="text-[14px]">
                <p className=" text-gray-400">Size: US {ele.shoe_size}</p>
                <div className="pt-0.5 flex justify-between">
                  <p className="text-gray-400">
                    {tab === "Listed" ? "Listed" : "Closed"}:{" "}
                    {format(new Date(ele.date), "dd/MM/yy")}
                  </p>
                  <p className="font-semibold">SGD {ele.listing_price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingGrid;
