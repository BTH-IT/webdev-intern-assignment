import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductStyled = styled.div`
  padding: 40px 0;
`;

const ProductImage = styled.div<{ background?: string }>`
  border-radius: 30px;
  height: 380px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: rgb(225, 231, 237);

  img {
    display: block;
    width: 100%;
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
    transform: rotate(-24deg);
    margin-left: -16px;
  }
`;

const AddToCart = styled.div<{animation: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  padding:   ${({animation}) => animation ? '12px' : '12px 20px'};
  background-color: var(--Yellow);
  min-width: 46px;
  width: ${({animation}) => animation ? '48px' : 'auto'};
  font-size: 14px;
  font-weight: 700;
  max-height: 46px;
  height: 100%;
  border-radius: 100px;
  transition: all 0.25s linear;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  p {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const Product = () => {
  const [addToCart, setAddToCart] = useState(false);
  return (
    <ProductStyled>
      <ProductImage>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
          alt="image"
        />
      </ProductImage>
      <h3 className="my-5 text-xl font-bold leading-8">
        Nike Air Zoom Pegasus 36
      </h3>
      <p className="text-[#777777b9] leading-5 text-xs mb-5">
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that
        targets breathability across high-heat areas. A slimmer heel collar and
        tongue reduce bulk, while exposed cables give you a snug fit at higher
        speeds.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">$108.97</span>
        <AddToCart
          animation={addToCart}
          onClick={() => {
              setAddToCart(!addToCart);
          }}
        >
          <p>
            {addToCart ? (
              <CartIcon/>
            ) : 
              'Add To Cart'
            }
          </p>
        </AddToCart>
      </div>
    </ProductStyled>
  );
};

export default Product;
