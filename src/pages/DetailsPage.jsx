import { Link, useParams } from "react-router-dom";

import { SiOpenproject } from "react-icons/si";

import { IoMdPricetag } from "react-icons/io";

import { FaArrowLeft } from "react-icons/fa6";

import { useProductDetails } from "../context/ProductContext";
import { Loader } from "../components/Loader";

function DetailsPage() {
  const { id } = useParams();
  const product = useProductDetails(+id);
  if (!product) return <Loader />;

  return (
    <div className="flex justify-center items-center mt-24 h-full ">
      <img
        src={product.image}
        alt={product.image}
        className="w-[250px] h-[300px] bg-white py-[25px] px-[15px] border-2 border-dashed border-[#fe5d42] rounded-[50px]"
      />
      <div className="w-full border-2 border-dashed border-[#e2e2e2] m-2.5 p-[30px] rounded-[50px] bg-white relative">
        <h3 className="text-[#fe5d42] text-2xl mb-10 font-bold">
          {product.title}
        </h3>
        <p className="text-gray-600 w-[500px]">{product.description}</p>

        <div className="flex justify-between mt-8">
          <span className="flex items-center gap-1 font-semibold ">
            <IoMdPricetag className="text-[#fe5d42] text-xl" />
            {product.price} $
          </span>
          <Link
            to="/products"
            className="flex items-center gap-2 font-semibold bg-[#fe5d42] rounded-[20px] text-white p-2 "
          >
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
