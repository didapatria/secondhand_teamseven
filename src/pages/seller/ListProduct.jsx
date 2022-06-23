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
} from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";
import Card from "../../components/Card";

export default function ListProductPage() {
  return (
    <div>
      <div className="mx-auto w-11/12">
        <StatusBar />
      </div>
      {/* Navbar */}
      <div className="flex w-full justify-center px-0 py-2 md:relative md:py-5 md:shadow-lg">
        <div className="relative w-11/12 md:container md:h-12">
          {/* Mobile */}
          <div className="flex items-center space-x-4 md:hidden">
            <div className="rounded-2xl bg-white px-3 py-3">
              <FiMenu className="text-2xl" />
            </div>
            <div className="text-xl font-bold">Daftar Jual Saya</div>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex md:justify-between">
            <div className="flex h-12 w-5/12 items-center justify-between space-x-6">
              <Link to="/" className="h-8 w-24 bg-purple-900" />
              <div className="w-10/12 flex-1">
                <form>
                  <div className="relative">
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Cari di sini ..."
                      className="flex w-full items-center justify-between space-x-4 rounded-2xl px-6 py-3 md:bg-slate-100"
                    />
                    <FiSearch className="absolute inset-y-3 right-6 text-2xl text-slate-400" />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-2xl">
              <FiList />
              <FiBell />
              <FiUser />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:mt-10">
        <div className="w-11/12 space-y-8 md:w-8/12">
          <div className="hidden text-xl font-bold md:block">
            Daftar Jual Saya
          </div>
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
    </div>
  );
}
