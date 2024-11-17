import React, { useEffect, useState } from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormSuratPermintaanAdmin = () => {
  const [userId, setUserId] = useState("");
  const [letterTypeId, setLetterTypeId] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [description_admin, setDescription_admin] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getLetterRequests = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/letter-requests/${id}`
        );
        setUserId(response.data.data.user.name);
        setLetterTypeId(response.data.data.letter_type.name);
        setDescription(response.data.data.description);
        setStatus(response.data.data.status);
        setDescription_admin(response.data.data.description_admin);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message);
        }
      }
    };
    getLetterRequests();
  }, [id]);

  const submitLetterRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_URL}/letter-requests/${id}`, {
        status: status,
        description_admin: description_admin,
      });
      navigate("/surat-permintaan");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };
  return (
    <div className="max-w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Form Persetujuan Warga
      </h2>

      <form onSubmit={submitLetterRequest}>
        <p className="text-center">{message}</p>
        <div className="mb-6">
          <LabelAtom htmlFor="userId" label="Nama Pengguna" />
          <InputAtom
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            readOnly={true}
          />
        </div>

        <div className="mb-6">
          <LabelAtom htmlFor="letterTypeId" label="Jenis Surat" />
          <InputAtom
            type="text"
            id="letterTypeId"
            value={letterTypeId}
            onChange={(e) => setLetterTypeId(e.target.value)}
            readOnly={true}
          />
        </div>

        <div className="mb-6">
          <LabelAtom htmlFor="description" label="Deskripsi" />
          <InputAtom
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            readOnly={true}
          />
        </div>

        <div className="mb-6">
          <LabelAtom htmlFor="status" label="Status" />
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option disabled>{status}</option>
            <option value="setujui">Disetujui</option>
            <option value="ditolak">Ditolak</option>
          </select>
        </div>

        <div className="mb-6">
          <LabelAtom htmlFor="description_admin" label="Deskripsi Admin" />
          <InputAtom
            type="text"
            id="description_admin"
            value={description_admin}
            onChange={(e) => setDescription_admin(e.target.value)}
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

export default FormSuratPermintaanAdmin;
