import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";

import { TbShoppingBagCheck } from "react-icons/tb";

import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortedText } from "../helper";

import { useCart } from "../context/CartContext";

export const Card = ({ data }) => {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);
  console.log(quantity);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className="w-270 m-2.5 p-5 flex flex-col items-start justify-end bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl ">
      <img
        src={image}
        alt={title}
        className="w-230 h-230 p-5 mb-5 bg-slate-50"
      />
      <h3 className="text-[#fe5d42] text-lg ">{shortedText(title)}</h3>
      <p className="text-[#666] text-[0.9rem] font-semibold mt-2.5 mb-[30px]">
        {price} $
      </p>
      <div className="w-full flex justify-between items-center ">
        <Link
          to={`/products/${id}`}
          className="text-2xl h-[25px] text-[#fe5d42] cursor-pointer "
        >
          <TbListDetails />
        </Link>
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
      </div>
    </div>
  );
};
