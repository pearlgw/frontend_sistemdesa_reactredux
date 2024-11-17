import React, { useEffect, useState } from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";

const LoginTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
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

            <form onSubmit={Auth}>
              {isError && <p className="text-center">{message}</p>}
              <div className="mb-6">
                <LabelAtom htmlFor="email" label="Email" />
                <InputAtom
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <LabelAtom htmlFor="password" label="Password" />
                <InputAtom
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
              >
                {isLoading ? "Loading..." : "Masuk"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
