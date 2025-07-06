import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();
  const {data, isLoading} = 
  return (
    <div>
      <h2>Order Detail</h2>
    </div>
  );
}

export default OrderDetails;
