import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-6 text-left">
            <h2 className="schedule-title">Schedule</h2>
            <p className="schedule-description">
              Berikut adalah jadwal kegiatan yang telah dirancang untuk
              memastikan kelancaran acara. Silakan simak dan persiapkan dengan
              baik.
            </p>
          </div>
          <div className="col-md-6">
            <table className="table table-bordered schedule-table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Kegiatan</th>
                  <th>Tempat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>08:00 - 09:00</td>
                  <td>Pendaftaran</td>
                  <td>Aula Utama</td>
                </tr>
                <tr>
                  <td>09:00 - 10:30</td>
                  <td>Pembukaan</td>
                  <td>Aula Utama</td>
                </tr>
                <tr>
                  <td>10:30 - 12:00</td>
                  <td>Workshop</td>
                  <td>Ruang 101</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Portfolio items tetap bisa ditambahkan jika perlu */}
      </div>
    </div>
  );
};
