import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white m-4 p-3 rounded border shadow-sm fixed-top">
        <div className="container-fluid d-none d-lg-flex">
          <div className="left-filter d-flex align-items-center gap-4">
            <div className="filter-title">
              <i className="bi bi-funnel fs-3"></i>
              <span className="fs-5 fw-bold mx-2 title-font">Filter By</span>
            </div>
            <div className="radio-filter">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Open Now
                </label>
              </div>
            </div>
            <div className="price-filter">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected disabled>
                  -- Price --
                </option>
                <option value="1">Under Rp50.000</option>
                <option value="2">Rp50.000 - Rp100.000</option>
                <option value="3">Rp100.000 - Rp300.000</option>
              </select>
            </div>
            <div className="category-filter">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected disabled>
                  -- Category --
                </option>
                <option value="1">Sushie</option>
                <option value="2">Ramen</option>
                <option value="3">Udon</option>
              </select>
            </div>
          </div>
          <div className="clear-filter">
            <button className="btn btn-danger fw-bold px-2 fs-7">
              <i className="bi bi-trash3 mx-2"></i>
              Hapus Filter
            </button>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#mobileModal"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-funnel fs-6"></i>
          <span className="fs-6 mx-1 fw-bold">Filter By</span>
        </button>
        <div className="radio-filter d-inline d-lg-none">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Open Now
            </label>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="mobileModal"
        tabindex="-1"
        aria-labelledby="mobileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6 fw-bold" id="mobileModalLabel">
                Filter By
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="price-filter mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    -- Price --
                  </option>
                  <option value="1">Under Rp50.000</option>
                  <option value="2">Rp50.000 - Rp100.000</option>
                  <option value="3">Rp100.000 - Rp300.000</option>
                </select>
              </div>
              <div className="category-filter mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    -- Category --
                  </option>
                  <option value="1">Sushie</option>
                  <option value="2">Ramen</option>
                  <option value="3">Udon</option>
                </select>
              </div>
              <div className="clear-filter">
                <button className="btn btn-danger fw-bold w-100 fs-7">
                  <i className="bi bi-trash3 mx-2"></i>
                  Hapus Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
