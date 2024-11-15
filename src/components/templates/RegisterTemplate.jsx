import React from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";

const RegisterTemplate = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden p-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src="/assets/logo.png" alt="Logo" className="h-16" />
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Form Register
        </h2>

        <form>
          {/* First Column - Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <LabelAtom htmlFor="name" label="Nama" />
              <InputAtom
                id="name"
                type="text"
                placeholder="Masukan nama"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <LabelAtom htmlFor="email" label="Email" />
              <InputAtom
                id="email"
                type="email"
                placeholder="Masukan email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Second Column - Password, Confirm Password, Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <LabelAtom htmlFor="password" label="Password" />
              <InputAtom
                id="password"
                type="password"
                placeholder="Masukan password"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <LabelAtom htmlFor="confPassword" label="Konfirmasi Password" />
              <InputAtom
                id="confPassword"
                type="password"
                placeholder="Masukan konfirmasi password"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6 md:col-span-2">
              <LabelAtom htmlFor="address" label="Alamat" />
              <InputAtom
                id="address"
                type="text"
                placeholder="Masukan alamat"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTemplate;