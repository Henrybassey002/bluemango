import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Components/Layout";
import { Home, MenuItemDetails, NotFound, ShoppingCart } from "./Pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetShoppingCartQuery } from "./Apis/shoppingCartApi";
import { setShoppingCart } from "./Storage/Redux/shoppingCartSlice";

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    "b7ae37bf-09b1-4b47-9ce1-c963631d2920"
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
