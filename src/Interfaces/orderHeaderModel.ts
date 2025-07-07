import type orderDetail from "./orderDetailModel";
import { SD_Status } from "../Utility/SD";

export default interface orderHeader {
  orderHeaderId?: number;
  pickupName?: string;
  pickupPhoneNumber?: string;
  pickupEmail?: string;
  applicationUserId?: string;
  user?: any;
  orderTotal?: number;
  orderDate?: Date;
  stripePaymentintentID?: string;
  status?: SD_Status;
  totalItems?: number;
  orderDetails?: orderDetail[];
}
