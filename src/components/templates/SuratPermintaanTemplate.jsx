import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateTime from "../atoms/DateTime";

const SuratPermintaanTemplate = () => {
  const [letterRequests, setLetterRequests] = useState([]);

  useEffect(() => {
    getLetterRequests();
  }, []);

  const getLetterRequests = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/letter-requests`
    );
    setLetterRequests(response.data.data);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "setujui":
        return "bg-green-500 text-white";
      case "ditolak":
        return "bg-red-500 text-white";
      default:
        return "bg-yellow-500 text-white";
    }
  };
  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">
          Surat Permintaan
        </h1>
        <p className="text-gray-600 mt-2 mb-5">Daftar semua surat permintaan</p>
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
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Pengguna Membuat
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Respon Admin
              </th>
            </tr>
          </thead>
          <tbody>
            {letterRequests.map((letterRequest, index) => (
              <tr className="border-b" key={letterRequest.uuid}>
                <td className="py-3 px-6 text-sm text-gray-700">{index + 1}</td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterRequest.user.name}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterRequest.letter_type.name}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterRequest.description}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusBadge(
                      letterRequest.status
                    )}`}
                  >
                    {letterRequest.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterRequest.description_admin ?? "-"}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterRequest.link_file ?? "-"}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {letterRequest.status === "pending" ? (
                    <Link
                      to={`/surat-permintaan/detail/${letterRequest.uuid}`}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      Detail
                    </Link>
                  ) : (
                    <span className="text-green-700 font-medium">
                      Sudah direspon
                    </span>
                  )}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={letterRequest.createdAt} />
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={letterRequest.updatedAt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuratPermintaanTemplate;
