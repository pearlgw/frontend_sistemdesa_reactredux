import React, { useEffect, useState } from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditJenisSuratTemplate = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/letter-types/${id}`
        );
        setName(response.data.data.name);
        setDescription(response.data.data.description);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateLetterType = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_URL}/letter-types/${id}`, {
        name: name,
        description: description,
      });
      navigate("/jenis-surat");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };
  return (
    <div className="max-w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Edit Jenis Surat
      </h2>

      <form onSubmit={updateLetterType}>
        <p className="text-center">{message}</p>
        <div className="mb-6">
          <LabelAtom htmlFor="name" label="Nama Jenis Surat" />
          <InputAtom
            type="text"
            id="name"
            placeholder="Masukan nama jenis surat"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Perbarui Jenis Surat
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditJenisSuratTemplate;
