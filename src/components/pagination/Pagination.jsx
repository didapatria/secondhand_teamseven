import axios from "axios";
import { useEffect, useState } from "react";

export default function Pagination({
  productsPerPage,
  paginate,
  currentPage,
  isSeller,
}) {
  const [products, setProducts] = useState([]);
  const [size] = useState(9999);
  const pageNumbers = [];
  const totalProduct = products.length;

  const getProducts = async () => {
    try {
      const page = 0;
      const dataProducts = await axios.get(
        `https://apisecondhand.herokuapp.com/api/products?page=${page}&size=${size}`,
      );
      setProducts(await dataProducts.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">
            {" "}
            {currentPage * productsPerPage - (isSeller ? 7 : 11)}{" "}
          </span>
          to
          <span className="font-medium">
            {" "}
            {currentPage * productsPerPage > totalProduct
              ? totalProduct
              : currentPage * productsPerPage}{" "}
          </span>
          of
          <span className="font-medium"> {totalProduct} </span>
          results
        </p>
      </div>
      <nav className="block">
        <ul className="flex list-none flex-wrap rounded pl-0">
          <li>
            {pageNumbers.map((page) => (
              <button
                type="button"
                onClick={() => {
                  paginate(page);
                }}
                className={
                  currentPage === page
                    ? "bg-blue relative inline-flex items-center border border-purple-300 px-4 py-2 text-sm font-medium text-purple-500 hover:bg-blue-200"
                    : "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-200"
                }
              >
                {page}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
