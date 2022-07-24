import axios from "axios";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Card from "../components/Card";
import Pagination from "../components/pagination/Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const page = currentPage - 1;

  const getProducts = async () => {
    try {
      const dataProducts = await axios.get(
        `https://apisecondhand.herokuapp.com/api/products?page=${page}&size=${productsPerPage}`,
      );
      setProducts(await dataProducts.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <div className="">
      <Navbar isHome />
      <div className="space-y-8 md:space-y-10">
        <div className="relative mt-0 md:mt-8">
          <Carousel />
        </div>
        <div className="mx-auto w-11/12 md:container">
          <Categories />
        </div>
        <div className="mx-auto w-11/12 md:container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {products.map((data) => (
              <Link to={`/buyer/preview-product/${data.id}`} type="submit">
                <Card
                  name={data.name}
                  category={data.category.categoryName}
                  price={data.price}
                  id={data.id}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto w-11/12 md:container">
          <Pagination
            productsPerPage={productsPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-7 flex justify-center">
        <Link
          to="/seller/info-product"
          className="flex w-fit items-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white shadow-lg shadow-purple-900/50 hover:bg-white hover:text-purple-900"
        >
          <FiPlus className="text-xl" />
          <div>Jual</div>
        </Link>
      </div>
    </div>
  );
}
