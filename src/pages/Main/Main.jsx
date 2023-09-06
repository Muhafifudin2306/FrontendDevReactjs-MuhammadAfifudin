import React from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Shibuya from "../../assets/images/shibuya.jpg";
import Profile from "../../assets/images/profile.jpg";

function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="py-5 my-2"></div>
      <div className="container-fluid p-4">
        <h3 className="fw-bold py-3 title-font">Semua Restaurant</h3>
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div className="resto-card border rounded shadow-sm">
              <div className="image-card">
                <img
                  className="w-100 rounded-top border border-bottom-0 position-relative object-fit-cover"
                  height="200"
                  src={Shibuya}
                  alt=""
                />
                <div className="layer w-100 layer-cover rounded-top"></div>
              </div>
              <div className="detail-card w-100 bg-white rounded-bottom p-3">
                <div className="detail-title mb-3">
                  <h6 className="fw-bold mb-1">
                    Shibuya Sushi - Fresh japanese sushi and fish
                  </h6>
                  <div className="facility-item d-flex gap-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="fs-7">(4.5/5)</span>
                  </div>
                </div>
                <div className="detail-facility mb-3">
                  <div className="facility-item mb-1">
                    <i className="bi bi-cart2"></i>
                    <span className="mx-2 fs-8">Sushi</span>
                  </div>
                  <div className="facility-item mb-1">
                    <i className="bi bi-wallet2"></i>
                    <span className="mx-2 fs-8">Rp25.000 - Rp 330.000</span>
                  </div>
                  <div className="facility-item mb-1">
                    <i className="bi bi-circle-fill text-success fs-8"></i>
                    <span className="mx-2 fs-8">Open Now</span>
                  </div>
                </div>
                <div className="detail-button">
                  <button
                    className="btn btn-primary fw-bold w-100 fs-7"
                    data-bs-toggle="modal"
                    data-bs-target="#restoModal"
                  >
                    Learn More
                  </button>
                  <div
                    className="modal fade"
                    id="restoModal"
                    tabindex="-1"
                    aria-labelledby="restoModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-6 fw-bold"
                            id="restoModalLabel"
                          >
                            Detail Restaurant
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-lg-7 col-md-6">
                              <div className="modal-image mb-3">
                                <img
                                  className="w-100 rounded-2 object-fit-cover"
                                  height="250"
                                  src={Shibuya}
                                  alt=""
                                />
                              </div>

                              <div className="resto-name mb-3">
                                <h5 className="fw-bold title-font">
                                  Shibuya Sushi - Fresh japanese sushi and fish
                                </h5>
                                <div className="facility-item d-flex gap-1">
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-fill text-warning"></i>
                                  <i className="bi bi-star-half text-warning"></i>
                                  <span className="fs-7">(4.5/5)</span>
                                </div>
                              </div>

                              <div className="detail-facility">
                                <div className="facility-item mb-1">
                                  <i className="bi bi-cart2"></i>
                                  <span className="mx-2 fs-8">Sushi</span>
                                </div>
                                <div className="facility-item mb-1">
                                  <i className="bi bi-wallet2"></i>
                                  <span className="mx-2 fs-8">
                                    Rp25.000 - Rp 330.000
                                  </span>
                                </div>
                                <div className="facility-item mb-1">
                                  <i className="bi bi-circle-fill text-success fs-8"></i>
                                  <span className="mx-2 fs-8">Open Now</span>
                                </div>
                              </div>
                              <div className="py-3">
                                <button
                                  className="btn btn-primary fw-bold w-100 fs-7"
                                  data-bs-toggle="modal"
                                  data-bs-target="#formModal"
                                >
                                  Berikan Penilaian Anda
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <div className="d-flex flex-column flex-lg-column-reverse">
                                <div className="user-feedback">
                                  <h6 className="fw-bold title-font my-3">
                                    Ringkasan Ulasan
                                  </h6>
                                  <div className="user-feedback">
                                    <div className="d-flex gap-3">
                                      <img
                                        src={Profile}
                                        className="object-fit-cover rounded-circle"
                                        height="40"
                                        width="40"
                                        alt=""
                                      />
                                      <div className="user-desc">
                                        <span className="fw-bold fs-7">
                                          Muhammad Afifudin
                                        </span>
                                        <div className="facility-item d-flex gap-1">
                                          <i className="bi bi-star-fill text-warning fs-8"></i>
                                          <i className="bi bi-star-fill text-warning fs-8"></i>
                                          <i className="bi bi-star-fill text-warning fs-8"></i>
                                          <i className="bi bi-star-fill text-warning fs-8"></i>
                                          <i className="bi bi-star-half text-warning fs-8"></i>
                                          <span className="fs-8">(4.5)</span>
                                        </div>
                                        <p className="fs-8">
                                          Makanan enak, hangat, dan sesuai
                                          dengan kantong
                                        </p>
                                      </div>
                                    </div>
                                    <p className="text-primary text-decoration-underline fs-8">
                                      Muat Lainnya
                                    </p>
                                  </div>
                                </div>
                                <div className="location">
                                  <h6 className="fw-bold title-font">
                                    Lokasi Restaurant
                                  </h6>
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058504.2250734796!2d105.86362518733752!3d-6.599228665057419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee316a63af01b%3A0x56735c8cb03b6aa9!2sShibuya%20Resto%20Cirebon!5e0!3m2!1sid!2sid!4v1693980193041!5m2!1sid!2sid"
                                    className="w-100"
                                    title="myFrame"
                                    style={{ border: "0" }}
                                    allowfullscreen=""
                                    loading="lazy"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="formModal"
                    tabindex="-1"
                    aria-labelledby="formModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-6 fw-bold"
                            id="formModalLabel"
                          >
                            Masukan Untuk Restaurant
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div class="mb-3">
                              <label for="name" class="form-label fs-7 fw-bold">
                                Nama Anda
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="Rico Fajar"
                              />
                            </div>
                            <div class="mb-3">
                              <label
                                for="rating"
                                class="form-label fs-7 fw-bold"
                              >
                                Rating Anda
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="rating"
                                placeholder="4.5"
                              />
                            </div>
                            <div class="form-group">
                              <label for="feedback" className="fs-7 fw-bold">
                                Masukan Anda
                              </label>
                              <textarea
                                class="form-control"
                                id="feedback"
                                rows="3"
                                placeholder="Masukan Anda"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
