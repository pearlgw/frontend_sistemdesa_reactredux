import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/Pengguna";
import JenisSurat from "./pages/JenisSurat";
import SuratPermintaan from "./pages/SuratPermintaan";
import LoginTemplate from "./components/templates/LoginTemplate";
import RegisterTemplate from "./components/templates/RegisterTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pengguna" element={<Pengguna />} />
        <Route path="/jenis-surat" element={<JenisSurat />} />
        <Route path="/surat-permintaan" element={<SuratPermintaan />} />
        <Route path="/" element={<LoginTemplate />} />
        <Route path="/daftar" element={<RegisterTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
