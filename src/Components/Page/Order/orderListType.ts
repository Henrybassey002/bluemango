import type { orderHeaderModel } from "../../../Interfaces";

export default interface OrderListProps {
  isLoading: boolean;
  orderData: orderHeaderModel[];
}
