import React from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const JenisSuratTemplate = () => {
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
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-6 text-sm text-gray-700">p</td>
              <td className="py-3 px-6 text-sm text-gray-700">a</td>
              <td className="py-3 px-6 text-sm text-gray-700">a</td>
              <td className="py-3 px-6 text-sm text-gray-700">
                <Link
                  to={`/jenis-surat/edit/1`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </Link>{" "}
                |{" "}
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JenisSuratTemplate;
