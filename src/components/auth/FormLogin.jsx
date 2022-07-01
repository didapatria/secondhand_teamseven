/* eslint-disable no-underscore-dangle */
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft, FiBell, FiEye, FiX } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import StatusBar from "../StatusBar";
import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-4 rounded border-0 bg-red-500 px-6 py-4 text-white">
        This field is required!
      </div>
    );
  }
  return null;
};

export default function FormLogin() {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          // props.history.push("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex w-11/12 space-y-10 md:w-8/12 md:items-center">
      <div className="relative flex h-screen w-full flex-col justify-between md:justify-center">
        <Form onSubmit={handleLogin} ref={form} className="space-y-6">
          <StatusBar />
          <Link to="/">
            <FiArrowLeft className="my-4 block text-2xl md:hidden" />
          </Link>
          <div className="pt-4 text-2xl font-bold">Masuk</div>
          <div className="space-y-4">
            <div className="space-y-1">
              {/* <div>Email</div> */}
              <div>Username</div>
              <Input
                type="text"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                // placeholder="Contoh: johndee@gmail.com"
                placeholder="Contoh: johndee"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
              />
            </div>
            <div className="space-y-1">
              <div>Password</div>
              <div className="relative">
                <Input
                  type="password"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  placeholder="Masukkan password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
                <FiEye className="absolute inset-y-3 right-4 text-2xl text-slate-400" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full justify-center rounded-2xl bg-purple-900 px-4 py-3 text-white hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-purple-900/50"
            disabled={loading}
            onClick={() => setShowAlert(true)}
          >
            {loading && (
              <svg
                role="status"
                className="mr-2 h-5 w-5 animate-spin fill-white text-gray-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            <span>Masuk</span>
          </button>

          {message && (
            <div>
              {showAlert ? (
                <div className="absolute top-5 w-full rounded border-0 bg-red-500 px-6 py-4 text-white">
                  <FiBell className="mr-5 inline-block align-middle text-xl" />
                  <span className="mr-8 inline-block align-middle">
                    This is <b>{message}!</b> - check it out!
                  </span>
                  <FiX
                    className="absolute right-0 top-0 mt-4 mr-6 bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
                    onClick={() => setShowAlert(false)}
                  />
                </div>
              ) : null}
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <div>
          <div className="my-6 flex items-end justify-center">
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
