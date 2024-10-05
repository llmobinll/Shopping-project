import { useCart } from "../context/CartContext";

import { Buttons } from "./Buttons";

import { shortedText } from "../helper";

export const CheckoutDetails = () => {
  const [{ selectedItems }, dispatch] = useCart();
  return (
    <div>
      {selectedItems.map(({ id, title, image }) => (
        <ul
          key={id}
          className="flex justify-between items-center mb-8 bg-[#fff] border-2 border-dashed border-[#fd5e42] rounded-[20px] h-fit  w-[900px] p-4"
        >
          <img src={image} alt="" className="w-[50px]" />
          <p className="font-semibold">{shortedText(title)}</p>

          <Buttons id={id} />
        </ul>
      ))}
    </div>
  );
};
