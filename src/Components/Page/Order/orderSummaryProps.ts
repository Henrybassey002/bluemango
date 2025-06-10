import type { cartItemModel } from "../../../Interfaces";

export interface orderSummaryProps {
  data: {
    id: number;
    cartItem: cartItemModel;
    cartTotal: number;
  };
  userInput: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}
