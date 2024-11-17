import React, { useEffect } from "react";
import Layout from "./Layout";
import FormTambahJenisSuratTemplate from "../components/templates/FormTambahJenisSuratTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const TambahJenisSurat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormTambahJenisSuratTemplate />
    </Layout>
  );
};

export default TambahJenisSurat;
