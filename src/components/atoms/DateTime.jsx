import React from "react";

const DateTime = ({ timeStamp }) => {
  return (
    <>
      {new Date(timeStamp).toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}
    </>
  );
};

export default DateTime;
