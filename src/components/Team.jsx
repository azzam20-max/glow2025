import React from "react";

export const Team = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Kiri: Judul + Deskripsi */}
        <div className="col-md-4 team-left">
          <h2 className="team-title">Gallery</h2>
          <p className="team-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec. Mauris non tempor quam, et lacinia sapien.
          </p>
        </div>

        {/* Kanan: Grid foto */}
        <div className="col-md-8">
          <div className="griddd">
            <div>
              <img
                src="/img/gallery/galeri1.png"
                alt="Organized 1"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri1.png"
                alt="Organized 2"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri1.png"
                alt="Organized 3"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri2.png"
                alt="Organized 4"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri3.png"
                alt="Organized 5"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri4.png"
                alt="Organized 6"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri5.png"
                alt="Organized 7"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri6.png"
                alt="Organized 8"
                className="organized-logo"
              />
            </div>
            <div>
              <img
                src="/img/gallery/galeri7.png"
                alt="Organized 9"
                className="organized-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
