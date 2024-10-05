import { useState } from "react";

import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";

import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";

export const CheckoutStatus = () => {
  const [state, dispatch] = useCart();
  const { total, itemsCounter, checkout } = state;
  const [checkoutButton, setCheckoutButton] = useState(checkout);

  const checkoutHandler = () => {
    if (!!itemsCounter) {
      setCheckoutButton(!checkoutButton);
    } else {
      toast("Your shopping cart is empty!", { position: "top-center" });
    }
  };

  return (
    <div className="bg-[#fff] border-2 border-dashed border-[#fd5e42] rounded-[20px] h-fit  w-[200px] p-4 ">
      <ToastContainer />

      <div className="flex items-center mb-3 text-[#fe5d42] text-lg">
        <TbChecklist />
        <p className=" font-bold">Total: </p>
        <span className="text-slate-500 pl-1 "> {total} $</span>
      </div>
      <div className="flex items-center mb-3 text-[#fe5d42] text-lg">
        <FaHashtag />
        <p className="font-bold">Quantity: </p>
        <span className="text-slate-500 pl-1">{itemsCounter}</span>
      </div>
      <div className="flex items-center mb-3 text-[#fe5d42] text-lg">
        <LuCheckCircle />
        <p className="font-bold">Status: </p>
        <span className="text-slate-500 pl-1 ">
          {!checkoutButton ? "Pending..." : "Paid"}
        </span>
      </div>
      <button
        onClick={checkoutHandler}
        disabled={checkoutButton}
        className="bg-[#fe5d42] text-white rounded-[20px] w-full py-1 mt-16 font-semibold"
      >
        {!checkoutButton ? "Checkout" : "Done!"}
      </button>
    </div>
  );
};
