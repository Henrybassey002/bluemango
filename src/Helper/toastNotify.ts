import type { TypeOptions } from "react-toastify";
import { toast, Bounce } from "react-toastify";

const toastNotify = (message: string, type: TypeOptions = "success") => {
  toast(message, {
    type: type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export default toastNotify;
