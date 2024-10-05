import { useCart } from "../context/CartContext";

import { CheckoutCard } from "./CheckoutCard";

export const CheckoutDetails = () => {
  const [{ selectedItems }, dispatch] = useCart();
  return (
    <div>
      {selectedItems.map((product) => (
        <CheckoutCard key={product.id} data={product} />
      ))}
    </div>
  );
};
