import './App.css';
import styled from 'styled-components';
import Product from './components/Product';
import Cart from './components/Cart';

const AppContainerStyled = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  padding: 0 20px;
  max-width: 760px;
  margin: 0 auto;

  @keyframes wave {
    0% {
      transform: translateX(-50%) skewY(-8deg);
    }
    100% {
      transform: translateX(-55%) skewY(-8deg);
    }
  }

  &::before {
    content: '';
    display: block;
    position: fixed;
    width: 300%;
    height: 100%;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translateX(-50%) skewY(-8deg);
    background-color: #f6c90e;
    z-index: -1;
    -webkit-animation: wave 4s ease-in-out infinite alternate;
    animation: wave 4s ease-in-out infinite alternate;
  }
`;

function App() {
  return (
    <AppContainerStyled>
      <Product />
      <Cart />
    </AppContainerStyled>
  );
}

export default App;
