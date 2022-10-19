import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../imgs/logo.png";
import nike from "../imgs/nike.png";
import rightArrow from "../imgs/right-arrow.png";

function ProductCard() {
  const navigate = useNavigate();

  const handlerListing = () => {
    navigate("/listings");
  };

  return (
    <div className="content">
      <div className="card-container">
        <div className="card-face face-1">
          <div className="top-part">
            <div className="logo hide">
              <img src={logo} alt="Nike Logo" />
            </div>
            <h2 className="hide">Nike revolution 5</h2>
            <div className="shoe-info">
              <span className="shoe-new hide">New</span>
              <span className="shoe-year hide">2021</span>
            </div>
          </div>

          <div className="bottom-part">
            <h2 className="shoe-price hide">
              <span>$</span>130.00
            </h2>
            <div className="right-arrow hide">
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>

        <div className="card-face face-2">
          <div className="top-part">
            <div className="header">
              <h3 className="heading hide">Epic shoes</h3>
              <span className="wish hide">
                <i className="far fa-heart"></i>
              </span>
            </div>
            <ul className="features hide">
              <li>Smooth & Fast.</li>
              <li>Lightweight & Breathable Support.</li>
              <li>Best For Running.</li>
            </ul>
            <div className="color-wrap hide">
              <span>Color :</span>
              <div className="colors">
                <span className="color blue active"></span>
                <span className="color black"></span>
                <span className="color white"></span>
              </div>
            </div>
          </div>

          <div onClick={handlerListing} className="buy-wrap cursor-pointer">
            <span className="buy hide pointer-events-none">
              Start Browsing{" "}
              <i className="fas fa-shopping-cart pointer-events-none"></i>
            </span>
          </div>
        </div>

        <div className="shoe-image-wrapper">
          <div className="shoe-img">
            <img src={nike} alt="Nike shoe" className="shoe" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
