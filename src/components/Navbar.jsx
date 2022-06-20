import { FiMenu, FiSearch, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-orange-200 px-0 py-10 md:bg-white md:py-5 md:shadow-lg">
      <div className="w-11/12 md:container">
        <div className="md:flex md:justify-between">
          <div className="flex items-center justify-between md:w-5/12 md:space-x-6">
            <div className="hidden h-8 w-24 bg-purple-900 md:block" />
            <div className="rounded-2xl bg-white px-3 py-3 md:hidden">
              <FiMenu className="block text-2xl md:hidden" />
            </div>
            <div className="w-10/12 md:flex-1">
              <div className="flex items-center justify-between space-x-4 rounded-2xl bg-white px-6 py-3 md:bg-slate-100">
                <form>
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Cari di sini ..."
                    className="bg-white md:bg-slate-100"
                  />
                </form>
                <FiSearch className="text-2xl text-slate-400" />
              </div>
            </div>
          </div>
          <Link
            to="/login"
            className="hidden items-center space-x-2 rounded-2xl bg-purple-900 px-4 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50 md:flex"
          >
            <FiLogIn className="text-xl" />
            <div>Masuk</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
