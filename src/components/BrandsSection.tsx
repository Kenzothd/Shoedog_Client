import React from "react";

function BrandsSection() {
  const brands = [
    {
      brand: "Nike",
      img: "https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg",
    },
    {
      brand: "Adidas",
      img: "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
    },
    {
      brand: "Puma",
      img: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg",
    },
    {
      brand: "New Balance",
      img: "https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo-1972-2006.png",
    },
    {
      brand: "Supreme",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Logo.svg/2560px-Supreme_Logo.svg.png",
    },
    {
      brand: "Vans",
      img: "https://www.thesun.co.uk/wp-content/uploads/2022/10/c103a01e-15d5-43b5-9ae6-dce6527bf45f.jpg",
    },
    {
      brand: "Converse",
      img: "https://1000logos.net/wp-content/uploads/2016/12/Converse-Logo-2007.png",
    },
    {
      brand: "Reebok",
      img: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/Reebokdelta-20140303113357992.jpg",
    },
    {
      brand: "Asics",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/2560px-Asics_Logo.svg.png",
    },
    {
      brand: "Onitsuka Tiger",
      img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Onitsuka_Tiger_logo.png",
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-between font-semibold pb-2 border-b">
          <div className=" text-3xl">All Brands</div>
          <button className="border border-black rounded px-2 py-1 text-lg text-black transition ease-in-out hover:scale-105">
            View More
          </button>
        </div>
        <div className="grid grid-cols-5 mt-10 gap-5">
          {brands.map((e) => (
            <div
              className="border-2 rounded transition ease-in-out hover:scale-105 cursor-pointer drop-shadow-lg "
              key={e.brand}
            >
              <img
                className="w-full h-28 rounded-t bg-white"
                src={e.img}
                alt="shoe"
              />
              <div className="text-xl font-semibold text-center border-t bg-white">
                {e.brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandsSection;
