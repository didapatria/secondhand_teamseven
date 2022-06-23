import { FiArrowLeft, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

import StatusBar from "../StatusBar";

export default function RegistAuth() {
  return (
    <div className="flex w-11/12 space-y-10 md:w-8/12 md:items-center">
      <div className="flex h-screen w-full flex-col justify-between md:justify-center">
        <div className="space-y-6">
          <StatusBar />
          <Link to="/">
            <FiArrowLeft className="my-4 block text-2xl md:hidden" />
          </Link>
          <div className="pt-4 text-2xl font-bold">Daftar</div>
          <form className="space-y-4">
            <div className="space-y-1">
              <div>Nama</div>
              <input
                type="name"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="space-y-1">
              <div>Email</div>
              <input
                type="email"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                placeholder="Contoh: johndee@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <div>Password</div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Masukkan password"
                />
                <FiEye className="absolute inset-y-3 right-4 text-2xl text-slate-400" />
              </div>
            </div>
          </form>
          <div className="flex justify-center rounded-2xl bg-purple-900 px-4 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50">
            Daftar
          </div>
        </div>
        <div>
          <div className="my-6 flex items-end justify-center">
            <div className="flex space-x-2">
              <div>Sudah punya akun?</div>
              <span>
                <a href="/login" className="font-bold text-purple-900">
                  Masuk di sini
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
