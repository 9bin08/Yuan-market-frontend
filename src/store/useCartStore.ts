import { itemsType } from './useSearchCategory';
import { withSelector } from './middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';


type cartState = {
  cartItems: itemsType[];
};

interface cartAction {
  addToCart: (item: itemsType) => void;
  removeFromCart: (itemTitle: string) => void;
  clearCart: () => void;
}

const cartStore = () => ({
  cartItems: [],
});

export const useCartStore = create(persist(devtools<cartState>(cartStore, { name: 'cartStore' }), { name: 'cart' }));

export const useCartAction = (): cartAction => ({
  addToCart: (item) => {
    useCartStore.setState((prevState) => {
        const updatedCartItems = [...prevState.cartItems];
        updatedCartItems.push({ ...item });


      return { cartItems: updatedCartItems };
    });
  },
  removeFromCart: (itemTitle) => {
    useCartStore.setState((prevState) => {
      const updatedCartItems = prevState.cartItems.filter((cartItem) => cartItem.title !== itemTitle);
      return { cartItems: updatedCartItems };
    });
  },
  clearCart: () => {
    useCartStore.setState({ cartItems: [] });
  },
});

export const useCartSelector = withSelector(useCartStore);
