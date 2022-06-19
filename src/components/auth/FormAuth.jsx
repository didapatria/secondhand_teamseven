import { FiArrowLeft, FiEye } from "react-icons/fi";
import StatusBar from "../StatusBar";

export default function FormAuth() {
  return (
    <div className="w-11/12 md:w-8/12 flex md:items-center space-y-10">
      <div className="w-full flex flex-col justify-between md:justify-center h-screen">
        <div className="space-y-6">
          <StatusBar />
          <FiArrowLeft className="block md:hidden my-4 text-2xl" />
          <div className="font-bold pt-4 text-2xl">Masuk</div>
          <form className="space-y-4">
            <div className="space-y-1">
              <div>Email</div>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl"
                placeholder="Contoh: johndee@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <div>Password</div>
              <div className="flex items-center space-x-4 px-4 py-3 border border-slate-300 rounded-2xl">
                <input
                  type="password"
                  className="w-full"
                  placeholder="Masukkan password"
                />
                <FiEye className="text-2xl text-slate-400" />
              </div>
            </div>
          </form>
          <div className="flex justify-center px-4 py-3 bg-purple-900 text-white rounded-2xl hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50">
            Masuk
          </div>
        </div>
        <div>
          <div className="flex justify-center items-end my-6">
            <div className="flex space-x-2">
              <div>Belum punya akun?</div>
              <span>
                <a href="/register" className="font-bold text-purple-900">
                  Daftar di sini
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
