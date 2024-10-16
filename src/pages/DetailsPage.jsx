import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";

function DetailsPage() {
  const { id } = useParams();
  const { title, description, image, category } = useProductDetails(+id);
  console.log(id);

  return (
    <div>
      <h1>{title}</h1>
      <h3>{category}</h3>
      <p>{description}</p>
      <img src={image} alt="" style={{ width: "100px" }} />
    </div>
  );
}

export default DetailsPage;
