import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '../../types/cart';

interface CartState {
  cartList: ICart[];
  totalPrice: number;
}

const initialState: CartState = {
  cartList: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    increase(state, action: PayloadAction<{ cartId: number }>) {
      state.totalPrice = 0;
      state.cartList = state.cartList.map((cart) => {
        if (cart.id === action.payload.cartId) {
          state.totalPrice += parseFloat(
            Number(++cart.count * cart.price).toFixed(2)
          );
          return cart;
        }

        state.totalPrice += parseFloat(
          Number(cart.count * cart.price).toFixed(2)
        );
        return cart;
      });

      state.totalPrice = parseFloat(Number(state.totalPrice).toFixed(2));
    },
    decrease(state, action: PayloadAction<{ cartId: number }>) {
      state.totalPrice = 0;

      state.cartList = state.cartList.map((cart) => {
        if (cart.id === action.payload.cartId && cart.count >= 2) {
          state.totalPrice += parseFloat(
            Number(--cart.count * cart.price).toFixed(2)
          );
          return cart;
        }
        state.totalPrice += parseFloat(
          Number(cart.count * cart.price).toFixed(2)
        );
        return cart;
      });

      state.totalPrice = parseFloat(Number(state.totalPrice).toFixed(2));
    },
    addCart(state, action: PayloadAction<Omit<ICart, 'count'>>) {
      state.totalPrice += parseFloat(Number(action.payload.price).toFixed(2));
      state.cartList = [
        ...state.cartList,
        {
          ...action.payload,
          count: 1,
        },
      ];

      state.totalPrice = parseFloat(Number(state.totalPrice).toFixed(2));
    },
    deleteCart(state, action: PayloadAction<{ cartId: number }>) {
      state.cartList = state.cartList.filter((cart) => {
        if (cart.id === action.payload.cartId) {
          state.totalPrice -= parseFloat(
            Number(cart.count * cart.price).toFixed(2)
          );
        }
        return cart.id !== action.payload.cartId;
      });

      state.totalPrice = parseFloat(Number(state.totalPrice).toFixed(2));
    },
    setCart(state, action: PayloadAction<ICart[]>) {
      state.cartList = [...action.payload];
      state.totalPrice = state.cartList.reduce(
        (pre, curr) =>
          pre + parseFloat(Number(curr.count * curr.price).toFixed(2)),
        0
      );
    },
  },
});

export const {
  increase,
  decrease,
  addCart,
  deleteCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
