/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  IoPerson,
  IoHome,
  IoLogOut,
  IoMailOpen,
  IoDocument,
} from "react-icons/io5";
import LinkAtom from "./atoms/LinkAtom";

const Sidebar = () => {
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
          <li>
            <LinkAtom icon={IoLogOut} text={"Keluar"} to={"/keluar"} />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
