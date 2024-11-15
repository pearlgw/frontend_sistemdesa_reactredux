import React from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";

const LoginTemplate = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-cover bg-center">
          <div className="p-8">
            <img
              src="/assets/login.png"
              alt="login"
              className="w-4/5 md:w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-sm space-y-6">
            <div className="flex justify-center mb-8">
              <img src="/assets/logo.png" alt="Logo" className="h-16" />
            </div>

            <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
              Form Login
            </h2>

            <form>
              <div className="mb-6">
                <LabelAtom htmlFor="email" label="Email" />
                <InputAtom
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <LabelAtom htmlFor="password" label="Password" />
                <InputAtom
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;