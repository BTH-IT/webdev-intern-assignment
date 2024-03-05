import { CartMinus, CartPlus, CartTrash } from '../../utils/icons';
import { ICart } from '../../types/cart';
import { useAppDispatch } from '../../redux/hook';
import {
  decrease,
  deleteCart,
  increase,
} from '../../redux/features/cart-slice';
import { useRef } from 'react';
import * as Styled from './styles';

const Cart = ({ color, count, id, image, name, price }: ICart) => {
  const dispatch = useAppDispatch();
  const cartRef = useRef<HTMLDivElement | null>(null);

  const handleRemove = () => {
    if (cartRef.current) {
      cartRef.current.classList.add('zoomOut');
    }

    setTimeout(() => {
      dispatch(deleteCart({ cartId: id }));
      cartRef.current?.classList.remove('zoomOut');
    }, 500);
  };

  const handleMinus = () => {
    if (count === 1) {
      handleRemove();
      return;
    }

    dispatch(decrease({ cartId: id }));
  };

  const handlePlus = () => {
    dispatch(increase({ cartId: id }));
  };

  return (
    <Styled.CartStyled ref={cartRef}>
      <Styled.CartImage background={color}>
        <img src={image} alt={name} />
      </Styled.CartImage>
      <Styled.CartInfo>
        <h2 className='text-[#303841] font-bold text-xs'>{name}</h2>
        <span className='text-[#303841] font-bold text-xl'>${price}</span>
        <Styled.CartAction>
          <div className='flex items-center justify-between gap-3'>
            <CartMinus
              onClick={handleMinus}
              className='flex items-center justify-center p-2 text-lg font-bold transition duration-200 bg-gray-300 rounded-full cursor-pointer select-none'
            />
            <span className='text-gray-400'>{count}</span>
            <CartPlus
              onClick={handlePlus}
              className='flex items-center justify-center p-2 text-lg font-bold transition duration-200 bg-gray-300 rounded-full cursor-pointer select-none'
            />
          </div>
          <CartTrash
            onClick={handleRemove}
            className='flex items-center justify-center p-2 text-lg font-bold transition duration-200 rounded-full cursor-pointer select-none bg-Yellow'
          />
        </Styled.CartAction>
      </Styled.CartInfo>
    </Styled.CartStyled>
  );
};

export default Cart;
