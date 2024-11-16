import React from "react";
import { Link } from "react-router-dom";

const SuratPermintaanTemplate = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Surat Permintaan</h1>
        <p className="text-gray-600 mt-2 mb-5">
          Daftar semua surat permintaan
        </p>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                No
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Nama Pengguna
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Jenis Surat
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Deskripsi
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Deskripsi Admin
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Link File
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
              <td className="py-3 px-6 text-sm text-gray-700">d</td>
              <td className="py-3 px-6 text-sm text-gray-700">d</td>
              <td className="py-3 px-6 text-sm text-gray-700">d</td>
              <td className="py-3 px-6 text-sm text-gray-700">d</td>
              <td className="py-3 px-6 text-sm text-gray-700">
                <Link
                  to={`/jenis-surat/edit/1`}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Di setujui
                </Link>{" "}
                |{" "}
                <Link
                  to={`/jenis-surat/edit/1`}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Di tolak
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuratPermintaanTemplate;
