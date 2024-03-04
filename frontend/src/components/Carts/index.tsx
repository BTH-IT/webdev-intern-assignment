import React from 'react';
import styled from 'styled-components';

const CartsContainer = styled.div`
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

export const CornerStyled = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: var(--Yellow);
    top: -20%;
    left: -50%;
    z-index: 0;
  }
`;

const Carts = () => {
  return (
    <CartsContainer>
      <CornerStyled />
      <div className='relative !z-10 max-w-[50px] max-h-[26px] w-full h-full my-3'>
        <img
          src='/nike.png'
          alt='Logo'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex justify-between gap-2 relative !z-10'>
        <h2 className=' text-2xl font-bold text-[#303841]'>Your cart</h2>
        <h2 className=' text-2xl font-bold text-[#303841]'>$100.12</h2>
      </div>
    </CartsContainer>
  );
};

export default Carts;
