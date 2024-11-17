import React, { useEffect, useState } from "react";
import DateTime from "../atoms/DateTime";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

const ListSuratPermintaanByIdTemplate = () => {
  const [listLetterRequests, setListLetterRequests] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/letter-request-user`
    );
    setListLetterRequests(response.data.data);
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
        <p className="text-gray-600 mt-2 mb-5">
          Daftar semua surat permintaan anda
        </p>
        <Link
          to={"/surat-permintaan/tambah"}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          <IoAddCircleOutline className="text-lg" />
          Buat Surat Permintaan
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
                Waktu Buat
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Respon Admin
              </th>
            </tr>
          </thead>
          <tbody>
            {listLetterRequests.map((listLetterRequest, index) => (
              <tr className="border-b" key={listLetterRequest.uuid}>
                <td className="py-3 px-6 text-sm text-gray-700">{index + 1}</td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {listLetterRequest.user.name}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {listLetterRequest.letter_type.name}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {listLetterRequest.description}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                      listLetterRequest.status
                    )}`}
                  >
                    {listLetterRequest.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {listLetterRequest.description_admin ?? "-"}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {listLetterRequest.link_file ?? "-"}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={listLetterRequest.createdAt} />
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={listLetterRequest.updatedAt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListSuratPermintaanByIdTemplate;
