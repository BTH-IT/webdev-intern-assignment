import React from 'react';
import styled from 'styled-components';

const CornerStyled = styled.div`
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

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CornerStyled />
      <div className='relative !z-10'>
        <div className='max-w-[50px] max-h-[26px] w-full h-full my-3'>
          <img
            src='/nike.png'
            alt='Logo'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex justify-between gap-2 my-5'>{children}</div>
      </div>
    </>
  );
};

export default CardHeader;
