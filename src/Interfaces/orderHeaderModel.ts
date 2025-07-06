import type orderDetail from "./orderDetailModel";

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
