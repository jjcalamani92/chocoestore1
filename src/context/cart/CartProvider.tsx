import React, { FC } from "react";
import { useReducer } from "react";
import { ICart } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
	cart: ICart[];
}

const CART_INITIAL_STATE: CartState = {
	cart: []
};

export const CartProvider:FC = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


	return (
		<CartContext.Provider
			value={{
				...state}}
		>
			{children}
		</CartContext.Provider>
	);
};
