import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import DateTime from "../atoms/DateTime";

const JenisSuratTemplate = () => {
  const [letterTypes, setLetterTypes] = useState([]);

  useEffect(() => {
    getLetterTypes();
  }, []);

  const getLetterTypes = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/letter-types`
    );
    setLetterTypes(response.data.data);
  };

  const deleteLetterTypes = async (letterTypeId) => {
    await axios.delete(
      `${process.env.REACT_APP_URL}/letter-types/${letterTypeId}`
    );
    getLetterTypes();
  };
  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Jenis Surat</h1>
        <p className="text-gray-600 mt-2 mb-5">
          Daftar jenis surat yang diperlukan
        </p>
        <Link
          to={"/jenis-surat/tambah"}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          <IoAdd className="text-lg" />
          Buat Jenis Surat
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                No
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Nama
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Deskripsi
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Created At
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Updated At
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {letterTypes.map((letterType, index) => (
              <tr className="border-b" key={letterType.uuid}>
                <td className="py-3 px-6 text-sm text-gray-700">{index + 1}</td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterType.name}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterType.description}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={letterType.createdAt} />
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={letterType.updatedAt} />
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <Link
                    to={`/jenis-surat/edit/${letterType.uuid}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </Link>{" "}
                  |{" "}
                  <button
                    onClick={() => deleteLetterTypes(letterType.uuid)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JenisSuratTemplate;
