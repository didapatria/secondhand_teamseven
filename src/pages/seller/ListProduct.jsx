import axios from "axios";

import { useEffect, useState } from "react";
import {
  FiBox,
  FiChevronRight,
  FiDollarSign,
  FiHeart,
  FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import userService from "../../services/user.service";
import Pagination from "../../components/pagination/Pagination";
import authHeader from "../../services/auth-header";

export default function ListProductPage() {
  const title = "Daftar Jual Saya";

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const page = currentPage - 1;

  useEffect(() => {
    userService.getUserBoard().then((response) => {
      setUser(response.data.data);
    });
  }, []);

  const getProducts = async () => {
    try {
      const dataProducts = await axios.get(
        `https://apisecondhand.herokuapp.com/api/products/seller?page=${page}&size=${productsPerPage}`,
        { headers: authHeader() },
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
    <div>
      <div className="mx-auto w-11/12">
        <StatusBar />
      </div>
      <Navbar isList title={title} />
      <div className="flex justify-center md:mt-10">
        <div className="w-11/12 space-y-8 md:w-8/12">
          <div className="hidden text-xl font-bold md:block">{title}</div>
          <div className="w-full rounded-2xl p-5 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <img
                  src="../assets/images/seller_profile.png"
                  alt=""
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <div>
                  <div className="font-medium">{user.fullName}</div>
                  <div className="text-gray-400">
                    {user.city ? user.city : "kota"}
                  </div>
                </div>
              </div>
              <Link
                to="/info-profile"
                className="h-fit rounded-2xl border border-purple-900 px-3 py-1"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="w-full space-y-6 md:flex md:space-x-8 md:space-y-0">
            <div className="h-fit space-y-6 rounded-2xl md:w-1/5 md:p-5 md:shadow-md">
              <div className="hidden md:block">Kategori</div>
              <div className="flex space-x-4 overflow-auto md:block md:space-x-0 md:divide-y">
                <div className="flex items-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white md:space-x-4 md:rounded-none md:bg-transparent md:px-0 md:py-2 md:font-medium md:text-purple-900">
                  <FiBox className="text-xl md:text-2xl" />
                  <div className="hidden w-10/12 md:block">Semua Produk</div>
                  <div className="w-10/12 md:hidden">Produk</div>
                  <FiChevronRight className="hidden md:block" />
                </div>
                <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3 md:space-x-4 md:rounded-none md:bg-transparent md:px-0 md:py-2 md:font-medium">
                  <FiHeart className="text-xl md:text-2xl" />
                  <div className="md:w-10/12">Diminati</div>
                  <FiChevronRight className="hidden md:block" />
                </div>
                <div className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3 md:space-x-4 md:rounded-none md:bg-transparent md:px-0 md:py-2 md:font-medium">
                  <FiDollarSign className="text-xl md:text-2xl" />
                  <div className="md:w-10/12">Terjual</div>
                  <FiChevronRight className="hidden md:block" />
                </div>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              <Link
                to="/seller/info-product"
                className="flex items-center justify-center rounded border border-dashed border-slate-300 p-5 shadow-md"
              >
                <div className="w-full">
                  <div className="flex justify-center text-3xl font-bold">
                    <FiPlus />
                  </div>
                  <div className="flex justify-center">Tambah Produk</div>
                </div>
              </Link>
              {products.map((data) => (
                <Link to={`/seller/preview-product/${data.id}`}>
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
          {products[0]?.id ? (
            <Pagination
              isSeller
              productsPerPage={productsPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
