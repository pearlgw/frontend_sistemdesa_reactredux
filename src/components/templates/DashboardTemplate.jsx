import React from "react";
import { useSelector } from "react-redux";

const DashboardTemplate = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="font-poppins">
      Hallo <b>{user && user.name} {user && user.email}</b>
    </div>
  );
};

export default DashboardTemplate;
