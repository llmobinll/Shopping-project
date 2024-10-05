import { shortedText } from "../helper";
import { Buttons } from "./Buttons";

export const CheckoutCard = ({ data }) => {
  const { image, id, title, quantity } = data;
  return (
    <div>
      <img src={image} alt={image} />
      <p>{shortedText(title)}</p>
      <div>
        <Buttons id={id} data={data} />
      </div>
    </div>
  );
};
