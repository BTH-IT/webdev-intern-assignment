import { useLayoutEffect, useState } from 'react';
import { IShoe } from '../../types/shoe';
import { CartIcon } from '../../utils/icons';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addCart } from '../../redux/features/cart-slice';
import * as Styled from './styles';

const Product = ({ id, color, description, image, name, price }: IShoe) => {
  const [addToCart, setAddToCart] = useState(false);
  const cartList = useAppSelector((state) => state.carts.cartList);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    setAddToCart(cartList.findIndex((cart) => cart.id === id) > -1);
  }, [cartList, id]);

  const handleAddToCart = () => {
    if (addToCart) return;
    dispatch(addCart({ id, color, description, image, name, price }));
  };

  return (
    <Styled.ProductStyled>
      <Styled.ProductImage background={color}>
        <img src={image} alt={name} />
      </Styled.ProductImage>
      <h3 className='my-5 text-xl font-bold leading-8'>{name}</h3>
      <p className='text-[#777777b9] leading-5 text-xs mb-5'>{description}</p>
      <div className='flex items-center justify-between min-h-[46px]'>
        <span className='text-xl font-bold'>${price}</span>
        <Styled.AddToCart animation={addToCart} onClick={handleAddToCart}>
          <p>{addToCart ? <CartIcon /> : 'Add To Cart'}</p>
        </Styled.AddToCart>
      </div>
    </Styled.ProductStyled>
  );
};

export default Product;
