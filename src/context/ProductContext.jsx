import { createContext, useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import api from "../services/config";

import "react-toastify/dist/ReactToastify.css";

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        toast(error.message, { position: "top-center" });
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <ToastContainer />
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id === id);
  return result;
};

export { useProducts, useProductDetails };
