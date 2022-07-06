import { useState } from "react";
import {
  FiBell,
  FiBox,
  FiChevronRight,
  FiDollarSign,
  FiHeart,
  FiList,
  FiMenu,
  FiPlus,
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

export default function ListProductPage() {
  const title = "Daftar Jual Saya";

  const [isNavOpen, setIsNavOpen] = useState(false);

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
                  <div className="font-medium">Nama Penjual</div>
                  <div className="text-gray-400">kota</div>
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
              <Card />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile-Sidebar */}
      <div
        className={isNavOpen ? "fixed inset-0 h-screen bg-black/60" : "hidden"}
      >
        <div
          className={
            isNavOpen
              ? "fixed inset-y-0 left-0 z-20 h-screen w-1/2 bg-white py-9 px-4"
              : "hidden"
          }
        >
          <FiX
            className="absolute top-9 right-6 text-2xl"
            onClick={() => setIsNavOpen(false)}
          />
          <div className="space-y-5">
            <div className="font-bold">Second Hand</div>
            <div className="space-y-4">
              <div>
                <Link to="/seller/notification">Notifikasi</Link>
              </div>
              <div>
                <Link to="/seller/list-product">Daftar Jual</Link>
              </div>
              <div>
                <Link to="/seller/account">Akun Saya</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
