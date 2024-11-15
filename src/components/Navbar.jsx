import React from "react";
import {
  IoEllipsisHorizontal,
  IoList,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import LinkAtom from "./atoms/LinkAtom";

const Navbar = () => {
  return (
    <nav class="fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <IoList className="w-6 h-6" />
            </button>
            <Link to="/dashboard" class="flex ms-2 md:me-24">
              <img src="/assets/logo.png" class="h-8 me-3" alt="logo" />
              <span class="self-center text-xl font-medium sm:text-2xl whitespace-nowrap text-white">
                Sistem Surat Desa
              </span>
            </Link>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <IoEllipsisHorizontal className="w-8 h-8 text-white" />
                </button>
              </div>
              <div
                class="z-50 hidden my-4 text-base list-none bg-gray-700 divide-y divide-gray-600 rounded shadow"
                id="dropdown-user"
              >
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-200" role="none">
                    Neil Sims
                  </p>
                  <p
                    class="text-sm font-medium text-gray-200 truncate"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <LinkAtom
                      text={"Dashboard"}
                      to="/dashboard"
                      classname="text-sm"
                    />
                  </li>
                  <li>
                    <LinkAtom
                      text={"Keluar"}
                      to="/keluar"
                      classname="text-sm"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
