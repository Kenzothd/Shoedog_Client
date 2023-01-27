import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "./Navbar";

function FeaturedSection() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);
  const currency = useContext(NavbarContext);

  const featured = [
    {
      featuredBrand: "Jordan 1 Low 'Wear Away Yellow'",
      img: "https://images.novelship.com/product/1670481652483_AirJordan10.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "109",
      releaseDate: "08 DEC(SG)",
    },
    {
      featuredBrand: "NB 650R 'Cloudy Grey'",
      img: "https://images.novelship.com/product/1670006788136_NewBalance0.png?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "356",
      releaseDate: "08 DEC(SG)",
    },
    {
      featuredBrand: "NB 9060 'Ivory'",
      img: "https://images.novelship.com/product/1669921066624_NewBalance0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "232",
      releaseDate: "08 DEC(SG)",
    },
    {
      featuredBrand: "NB 9060 'Truffle'",
      img: "https://images.novelship.com/product/1670027992538_NewBalance0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "229",
      releaseDate: "08 DEC(SG)",
    },
    {
      featuredBrand: "Air Max 97 'No Bubble'",
      img: "https://images.novelship.com/product/1665103137822_NikeAirMax0.png?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "-",
      releaseDate: "08 DEC(SG)",
    },
    {
      featuredBrand: "AirMax Penny 1 'Black and Metallic Silver'",
      img: "https://images.novelship.com/product/1667997766602_NikeAirMax0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "192",
      releaseDate: "09 DEC(SG)",
    },
    {
      featuredBrand: "Air Force 1 Low 'Silver Swoosh'",
      img: "https://images.novelship.com/product/1669877077956_NikeAirFor0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "186",
      releaseDate: "09 DEC(SG)",
    },
    {
      featuredBrand: "Air Max 1 '87 'Burgundy Crush'",
      img: "https://images.novelship.com/product/1670308758559_NikeAirMax0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "263",
      releaseDate: "09 DEC(SG)",
    },
    {
      featuredBrand: "Air Max Scorpion 'Black",
      img: "https://images.novelship.com/product/1670481657324_NikeAirMax0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "296",
      releaseDate: "10 DEC(SG)",
    },
    {
      featuredBrand: "Dunk Low 'Terry Swoosh' (W)",
      img: "https://images.novelship.com/product/1670222486351_NikeDunkLo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=200",
      lowestPrice: "148",
      releaseDate: "10 DEC(SG)",
    },
  ];

  const btnLeft = () => {
    setNumber(number - 1);
  };

  const btnRight = () => {
    setNumber(number + 1);
  };

  const navigateSingleListing = () => {
    navigate("/listings/0");
  };

  const navigateListings = () => {
    navigate("/listings");
  };

  return (
    <div className="">
      <div className="flex justify-between font-semibold pb-2 border-b">
        <div className=" text-3xl">Featured</div>
        <button
          className="border border-black rounded px-2 py-1 text-lg text-black transition ease-in-out hover:scale-105"
          onClick={navigateListings}
        >
          View More
        </button>
      </div>
      {/* <button
          onClick={btnLeft}
          className=" bg-slate-100 left-0 top-1/2 border-2 transition ease-in-out hover:scale-105 z-20"
        >
          left
        </button>
        <button
          onClick={btnRight}
          className=" bg-slate-100 right-0 top-1/2 border-2 transition ease-in-out hover:scale-105 z-20 position-fixed"
        >
          right
        </button> */}
      <div
        className="flex gap-5 mt-10 w-auto overflow-y-hidden overflow-x-scroll touch-auto snap-x snap-mandatory scroll-smooth will-change-scroll hover:"
        onClick={navigateSingleListing}
      >
        {featured.map((e, i) => (
          <div
            className={
              "relative group w-56 h-[17rem] cursor-pointer ml-[5.5rem] shrink-0 snap-center"
            }
            key={i}
          >
            <div className="absolute bottom--16 left-[-6rem] text-[14rem] font-bold text-gray-400/40 whitespace-nowrap z-10 ">
              {i + 1}
            </div>
            <div className="relative h-full w-full bg-white rounded-tr-3xl rounded-bl-3xl border-4 transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
              <div className="absolute inset-0 whitespace-nowrap flex flex-col gap-3 justify-around px-2 pt-3 ">
                <img
                  className="w-full h-[35%] object-fill bg-white"
                  src={e.img}
                  alt="shoe"
                />
                <p className="text-lg font-bold whitespace-normal group-hover:text-white duration-700 ">
                  {e.featuredBrand}
                </p>

                <div className="flex justify-between items-end p-1  group-hover:text-white duration-700">
                  <p className="bg-slate-100 text-sm font-medium">
                    {e.releaseDate}
                  </p>
                  <div className="text-end group-hover:text-white duration-300">
                    <p className="text-sm ">Lowest List</p>
                    <p className="font-semibold">
                      {currency} {e.lowestPrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded bg-black/80 text-center text-slate-200 p-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-full flex-col items-center justify-center gap-2">
                  <h1 className="text font-bold">9.0 Rating</h1>
                  <p className="text-base px-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
