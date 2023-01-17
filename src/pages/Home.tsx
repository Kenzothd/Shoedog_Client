import React from "react";
import BrandsSection from "../components/BrandsSection";
import Carousel from "../components/Carousel";
import FeaturedSection from "../components/FeaturedSection";
import ProductCard from "../components/ProductCard";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <Carousel />
      <div className="home flex flex-col gap-20 pb-20">
        <FeaturedSection />
        <Trending />
        <BrandsSection />
        {/* <ProductCard />
        <h1 className="font-bold text-3xl">
          Track the price of your favorite shoe
        </h1> */}
      </div>
    </>
  );
}

export default Home;
