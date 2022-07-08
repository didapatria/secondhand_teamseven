import { useCallback, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import { history } from "../../helpers/history";

import EventBus from "../../common/EventBus";

export default function Account() {
  const [dropdownShow, setDropdownShow] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
          <div>{currentUser.email}</div>
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
