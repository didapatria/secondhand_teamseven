import { FiArrowLeft, FiPlus } from "react-icons/fi";
import StatusBar from "../components/StatusBar";

export default function AddProductPage() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-center bg-white bg-none px-0 py-5 shadow-lg">
          <div className="container">
            <div className="flex justify-between">
              <div className="flex items-center justify-between md:w-5/12 md:space-x-6">
                <div className="h-8 w-24 bg-purple-900 md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-10 flex justify-center">
        <div className="md:flex md:w-1/2 w-11/12 md:space-x-20">
          <StatusBar />
          <div className="flex justify-between items-center md:items-start my-4 md:my-0">
            <FiArrowLeft className="text-2xl" />
            <div className="md:hidden font-bold">Lengkapi Detail Produk</div>
            <div className="text-2xl" />
          </div>
          <div className="flex-1 mt-10 md:mt-0">
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
                <div className="h-20 rounded-2xl border border-slate-300 px-4 py-3">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div>Foto Produk</div>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-2xl">
                  <FiPlus />
                </div>
              </div>
              <div className="pt-2 flex w-full space-x-4 text-center">
                <div className="w-1/2 rounded-2xl border border-purple-900 px-6 py-3">
                  Preview
                </div>
                <div className="w-1/2 rounded-2xl border bg-purple-900 px-6 py-3 text-white">
                  Terbitkan
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
