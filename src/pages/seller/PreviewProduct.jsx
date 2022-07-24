import axios from "axios";

import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import CarouselProduct from "../../components/detailproduct/CarouselProduct";

import Navbar from "../../components/Navbar";

export default function PreviewProductPage() {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);

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

  useEffect(() => {
    getDetail();
  }, []);

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
          <div className="md:flex md:space-x-8">
            <div className="w-full md:w-3/5">
              <div className="relative -mt-4 md:mt-0">
                <CarouselProduct data={detail} />
              </div>
            </div>
            <div className="mx-auto w-11/12 flex-1 md:w-full">
              <div className="space-y-6">
                <div className="space-y-6 rounded-2xl bg-white p-4 shadow-md">
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div>{detail.name}</div>
                      <div className="text-xs text-gray-400">
                        {detail.category?.categoryName}
                      </div>
                    </div>
                    <div>{currencyFormatter(detail.price)}</div>
                  </div>
                  <div className="hidden space-y-4 md:block">
                    <div className="flex w-full">
                      <Link
                        to="/seller/list-product"
                        className="w-full rounded-2xl border bg-purple-900 px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
                      >
                        Terbitkan
                      </Link>
                    </div>
                    <div className="flex w-full">
                      <Link
                        to={`/seller/info-product/${detail.id}`}
                        className="w-full rounded-2xl border border-purple-900 bg-white px-6 py-3 text-center font-medium hover:bg-purple-900 hover:text-white hover:shadow-lg hover:shadow-purple-900/50"
                      >
                        Edit
                      </Link>
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
                        {detail.userInfo?.fullName}
                      </div>
                      <div className="text-gray-400">
                        {detail.userInfo?.city ? detail.userInfo?.city : "kota"}
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
            <Link
              to="/seller/list-product"
              className="flex w-11/12 items-center justify-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white shadow-lg shadow-purple-900/50 hover:bg-white hover:text-purple-900"
            >
              Terbitkan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
