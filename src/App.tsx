import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Components/Layout";
import {
  AccessDenied,
  AuthenticationTest,
  AuthenticationTestAdmin,
  Home,
  Login,
  MenuItemDetails,
  MyOrders,
  NotFound,
  OrderConfirmed,
  Payment,
  Register,
  ShoppingCart,
} from "./Pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetShoppingCartQuery } from "./Apis/shoppingCartApi";
import { setShoppingCart } from "./Storage/Redux/shoppingCartSlice";
import type { userModel } from "./Interfaces";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "./Storage/Redux/userAuthSlice";
import type { RootState } from "./Storage/Redux/store";

function App() {
  const dispatch = useDispatch();
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const { data, isLoading } = useGetShoppingCartQuery(userData.id);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authentication" element={<AuthenticationTest />} />
          <Route path="/authorization" element={<AuthenticationTestAdmin />} />
          <Route path="/accessDenied" element={<AccessDenied />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/order/orderconfirmed/:id"
            element={<OrderConfirmed />}
          />
          <Route path="/order/myorders" element={<MyOrders />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
