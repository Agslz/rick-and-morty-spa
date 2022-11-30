import React from "react";


export const Card = ({ mascota }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          src={mascota.image}
          alt="imagen"
        ></img>
        <h5 className="mb-o text-success fw-bold py-1 ms-3">{mascota.species}</h5>
        <h3 className="mb-o text-dark fw-bold ms-3">{mascota.name}</h3>
        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
