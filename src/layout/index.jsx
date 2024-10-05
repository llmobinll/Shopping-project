import { Link } from "react-router-dom";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { useCart } from "../context/CartContext";

export const Layout = ({ children }) => {
  const [state, dispatch] = useCart();
  const { itemsCounter } = state;
  return (
    <div>
      <header className="bg-[#fe5d42] rounded-3xl text-[#fff]  font-semibold flex justify-between items-center mt-9 h-16 ">
        <Link className="ml-5 text-3xl" to="/products">
          Shopping
        </Link>
        <Link to="/checkout">
          <div className="flex justify-between items-center mr-5 text-[28px] bg-[#fff] text-center text-[#fe5d42] h-9 w-9 rounded-lg p-0.5 relative">
            <PiShoppingCartSimpleBold />
            <span className="text-base w-5 h-5 leading-5 bg-black text-[#fff] rounded-[50%] absolute -top-3 -right-2.5 ">
              {itemsCounter}
            </span>
          </div>
        </Link>
      </header>
      {children}
    </div>
  );
};
