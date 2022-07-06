import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Card from "../components/Card";

export default function Home() {
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
            <Card />
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-7 flex justify-center">
        <Link
          to="/seller/info-product"
          className="flex w-fit items-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white shadow-lg shadow-purple-900/50"
        >
          <FiPlus className="text-xl" />
          <div>Jual</div>
        </Link>
      </div>
    </div>
  );
}
