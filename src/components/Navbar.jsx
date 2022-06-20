import { FiMenu, FiSearch, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-transparent md:bg-white px-0 py-10 md:py-5 md:shadow-lg">
      <div className="md:container w-11/12">
        <div className="md:flex md:justify-between">
          <div className="flex md:w-5/12 items-center justify-between md:space-x-6">
            <div className="hidden md:block bg-purple-900 w-24 h-8" />
            <div className="bg-white md:hidden px-3 py-3 rounded-2xl">
              <FiMenu className="block md:hidden text-2xl" />
            </div>
            <div className="md:flex-1 w-10/12">
              <div className="flex justify-between items-center space-x-4 px-6 py-3 bg-white md:bg-slate-100 rounded-2xl">
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
            className="hidden md:flex items-center space-x-2 px-4 py-3 bg-purple-900 text-white rounded-2xl hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
          >
            <FiLogIn className="text-xl" />
            <div>Masuk</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
