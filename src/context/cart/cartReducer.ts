import { ICart } from "../../interfaces";
import { CartState } from "./";

type CartActionType = 
  | { type: "[CART] - LoadCart from cookies | storage", payload: ICart[] }
  | { type: "[CART] - Add Product", payload: ICart }
   

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
	switch (action.type) {
		case "[CART] - LoadCart from cookies | storage":
			return {
				...state,
			};

		default:
			return state;
	}
};
