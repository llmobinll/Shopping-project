import { useCart } from "../context/CartContext";

export const CheckoutDetails = () => {
  const [{ selectedItems }, dispatch] = useCart();
  console.log(selectedItems);
  return (
    <div>
      {selectedItems.map((item) => (
        <ul
          key={item.id}
          className="flex justify-between items-center mb-8 bg-[#fff] border-2 border-dashed border-[#fd5e42] rounded-[20px] h-fit  w-[900px] p-4"
        >
          <img src={item.image} alt="" className="w-[50px]" />
          <p className="font-semibold">{item.title}</p>
          <span>{item.quantity}</span>
        </ul>
      ))}
    </div>
  );
};
