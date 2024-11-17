import React, { useEffect, useState } from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

const FormBuatSuratPermintaanTemplate = () => {
  const [description, setDescription] = useState("");
  const [letterTypeId, setLetterTypeId] = useState("");
  const [letterTypes, setLetterTypes] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    getLetterTypes();
  }, []);

  const getLetterTypes = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/letter-types`
    );
    setLetterTypes(response.data.data);
  };

  const Save = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_URL}/letter-requests`, {
        userId: user.id,
        letterTypeId: letterTypeId,
        description: description,
      });
      navigate("/surat-permintaan-pengguna");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };
  return (
    <div className="max-w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Tambah Jenis Surat Baru
      </h2>
      <form onSubmit={Save}>
        <p className="text-center">{message}</p>
        <div className="mb-6">
          <LabelAtom htmlFor="letterTypeId" label="Jenis Surat" />
          <select
            id="letterTypeId"
            value={letterTypeId}
            onChange={(e) => setLetterTypeId(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Pilih Jenis Surat
            </option>

            {letterTypes.map((letterType) => (
              <option key={letterType.id} value={letterType.id}>
                {letterType.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <LabelAtom htmlFor="description" label="Deskripsi" />
          <InputAtom
            type="text"
            id="description"
            placeholder="Masukan deskripsi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBuatSuratPermintaanTemplate;
