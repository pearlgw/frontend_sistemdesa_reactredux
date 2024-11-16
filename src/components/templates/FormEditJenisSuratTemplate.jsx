import React from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";

const FormEditJenisSuratTemplate = () => {
  return (
    <div className="max-w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Edit Jenis Surat
      </h2>

      <form>
        <div className="mb-6">
          <LabelAtom htmlFor="name" label="Nama Jenis Surat" />
          <InputAtom
            type="text"
            id="name"
            placeholder="Masukan nama jenis surat"
          />
        </div>

        <div className="mb-6">
          <LabelAtom htmlFor="description" label="Deskripsi" />
          <InputAtom
            type="text"
            id="description"
            placeholder="Masukan deskripsi"
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
