import {
  // FiArrowLeft,
  // FiBell,
  // FiList,
  FiLogIn,
  FiMenu,
  FiSearch,
  // FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="absolute z-10 flex w-full justify-center px-0 py-10 md:relative md:py-5 md:shadow-lg">
      <div className="relative w-11/12 md:container md:h-12">
        {/* Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <div className="rounded-2xl bg-white px-3 py-3">
            <FiMenu className="text-2xl" />
          </div>
          <div className="w-10/12 md:flex-1">
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
          {/* <Link to="/">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <div className="absolute inset-0 -z-10 text-center font-medium">
            Title
          </div> */}
          {/* <div className="text-xl font-bold">Title</div> */}
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
            {/* <div className="absolute inset-0 inset-y-auto -z-10 text-center font-medium">
              Title
            </div> */}
          </div>
          <Link
            to="/login"
            className="hidden items-center space-x-2 rounded-2xl bg-purple-900 px-4 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50 md:flex"
          >
            <FiLogIn className="text-xl" />
            <div>Masuk</div>
          </Link>
          {/* <div className="flex items-center space-x-6 text-2xl">
            <FiList />
            <FiBell />
            <FiUser />
          </div> */}
        </div>
      </div>
    </div>
  );
}
