import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";

export default function InfoBidderPage() {
  return (
    <div>
      <div className="mx-auto w-11/12">
        <StatusBar />
      </div>
      {/* Navbar */}
      <div className="flex w-full justify-center px-0 py-4 md:relative md:py-5 md:shadow-lg">
        <div className="relative w-11/12 md:container md:h-12">
          {/* Mobile */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/">
              <FiArrowLeft className="text-2xl" />
            </Link>
            <div className="absolute inset-0 -z-10 text-center font-medium">
              Lengkapi Detail Produk
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex md:justify-between">
            <div className="flex h-12 items-center justify-between space-x-6">
              <Link to="/" className="h-8 w-24 bg-purple-900" />
              <div className="absolute inset-0 inset-y-auto -z-10 text-center font-medium">
                Lengkapi Detail Produk
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-6 flex justify-center md:mt-10">
        <div className="hidden md:block md:w-3/5">
          <Link to="/">
            <FiArrowLeft className="text-2xl" />
          </Link>
        </div>
        <div className="absolute inset-0 inset-y-auto -z-10 mx-auto w-11/12 md:flex md:w-full md:justify-center">
          <div className="md:w-2/5">
            <div className="space-y-4">
              <div className="w-full rounded-2xl p-5 shadow-md">
                <div className="flex items-center space-x-5">
                  <img
                    src="../assets/images/buyer_profile.png"
                    alt=""
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  <div>
                    <div className="font-medium">Nama Pembeli</div>
                    <div className="text-gray-400">kota</div>
                  </div>
                </div>
              </div>
              <div className="font-medium">Daftar Produkmu yang Ditawar</div>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <img
                    src="../assets/images/product.jpg"
                    alt=""
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  <div className="w-full">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <div>Penawaran produk</div>
                        <div>20 Apr, 14:04</div>
                      </div>
                      <div>Jam Tangan Casio</div>
                      <div>Rp 250.000</div>
                      <div>Ditawar Rp 200.000</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 md:divide-y">
                  <div className="flex justify-end">
                    <div className="flex w-full space-x-4 md:w-3/5">
                      <div className="w-1/2 rounded-2xl border border-purple-900 bg-white px-6 py-2 text-center">
                        Tolak
                      </div>
                      <div className="w-1/2 rounded-2xl border bg-purple-900 px-6 py-2 text-center text-white">
                        Terima
                      </div>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}