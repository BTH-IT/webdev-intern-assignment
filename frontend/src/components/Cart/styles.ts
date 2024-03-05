import styled from 'styled-components';

export const CartStyled = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const CartImage = styled.div<{ background?: string }>`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  margin-right: 34px;
  background-color: ${({ background }) =>
    background ? background : 'rgb(225, 231, 237)'};
  flex-shrink: 0;
  animation: zoomIn 0.5s ease-in-out alternate;

  img {
    display: block;
    width: 140%;
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
    transform: rotate(-28deg) translateY(-40px) translateX(16px);
    margin-left: -16px;
    max-width: 140%;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;

  h2 {
    animation: fadeRightToLeft 0.7s ease-in-out;
  }

  & > span {
    animation: fadeRightToLeft 0.9s ease-in-out;
  }
`;

export const CartAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  animation: fade 0.9s ease-in-out;
`;
