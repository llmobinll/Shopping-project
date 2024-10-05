import { TbShoppingBagCheck } from "react-icons/tb";

import { MdDeleteOutline } from "react-icons/md";

import { useCart } from "../context/CartContext";

import { productQuantity } from "../helper";

export const Buttons = ({ id, data }) => {
  const [state, dispatch] = useCart();

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  const quantity = productQuantity(state, id);

  return (
    <div className="flex justify-center items-center ">
      {quantity === 1 && (
        <button
          onClick={() => clickHandler("REMOVE_ITEM")}
          className="bg-[#fe5d42] mr-2 text-white border-none rounded-lg text-[1.7rem] h-8 w-8 leading-8 p-0.5"
        >
          <MdDeleteOutline />
        </button>
      )}

      {quantity > 1 && (
        <button
          onClick={() => clickHandler("DECREASE")}
          className="bg-[#fe5d42] mr-2   text-white border-none rounded-lg text-[1.7rem] h-8 w-8 leading-8 p-0.5 flex items-center justify-center"
        >
          -
        </button>
      )}
      <span>{!!quantity && quantity}</span>
      {quantity === 0 ? (
        <button
          onClick={() => clickHandler("ADD_ITEM")}
          className="bg-[#fe5d42] text-white border-none rounded-lg text-[1.7rem] h-8 w-8 leading-8 p-0.5 items-center"
        >
          <TbShoppingBagCheck />
        </button>
      ) : (
        <button
          onClick={() => clickHandler("INCREASE")}
          className="bg-[#fe5d42] ml-2 text-white border-none rounded-lg text-[1.7rem] h-8 w-8 leading-8 p-0.5 flex items-center justify-center"
        >
          +
        </button>
      )}
    </div>
  );
};
