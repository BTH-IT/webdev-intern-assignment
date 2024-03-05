import { useLayoutEffect, useState } from 'react';
import Product from '../Product';
import { IShoe } from '../../types/shoe';
import shoeService from '../../services/shoeService';
import CardHeader from '../../layouts/CardHeader';
import * as Styled from './styles';

const Products = () => {
  const [productList, setProductList] = useState<IShoe[]>([]);

  useLayoutEffect(() => {
    async function fetchShoes() {
      try {
        const { data } = await shoeService.getAll();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchShoes();
  }, []);

  return (
    <Styled.ProductsContainer>
      <CardHeader>
        <h2 className='text-2xl font-bold text-[#303841]'>Our Products</h2>
      </CardHeader>
      <Styled.ProductListStyled>
        {productList.length > 0 &&
          productList.map((product, index) => (
            <Product key={index} {...product} />
          ))}
      </Styled.ProductListStyled>
    </Styled.ProductsContainer>
  );
};

export default Products;
