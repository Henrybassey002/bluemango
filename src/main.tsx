import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Storage";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
