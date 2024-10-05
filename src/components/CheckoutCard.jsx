import { Buttons } from "./Buttons";

import { shortedText } from "../helper";

export const CheckoutCard = ({ data }) => {
  const { image, id, title } = data;
  return (
    <div className="flex justify-between items-center border-2 border-dashed border-[#fe5d42] p-4  w-[800px] mb-7 rounded-2xl bg-white">
      <img src={image} alt={image} className="w-[80px]" />
      <p className="font-semibold">{shortedText(title)}</p>
      <div>
        <Buttons id={id} data={data} />
      </div>
    </div>
  );
};
