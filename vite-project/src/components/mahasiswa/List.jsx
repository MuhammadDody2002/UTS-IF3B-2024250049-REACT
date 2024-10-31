/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


export default function List() {
  const [mahasiswa, setmahasiswa] = useState([]);

  useEffect(() => {
    axios
      .get("uts-if-3-b-2024250049-mxfplkkpn-muhammaddody2002s-projects.vercel.app/api/api/mahasiswa")
      .then((response) => {
        console.log(response.data.result);
        setmahasiswa(response.data.result);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, []);
  return (
    <>
      <h1>List Mahaisiswa</h1>

      <NavLink to="/mahasiswa/create" className="btn btn-primary">
        Create
      </NavLink>
      <ul className="list-group">
  {mahasiswa.map((f) => (
    <li 
      key={f.id} 
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>{f.nama}</span> {/* Menampilkan nama siswa */}
    </li>
  ))}
</ul>
      <div className="card m-5">
        <ul className="list-group "></ul>
      </div>
    </>
    
  );
}
