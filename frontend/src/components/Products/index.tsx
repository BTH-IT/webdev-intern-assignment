import React from 'react';
import styled from 'styled-components';
import { CornerStyled } from '../Carts';
import Product from '../Product';

const ProductsContainer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  width: 340px;
  height: 600px;
  box-shadow: 0 3.2px 2.2px rgba(0, 0, 0, 0.02),
    0 7px 5.4px rgba(0, 0, 0, 0.028), 0 12.1px 10.1px rgba(0, 0, 0, 0.035),
    0 19.8px 18.1px rgba(0, 0, 0, 0.042), 0 34.7px 33.8px rgba(0, 0, 0, 0.05),
    0 81px 81px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  overflow: hidden;
  padding: 0 28px;
  position: relative;
  margin-bottom: 20px;
`;

const ProductListStyled = styled.div`
  position: relative;
  height: calc(100% - 98px);
  overflow: scroll;
  z-index: 10;
  -ms-overflow-style: none; /* khai báo sử dụng Internet Explorer, Edge */
  scrollbar-width: none; /* sử dụng Firefox */
  overflow-y: scroll;


  & div:first-child {
    padding-top: 0px;
  }
`

const Products = () => {
  return (
    <ProductsContainer>
      <CornerStyled />
      <div className='relative !z-10'>
        <div className='max-w-[50px] max-h-[26px] w-full h-full my-3'>
          <img
            src='/nike.png'
            alt='Logo'
            className='object-cover w-full h-full'
          />
        </div>
        <h2 className='text-2xl font-bold text-[#303841] my-5'>
          Our Products
        </h2>
      </div>
      <ProductListStyled>
          <Product/> 
          <Product/> 
          <Product/> 
          <Product/> 
          <Product/> 
        </ProductListStyled>
    </ProductsContainer>
  );
};

export default Products;
