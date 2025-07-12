import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Components/Layout";
import {
  AccessDenied,
  AllOrders,
  AuthenticationTest,
  AuthenticationTestAdmin,
  Home,
  Login,
  MenuItemDetails,
  MenuItemList,
  MenuItemUpsert,
  MyOrders,
  NotFound,
  OrderConfirmed,
  OrderDetails,
  Payment,
  Register,
  ShoppingCart,
} from "./Pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetShoppingCartQuery } from "./Apis/shoppingCartApi";
import { setShoppingCart } from "./Storage/Redux/shoppingCartSlice";
import type { userModel } from "./Interfaces";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "./Storage/Redux/userAuthSlice";
import type { RootState } from "./Storage/Redux/store";

function App() {
  const dispatch = useDispatch();
  //const [skip, setSkip] = useState(true);
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const { data, isLoading } = useGetShoppingCartQuery(userData.id, {
    //skip: skip,
  });

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

  // useEffect(() => {
  //   if (userData.id) setSkip(false);
  // }, [userData]);

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
          <Route path="/order/orderDetails/:id" element={<OrderDetails />} />
          <Route path="/order/allOrders" element={<AllOrders />} />
          <Route path="/menuitem/menuitemlist" element={<MenuItemList />} />
          <Route
            path="/menuitem/menuItemUpsert/:id"
            element={<MenuItemUpsert />}
          />
          <Route path="/menuitem/menuItemUpsert" element={<MenuItemUpsert />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
