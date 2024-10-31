/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios"; // You imported Axios, but it's not needed, only axios is necessary.

export default function CreateMahasiswa() {
  const [namaMahasiswa, setNamaMahasiswa] = useState(""); // Initialize as an empty string
  const [error, setError] = useState(""); // Initialize as an empty string
  const [success, setSuccess] = useState(""); // Fixed 'succes' to 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (namaMahasiswa.trim() === "") {
      setError("Nama Fakultas is required");
      return;
    }

    try {
      const response = await axios.post(
        "uts-if-3-b-2024250049-mxfplkkpn-muhammaddody2002s-projects.vercel.app/api/api/mahasiswa",
        { nama: namaMahasiswa } // This is how you pass the request body data
      );

      if (response.status === 201) {
        setSuccess("Fakultas Created Successfully"); // Corrected the spelling of 'Succes'
        setNamaMahasiswa(""); // Reset input after successful creation
      } else {
        setError("Failed to create Fakultas");
      }
    } catch (error) {
      setError("An error occurred while creating Fakultas");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Mahaisiswa</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="namaMahasiswa" className="form-label">
            Nama Mahasiswa
          </label>

          <input
            type="text"
            className="form-control"
            id="namaFakultas"
            value={namaMahasiswa}
            onChange={(e) => setNamaMahasiswa(e.target.value)}
            placeholder="Masukkan Nama Mahasiswa"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
