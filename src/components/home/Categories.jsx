import axios from "axios";

import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const dataCategories = await axios.get(
        "https://apisecondhand.herokuapp.com/api/categories",
      );
      setCategories(await dataCategories.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="absolute -mt-32 w-11/12 space-y-4 md:relative md:z-0 md:mt-0 md:w-full">
      <div className="font-bold">Telusuri Kategori</div>
      <div className="flex space-x-4 overflow-auto">
        <button
          type="button"
          className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3 focus:bg-purple-900 focus:text-white"
        >
          <FiSearch className="text-xl" />
          <div>Semua</div>
        </button>
        {categories.map((category) => (
          <button
            type="button"
            className="flex items-center space-x-2 rounded-xl bg-purple-200 px-6 py-3 focus:bg-purple-900 focus:text-white"
          >
            <FiSearch className="text-xl" />
            <div>{category.categoryName}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
