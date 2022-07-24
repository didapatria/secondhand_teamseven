import { useCallback, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import { history } from "../../helpers/history";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

export default function Account() {
  const [dropdownShow, setDropdownShow] = useState(false);

  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    UserService.getUserBoard().then((response) => {
      setUser(response.data.data);
    });
  }, []);

  const openDropdown = () => {
    setDropdownShow(true);
  };

  const closeDropdown = () => {
    setDropdownShow(false);
  };

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);

  return (
    <div className="relative">
      <FiUser
        onClick={() => (dropdownShow ? closeDropdown() : openDropdown())}
      />
      <div
        className={
          dropdownShow
            ? "absolute right-0 z-50 mt-4 w-60 rounded-2xl bg-white p-6 shadow-lg"
            : "hidden"
        }
      >
        <div className="space-y-4 text-base">
          <div className="flex items-center space-x-3">
            <img
              src="../../assets/images/seller_profile.png"
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium">{user.fullName}</div>
              <div className="text-gray-400">
                {user.city ? user.city : "kota"}
              </div>
            </div>
          </div>
          <div>
            <Link to="/info-profile">Ubah Akun</Link>
          </div>
          <button type="button" onClick={logOut}>
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
