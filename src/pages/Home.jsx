import { FiPlus } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="space-y-10">
        <div className="mt-0 md:mt-8">
          <Carousel />
        </div>
        <div className="w-11/12 md:container mx-auto">
          <Categories />
        </div>
        <div className="w-11/12 md:container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <Card />
          </div>
        </div>
      </div>
      <div className="fixed flex justify-center inset-x-1/2 bottom-7">
        <div className="w-fit flex items-center bg-purple-900 text-white shadow-lg shadow-purple-900/50 rounded-xl px-6 py-3 space-x-2">
          <FiPlus className="text-xl" />
          <div>Jual</div>
        </div>
      </div>
    </div>
  );
}
