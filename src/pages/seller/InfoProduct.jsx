import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../../components/StatusBar";

export default function InfoProductPage() {
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
      <div className="mt-6 flex justify-center md:mt-10">
        <div className="hidden md:block md:w-3/5">
          <Link to="/">
            <FiArrowLeft className="text-2xl" />
          </Link>
        </div>
        <div className="absolute inset-0 inset-y-auto -z-10 mx-auto w-11/12 md:flex md:w-full md:justify-center">
          <div className="md:w-2/5">
            <form className="space-y-4">
              <div className="space-y-1">
                <div>Nama Produk</div>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Nama Produk"
                />
              </div>
              <div className="space-y-1">
                <div>Harga Produk</div>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Rp 0,00"
                />
              </div>
              <div className="space-y-1">
                <div>Kategori</div>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-400">
                  <option value="">Pilih Kategori</option>
                  <option value="">Pilih Kategori</option>
                  <option value="">Pilih Kategori</option>
                  <option value="">Pilih Kategori</option>
                </select>
              </div>
              <div className="space-y-1">
                <div>Deskripsi</div>
                <textarea
                  name=""
                  id=""
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>
              <div className="space-y-1">
                <div>Foto Produk</div>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-3 text-2xl">
                  <FiPlus />
                </div>
              </div>
              <div className="flex w-full space-x-4 pt-2 text-center">
                <Link
                  to="/seller/preview-product"
                  className="w-1/2 rounded-2xl border border-purple-900 bg-white px-6 py-3"
                >
                  Preview
                </Link>
                <Link
                  to="/seller/list-product"
                  className="w-1/2 rounded-2xl border bg-purple-900 px-6 py-3 text-white"
                >
                  Terbitkan
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
