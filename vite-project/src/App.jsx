
// eslint-disable-next-line no-unused-vars
import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const MahasiswaList = React.lazy(() => import("./components/mahasiswa/List"));
const MahasiswaCreate = React.lazy(() => import("./components/mahasiswa/Create"));


function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              MDP
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to="/mahasiswa"
                  >
                    Mahasiswa
                  </NavLink>
                </li>
                <li className="nav-item">
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mahasiswa" element={<MahasiswaList />} />
            <Route path="/mahasiswa/create" element={<MahasiswaCreate />} />
          </Routes>
        </Suspense>
        <div>&copy; 2024 Mahasiswa</div>
        </div>
      </Router>
    </>
  );
}

export default App;
