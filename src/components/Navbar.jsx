import { useState } from "react";
import { useSelector } from "react-redux";
import {
  FiArrowLeft,
  FiBell,
  FiList,
  FiLogIn,
  FiMenu,
  FiSearch,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import Account from "./dropdowns/Account";

export default function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <div
      className={`${
        props.isHome || props.isPreview ? "absolute z-10" : null
      } flex w-full justify-center px-0 ${
        props.isList ? "py-2" : props.isInfo ? "py-4" : "py-10"
      } py-10 md:relative md:py-5 md:shadow-lg`}
    >
      <div className="relative w-11/12 md:container md:h-12">
        {/* Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          {props.isPreview ? (
            <Link to="/">
              <div className="h-fit rounded-full bg-white p-1">
                <FiArrowLeft className="text-2xl" />
              </div>
            </Link>
          ) : props.isList ? (
            <div className="flex items-center space-x-4 md:hidden">
              <div className="rounded-2xl bg-white px-3 py-3">
                <FiMenu
                  className="text-2xl"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                />
              </div>
              <div className="text-xl font-bold">{props.title}</div>
            </div>
          ) : props.isInfo ? (
            <>
              <Link to="/">
                <FiArrowLeft className="text-2xl" />
              </Link>
              <div className="absolute inset-0 -z-10 text-center font-medium">
                {props.title}
              </div>
            </>
          ) : (
            <>
              <div className="rounded-2xl bg-white px-3 py-3">
                <FiMenu
                  className="text-2xl"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                />
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
            </>
          )}
        </div>
        {/* Desktop */}
        <div className="hidden md:flex md:justify-between">
          <div className="flex h-12 w-5/12 items-center justify-between space-x-6">
            <Link to="/" className="h-8 w-24 bg-purple-900" />
            {props.isInfo ? (
              <div className="absolute inset-0 inset-y-auto -z-10 text-center font-medium">
                {props.title}
              </div>
            ) : (
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
            )}
          </div>
          {props.isInfo ? null : (
            <div>
              {currentUser ? (
                <div className="flex items-center space-x-6 text-2xl">
                  <Link to="/seller/list-product">
                    <FiList />
                  </Link>
                  <FiBell />
                  <Account />
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hidden items-center space-x-2 rounded-2xl bg-purple-900 px-4 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50 md:flex"
                >
                  <FiLogIn className="text-xl" />
                  <div>Masuk</div>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Mobile-Sidebar */}
      <div
        className={isNavOpen ? "fixed inset-0 h-screen bg-black/60" : "hidden"}
      >
        <div
          className={
            isNavOpen
              ? "fixed inset-y-0 left-0 z-20 h-screen w-1/2 bg-white py-9 px-4"
              : "hidden"
          }
        >
          <FiX
            className="absolute top-9 right-6 text-2xl"
            onClick={() => setIsNavOpen(false)}
          />
          <div className="space-y-5">
            <div className="font-bold">Second Hand</div>

            {currentUser ? (
              <div className="space-y-4">
                <div>
                  <Link to="/notification">Notifikasi</Link>
                </div>
                <div>
                  <Link to="/seller/list-product">Daftar Jual</Link>
                </div>
                <div>
                  <Link to="/account">Akun Saya</Link>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex w-fit items-center space-x-2 rounded-2xl bg-purple-900 px-4 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
              >
                <FiLogIn className="text-xl" />
                <div>Masuk</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
