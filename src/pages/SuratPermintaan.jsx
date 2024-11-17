import React, { useEffect } from "react";
import Layout from "./Layout";
import SuratPermintaanTemplate from "../components/templates/SuratPermintaanTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const SuratPermintaan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }

    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <SuratPermintaanTemplate />
    </Layout>
  );
};

export default SuratPermintaan;
