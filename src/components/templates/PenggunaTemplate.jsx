import React from "react";

const PenggunaTemplate = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Pengguna</h1>
        <p className="text-gray-600 mt-2 mb-5">
          Daftar semua pengguna terdaftar
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
                Nama
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Peran
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Alamat
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PenggunaTemplate;
