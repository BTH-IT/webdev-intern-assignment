import styled from 'styled-components';

export const ProductStyled = styled.div`
  padding-top: 40px;
  padding-bottom: 100px;
`;

export const ProductImage = styled.div<{ background?: string }>`
  border-radius: 30px;
  height: 380px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${({ background }) =>
    background ? background : 'rgb(225, 231, 237)'};

  img {
    display: block;
    width: 100%;
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
    transform: rotate(-24deg);
    margin-left: -16px;
  }
`;

export const AddToCart = styled.div<{ animation: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--Yellow);
  min-width: 46px;
  font-size: 14px;
  font-weight: 700;
  max-height: 46px;
  height: 100%;
  border-radius: 100px;
  transition: all 0.25s linear;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  padding: ${({ animation }) => (animation ? '12px' : '12px 20px')};
  width: ${({ animation }) => (animation ? '48px' : 'auto')};
  cursor: ${({ animation }) => (animation ? 'default' : 'pointer')};

  p {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
