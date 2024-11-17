import axios from "axios";
import React, { useEffect, useState } from "react";
import DateTime from "../atoms/DateTime";

const PenggunaTemplate = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}/users`);
    setUsers(response.data.data);
  };
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
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Created At
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                Updated At
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="border-b" key={user.uuid}>
                <td className="py-3 px-6 text-sm text-gray-700">{index + 1}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{user.name}</td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">{user.role}</td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  {user.address}
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={user.createdAt} />
                </td>
                <td className="py-3 px-6 text-sm text-gray-700">
                  <DateTime timeStamp={user.updatedAt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PenggunaTemplate;
