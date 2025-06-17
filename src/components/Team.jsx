import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          {/* Kiri: Judul + Deskripsi */}
          <div className="col-md-4 section-title" style={{ textAlign: "left" }}>
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec. Mauris non tempor quam, et lacinia sapien.
            </p>
          </div>

          {/* Kanan: Grid foto */}
          <div className="col-md-8">
            <div className="gallery-grid">
              {props.data
                ? props.data.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="gallery-item">
                      <img src={d.img} alt={d.name} className="team-img" />
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
