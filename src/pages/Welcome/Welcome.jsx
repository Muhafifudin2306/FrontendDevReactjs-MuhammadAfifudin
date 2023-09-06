import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-sushi.png";

function WelcomePage() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-md-8 col-lg-5 col-12">
            <div className="welcome-card bg-white border rounded shadow-sm">
              <div className="px-4 py-3">
                <div className="card-image">
                  <img
                    className="object-fit-contain d-block mx-auto"
                    width="200"
                    src={logo}
                    alt=""
                  />
                </div>
                <div className="card-text mb-3">
                  <h3 className="title-font text-center">
                    Welcome to Sushigiri
                  </h3>
                  <p className="text-center fs-5">
                    tempat cari restoran jepang terlengkap di Semarang
                  </p>
                </div>

                <div className="card-button mb-3">
                  <NavLink
                    type="button"
                    className="btn btn-primary w-100 text-uppercase fw-bold fs-6 title-font"
                    to="/main"
                  >
                    Lanjutkan
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
