import { FiArrowLeft, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../components/StatusBar";

export default function InfoProfilePage() {
  return (
    <div>
      <div className="mx-auto w-11/12">
        <StatusBar />
      </div>
      {/* Navbar */}
      <div className="flex w-full justify-center px-0 py-4 md:relative md:py-5 md:shadow-lg">
        <div className="relative w-11/12 md:container md:h-12">
          {/* Mobile */}
          <div className="md:hidden">
            <Link to="/">
              <FiArrowLeft className="text-2xl" />
            </Link>
            <div className="absolute inset-0 -z-10 text-center font-medium">
              Lengkapi Info Akun
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex md:justify-between">
            <div className="flex h-12 items-center justify-between space-x-6">
              <Link to="/" className="h-8 w-24 bg-purple-900" />
              <div className="absolute inset-0 inset-y-auto -z-10 text-center font-medium">
                Lengkapi Info Akun
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
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-200 px-4 py-3 text-2xl">
                  <FiCamera />
                </div>
              </div>
              <div className="space-y-1">
                <div>Nama*</div>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Nama"
                />
              </div>
              <div className="space-y-1">
                <div>Kota*</div>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-400">
                  <option value="">Pilih Kota</option>
                  <option value="">Pilih Kota</option>
                  <option value="">Pilih Kota</option>
                  <option value="">Pilih Kota</option>
                </select>
              </div>
              <div className="space-y-1">
                <div>Alamat*</div>
                <textarea
                  name=""
                  id=""
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>
              <div className="space-y-1">
                <div>No Handphone*</div>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="contoh: +628123456789"
                />
              </div>
              <div className="text-center">
                <div className="rounded-2xl border bg-purple-900 px-6 py-3 text-white">
                  Simpan
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
