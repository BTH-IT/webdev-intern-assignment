import Cart from '../Cart';
import { useAppSelector } from '../../redux/hook';
import CardHeader from '../../layouts/CardHeader';
import * as Styled from './styles';

const Carts = () => {
  const cartList = useAppSelector((state) => state.carts.cartList);
  const totalPrice = useAppSelector((state) => state.carts.totalPrice);

  return (
    <Styled.CartsContainer>
      <CardHeader>
        <h2 className='text-2xl font-bold text-[#303841]'>Your cart</h2>
        <h2 className='text-2xl font-bold text-[#303841]'>${totalPrice}</h2>
      </CardHeader>
      <Styled.CartListStyled>
        {cartList.length > 0 ? (
          cartList.map((cart, index) => <Cart key={index} {...cart} />)
        ) : (
          <p className='text-sm opacity-50'>Your cart is empty.</p>
        )}
      </Styled.CartListStyled>
    </Styled.CartsContainer>
  );
};

export default Carts;
