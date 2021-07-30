import React from "react";

const dashboard = () => {
  return (
    <div className="container">
      <div className="row center">
        <div className="judul">
          Rekap data kegiatan kemahasiswaan tahun:
          <div className="tahun">
            <div className="dropdown">
              <button className="dropbtn">2018</button>
              <div className="dropdown-content">
                <a href="#">2018</a>
                <a href="#">2019</a>
                <a href="#">2020</a>
                <a href="#">2021</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row center">
        <div className="card">
          <div className="card-icon">
            <i className="material-icons">assessment</i>
          </div>
          <div className="card-body">
            <h2>Internasional</h2>
            <h1>20</h1>
            <p>Mahasiswa</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="material-icons">assessment</i>
          </div>
          <div className="card-body">
            <h2>Nasional</h2>
            <h1>40</h1>
            <p>Mahasiswa</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="material-icons">assessment</i>
          </div>
          <div className="card-body">
            <h2>Provinsi</h2>
            <h1>60</h1>
            <p>Mahasiswa</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="material-icons">assessment</i>
          </div>
          <div className="card-body">
            <h2>Wilayah</h2>
            <h1>80</h1>
            <p>Mahasiswa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
