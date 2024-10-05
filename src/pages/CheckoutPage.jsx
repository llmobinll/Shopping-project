import { CheckoutDetails } from "../components/CheckoutDetails";
import { CheckoutStatus } from "../components/CheckoutStatus";

function CheckoutPage() {
  return (
    <div className="flex gap-28 mt-24">
      <CheckoutStatus />
      <CheckoutDetails />
    </div>
  );
}

export default CheckoutPage;
