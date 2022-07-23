import axios from "axios";

import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";

export default function ProductPage() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);
  const [categories, setCategories] = useState([]);

  const getDetail = async () => {
    try {
      const dataDetail = await axios.get(
        `https://apisecondhand.herokuapp.com/api/product/${id}/detail`,
      );
      setDetail(await dataDetail.data.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    getDetail();
    getCategories();
  }, []);

  const filterCategories = categories?.filter(
    (data) => data.id === detail?.categoryId,
  );

  const currencyFormatter = (value) => {
    const formattedAmount = Math.trunc(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    return (
      <>
        <span>Rp. </span>
        {formattedAmount}
      </>
    );
  };

  return (
    <div>
      <Navbar isPreview />
      <div className="flex justify-center md:mt-10">
        <div className="w-full space-y-6 md:w-8/12">
          <div className="-space-y-16 md:flex md:space-y-0 md:space-x-8">
            <div className="w-full md:w-3/5">
              <div className="relative -z-10 -mt-4 md:mt-0">
                <img
                  src="../../assets/images/product.jpg"
                  // src={detail.productImages[0].imageUrl}
                  alt=""
                  className="h-80 w-full object-cover md:h-[400px] md:rounded-2xl"
                />
                <div className="absolute inset-y-1/2 right-4 hidden items-center md:flex">
                  <div className="rounded-full bg-white p-1 text-gray-400">
                    <FiChevronRight className="text-2xl" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 mb-6 hidden items-center justify-center space-x-2 md:flex">
                  <div className="h-2 w-2 rounded-full border border-purple-900 bg-purple-900" />
                  <div className="h-2 w-2 rounded-full border border-purple-900 bg-gray-200" />
                  <div className="h-2 w-2 rounded-full border border-purple-900 bg-gray-200" />
                  <div className="h-2 w-2 rounded-full border border-purple-900 bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="mx-auto w-11/12 flex-1 md:w-full">
              <div className="mb-6 flex items-center justify-center space-x-2 md:hidden md:space-x-0">
                <div className="h-2 w-2 rounded-full border border-white bg-white" />
                <div className="h-2 w-2 rounded-full border border-white bg-none" />
                <div className="h-2 w-2 rounded-full border border-white bg-none" />
                <div className="h-2 w-2 rounded-full border border-white bg-none" />
              </div>
              <div className="space-y-6">
                <div className="space-y-6 rounded-2xl bg-white p-4 shadow-md">
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div>{detail.name}</div>
                      <div className="text-xs text-gray-400">
                        {filterCategories[0]?.categoryName}
                      </div>
                    </div>
                    <div>{currencyFormatter(detail.price)}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex w-full">
                      <div className="w-full rounded-2xl border bg-purple-900 px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50">
                        Saya Tertarik dan ingin Nego
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-md">
                  <div className="flex items-center space-x-5">
                    <img
                      src="../../assets/images/seller_profile.png"
                      alt=""
                      className="h-12 w-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="font-medium">
                        {detail.userInfo.fullName}
                      </div>
                      <div className="text-gray-400">
                        {detail.userInfo.city ? detail.userInfo.city : "kota"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div className="mx-auto w-11/12 rounded-2xl bg-white p-4 shadow-md md:w-full">
              <div className="space-y-4 text-sm">
                <div className="font-medium">Deskripsi</div>
                <div className="text-gray-400">{detail.description}</div>
              </div>
            </div>
          </div>
          <div className="fixed inset-x-0 bottom-6 flex justify-center md:hidden">
            <div className="flex w-11/12 items-center justify-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50">
              Saya Tertarik dan ingin Nego
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
