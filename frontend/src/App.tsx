import './App.css';
import styled from 'styled-components';
import Products from './components/Products';
import Carts from './components/Carts';

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

  @media screen and (max-width: 726px) {
    max-width: 380px;
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
      <Products />
      <Carts />
    </AppContainerStyled>
  );
}

export default App;
