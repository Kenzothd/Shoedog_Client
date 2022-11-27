import React from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <Carousel />
      <div className="home">
        {/* <ProductCard />
        <h1 className="font-bold text-3xl">
          Track the price of your favorite shoe
        </h1> */}
      </div>
    </>
  );
}

export default Home;
