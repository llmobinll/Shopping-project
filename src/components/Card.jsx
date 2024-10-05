import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";

import { Buttons } from "./Buttons";

import { shortedText } from "../helper";

export const Card = ({ data }) => {
  const { id, image, title, price } = data;

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
        <Buttons id={id} data={data} />
      </div>
    </div>
  );
};
