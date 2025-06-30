export default interface orderHeaderModel {
  orderHeader?: number;
  pickupName?: string;
  pickupPhoneNumber?: string;
  pickupEmail?: string;
  applicationUserId?: string;
  user?: string | number | boolean;
  orderTotal: number;
  orderDate?: Date;
  stripePaymentintentID?: string;
  status?: SD_Status;
  totalItems?: number;
  orderDetails?: orderDetail[];
}
