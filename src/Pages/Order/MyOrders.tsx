import { withAuth } from "../../HOC";
import { useSelector } from "react-redux";
import type { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";

function MyOrders() {
  const userId = useSelector((state: RootState) => state.userAuthStore.id);
  const { data, isLoading } = useGetAllOrdersQuery({ userId });
  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <>
          <div className="d-flex align-items-center justify-content-between mt-5 mx-5">
            <h1 className="text-success">My Orders</h1>
          </div>
          <OrderList
            isLoading={isLoading}
            orderData={data?.apiResponse.result}
          />
        </>
      )}
    </>
  );
}

export default withAuth(MyOrders);
