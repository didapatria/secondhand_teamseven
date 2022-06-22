import { FiCamera, FiArrowLeft } from "react-icons/fi";

export default function InfoProfil() {
  return (
    <div>
      <div>
        <div className="flex justify-center bg-white bg-none px-0 py-5 shadow-lg">
          <div className="container">
            <div className="flex justify-between">
              <div className="flex items-center md:w-5/12 md:space-x-6">
                <div className="h-8 w-24 bg-purple-900 md:block hidden" />
                <div className="bg-white md:hidden px-3 py-3 rounded-2xl">
                  <FiArrowLeft className="block md:hidden text-2xl" />
                </div>
              </div>
              <div className="flex items-center md:w-5/12 ">
                Lengkapi Info Akun
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex w-1/2 space-x-20">
          <div>
            <FiArrowLeft className="md:block hidden" />
          </div>
          <div className="flex-1">
            <form className="space-y-4">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-slate-300 bg-purple-200 px-4 py-3 text-2xl text-purple-900">
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
                <div className="h-20 rounded-2xl border border-slate-300 px-4 py-3">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                  />
                </div>
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
