/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  IoPerson,
  IoHome,
  IoLogOut,
  IoMailOpen,
  IoDocument,
  IoMailOutline,
} from "react-icons/io5";
import LinkAtom from "./atoms/LinkAtom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const Logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-800 border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <LinkAtom icon={IoHome} text={"Dashboard"} to="/dashboard" />
          </li>
          <li>
            <LinkAtom
              icon={IoMailOutline}
              text={"Surat Permintaan Anda"}
              to={"/surat-permintaan-pengguna"}
            />
          </li>
          {user && user.role === "admin" && (
            <>
              <li>
                <LinkAtom icon={IoPerson} text={"Pengguna"} to={"/pengguna"} />
              </li>
              <li>
                <LinkAtom
                  icon={IoDocument}
                  text={"Jenis Surat"}
                  to={"/jenis-surat"}
                />
              </li>
              <li>
                <LinkAtom
                  icon={IoMailOpen}
                  text={"Surat Permintaan"}
                  to={"/surat-permintaan"}
                />
              </li>
            </>
          )}
          <li>
            <button
              onClick={Logout}
              className={`w-full flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group`}
            >
              <IoLogOut className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-200" />
              <span className="ms-3">Keluar</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
