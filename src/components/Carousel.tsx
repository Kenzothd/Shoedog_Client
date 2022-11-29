import React, { useEffect, useState } from "react";
import coverOne from "../imgs/cover-one.png";
import coverTwo from "../imgs/cover-two.png";
import coverThree from "../imgs/cover-three.png";
import coverFour from "../imgs/cover-four.png";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= carouselItems.length - 1) {
        setCurrentIndex(0);
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const carouselItems = [
    `${coverOne}`,
    `${coverTwo}`,
    `${coverThree}`,
    `${coverFour}`,
  ];

  const nextBtn = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= carouselItems.length - 1) {
      setCurrentIndex(0);
    }
  };

  const prevBtn = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(carouselItems.length - 1);
    }
  };

  return (
    <>
      <div className="mt-16 pt-1 border-top-2 border-solid border-black justify-center">
        <div className="flex items-center overflow-hidden ">
          <button
            id="prev-button"
            onClick={prevBtn}
            className="absolute left-0 py-20 px-2.5 opacity-0 rounded hover:bg-slate-300 hover:opacity-40 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextBtn}
            id="next-button"
            className="absolute right-0 py-20 px-2.5 opacity-0 rounded hover:bg-slate-300 hover:opacity-40"
          >
            <svg
              aria-hidden="true"
              className="w-7 h-7  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          {carouselItems.map((e, i) => (
            <img
              className={
                i === currentIndex ? " w-screen animate-fadein" : "hidden"
              }
              src={e}
              alt="carousel"
              key={i}
            />
          ))}
        </div>
        <div className="mt-5 w-full flex justify-center">
          {carouselItems.map((element, index) => {
            return (
              <div
                className={
                  index === currentIndex
                    ? "h-2 w-2 bg-slate-600 rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-2 w-2 bg-slate-300 rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
