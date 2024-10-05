import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { useProducts } from "../context/ProductContext";

import { Card } from "../components/Card";

import { Loader } from "../components/Loader";

import { SearchBox } from "../components/SearchBox";

import { Sidebar } from "../components/Sidebar";

import "react-toastify/dist/ReactToastify.css";

import { filterProducts, initialQuery, searchProducts } from "../helper";

function ProductsPage() {
  const products = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
    setQuery(initialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
  }, [query]);

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    console.log(finalProducts);
    if (!finalProducts.length && products.length) {
      toast("Not found!", { position: "top-center" });
    } else setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <ToastContainer />
      <SearchBox
        search={search}
        setSearch={setSearch}
        setQuery={setQuery}
        searchParams={searchParams}
      />
      <div className=" flex justify-between   ">
        <div className="flex justify-start flex-wrap w-full gap-10 ">
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card data={p} key={p.id} />
          ))}
        </div>
        <Sidebar setQuery={setQuery} setSearch={setSearch} query={query} />
      </div>
    </>
  );
}

export default ProductsPage;
