import {
  FiArrowLeft,
  FiBell,
  FiChevronRight,
  FiList,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function PreviewProductPage() {
  return (
    <div>
      {/* Navbar */}
      <div className="relative flex w-full justify-center px-0 py-2 md:relative md:py-5 md:shadow-lg">
        <div className="relative w-11/12 md:container md:h-12">
          {/* Mobile */}
          <div className="absolute inset-x-0 top-11 z-10 flex items-center space-x-4 md:hidden">
            <Link to="/">
              <div className="h-fit rounded-full bg-white p-1">
                <FiArrowLeft className="text-2xl" />
              </div>
            </Link>
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
        <div className="w-full space-y-6 md:w-8/12">
          <div className="-space-y-16 md:flex md:space-y-0 md:space-x-8">
            <div className="w-full md:w-3/5">
              <div className="relative -z-10 -mt-4 md:mt-0">
                <img
                  src="../assets/images/product.jpg"
                  alt=""
                  className="h-80 w-full object-cover md:h-[400px] md:rounded-2xl"
                />
                <div className="absolute inset-y-1/2 right-4 hidden items-center md:flex">
                  <div className="rounded-full bg-white p-1 text-gray-400">
                    <FiChevronRight className="text-2xl" />
                  </div>
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
                      <div>Jam Tangan Casio</div>
                      <div className="text-xs text-gray-400">Aksesoris</div>
                    </div>
                    <div>Rp 250.000</div>
                  </div>
                  <div className="hidden space-y-4 md:block">
                    <div className="flex w-full">
                      <Link
                        to="/seller/list-product"
                        className="w-full rounded-2xl border bg-purple-900 px-6 py-3 text-center font-medium text-white"
                      >
                        Terbitkan
                      </Link>
                    </div>
                    <div className="flex w-full">
                      <Link
                        to="/seller/info-product"
                        className="w-full rounded-2xl border border-purple-900 bg-white px-6 py-3 text-center font-medium"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-md">
                  <div className="flex items-center space-x-5">
                    <img
                      src="../assets/images/profile.png"
                      alt=""
                      className="h-12 w-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="font-medium">Nama Penjual</div>
                      <div className="text-gray-400">kota</div>
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
                <div className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-x-0 bottom-6 flex justify-center md:hidden">
            <Link
              to="/seller/list-product"
              className="Terbitkan flex w-11/12 items-center justify-center space-x-2 rounded-xl bg-purple-900 px-6 py-3 text-white shadow-lg shadow-purple-900/50"
            >
              Terbitkan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
