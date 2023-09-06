import React, { useState, useEffect } from "react";
import axios from "axios";

import Profile from "../../assets/images/profile.jpg";

function MainPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [visibleRestaurants, setVisibleRestaurants] = useState(8);
  const [showOnlyOpenNow, setShowOnlyOpenNow] = useState(false); // State untuk filter status Open Now
  const [selectedCategory, setSelectedCategory] = useState("All"); // State untuk kategori yang dipilih
  const [selectedPriceRange, setSelectedPriceRange] = useState("All"); // State untuk harga yang dipilih

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [visibleRestaurants]);

  const loadMoreData = () => {
    setVisibleRestaurants(visibleRestaurants + 8);
  };

  // Filter restoran berdasarkan status
  const filteredRestaurantsByStatus = showOnlyOpenNow
    ? restaurants.filter((restaurant) => restaurant.status === 1)
    : restaurants;

  // Filter restoran berdasarkan kategori
  const filteredRestaurantsByCategory =
    selectedCategory === "All"
      ? filteredRestaurantsByStatus
      : filteredRestaurantsByStatus.filter(
          (restaurant) => restaurant.category_name === selectedCategory
        );

  // Filter restoran berdasarkan harga
  const filteredRestaurantsByPrice =
    selectedPriceRange === "All"
      ? filteredRestaurantsByCategory
      : filteredRestaurantsByCategory.filter(
          (restaurant) => restaurant.price_name === selectedPriceRange
        );

  // Dapatkan daftar unik dari rentang harga yang tersedia
  const uniquePriceRanges = Array.from(
    new Set(restaurants.map((restaurant) => restaurant.price_name))
  );

  // Dapatkan daftar unik dari kategori-kategori yang tersedia
  const uniqueCategories = Array.from(
    new Set(restaurants.map((restaurant) => restaurant.category_name))
  );
  // Fungsi untuk mereset semua filter ke nilai awal atau default
  const resetFilters = () => {
    setShowOnlyOpenNow(false);
    setSelectedCategory("All");
    setSelectedPriceRange("All");
  };
  // Membuat variabel yang menunjukkan apakah setidaknya satu filter telah diterapkan
  const filtersApplied =
    showOnlyOpenNow ||
    selectedCategory !== "All" ||
    selectedPriceRange !== "All";

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
                  type="checkbox"
                  className="form-check-input"
                  id="showOnlyOpenNow"
                  role="switch"
                  checked={showOnlyOpenNow}
                  onChange={() => setShowOnlyOpenNow(!showOnlyOpenNow)}
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
                id="priceRangeSelect"
                className="form-select"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
              >
                <option value="All">Semua Harga</option>
                {uniquePriceRanges.map((priceRange) => (
                  <option key={priceRange} value={priceRange}>
                    {priceRange}
                  </option>
                ))}
              </select>
            </div>
            <div className="category-filter">
              <select
                id="categorySelect"
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">Semua Kategori</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="clear-filter">
            {filtersApplied && ( // Menampilkan tombol "Hapus Filter" hanya jika setidaknya satu filter telah diterapkan
              <button
                className="btn btn-danger fw-bold px-2 fs-7"
                onClick={resetFilters}
              >
                <i className="bi bi-trash3 mx-2"></i>
                Hapus Filter
              </button>
            )}
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
              type="checkbox"
              className="form-check-input"
              id="showOnlyOpenNowMobile"
              role="switch"
              checked={showOnlyOpenNow}
              onChange={() => setShowOnlyOpenNow(!showOnlyOpenNow)}
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
                  id="priceRangeSelectMobile"
                  className="form-select"
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                >
                  <option value="All">Semua Harga</option>
                  {uniquePriceRanges.map((priceRange) => (
                    <option key={priceRange} value={priceRange}>
                      {priceRange}
                    </option>
                  ))}
                </select>
              </div>
              <div className="category-filter mb-3">
                <select
                  id="categorySelectMobile"
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">Semua Kategori</option>
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="clear-filter">
                {filtersApplied && ( // Menampilkan tombol "Hapus Filter" hanya jika setidaknya satu filter telah diterapkan
                  <button
                    className="btn btn-danger fw-bold px-2 fs-7 w-100"
                    onClick={resetFilters}
                  >
                    <i className="bi bi-trash3 mx-2"></i>
                    Hapus Filter
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 my-2"></div>
      <div className="container-fluid p-4">
        <h3 className="fw-bold py-3 title-font">Semua Restaurant</h3>
        <div className="row">
          {filteredRestaurantsByPrice
            .slice(0, visibleRestaurants)
            .map((restaurant) => (
              <div className="col-md-4 col-lg-3 mb-3">
                <div className="resto-card border rounded shadow-sm">
                  <div className="image-card">
                    <img
                      className="w-100 rounded-top border border-bottom-0 position-relative object-fit-cover"
                      height="200"
                      src={restaurant.image}
                      alt=""
                    />
                    <div className="layer w-100 layer-cover rounded-top"></div>
                  </div>
                  <div className="detail-card w-100 bg-white rounded-bottom p-3">
                    <div className="detail-title mb-3">
                      <h6 className="fw-bold mb-1">
                        {restaurant.restaurant_name}
                      </h6>
                      <div className="facility-item d-flex gap-1">
                        {[...Array(Math.floor(restaurant.rating))].map(
                          (_, index) => (
                            <i
                              key={index}
                              className="bi bi-star-fill text-warning"
                            ></i>
                          )
                        )}
                        <span className="fs-7">({restaurant.rating}/5)</span>
                      </div>
                    </div>
                    <div className="detail-facility mb-3">
                      <div className="facility-item mb-1">
                        <i className="bi bi-cart2"></i>
                        <span className="mx-2 fs-8">
                          {restaurant.category_name}
                        </span>
                      </div>
                      <div className="facility-item mb-1">
                        <i className="bi bi-wallet2"></i>
                        <span className="mx-2 fs-8">
                          {restaurant.price_name}
                        </span>
                      </div>
                      <div className="facility-item mb-1">
                        {restaurant.status === 1 ? (
                          <span>
                            <i className="bi bi-circle-fill text-success fs-8"></i>
                            <span className="mx-2 fs-8">Open Now</span>
                          </span>
                        ) : (
                          <span>
                            <i className="bi bi-circle-fill text-danger fs-8"></i>
                            <span className="mx-2 fs-8">Close</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="detail-button">
                      <button
                        className="btn btn-primary fw-bold w-100 fs-7"
                        data-bs-toggle="modal"
                        data-bs-target={`#restoModal-${restaurant.id}`}
                      >
                        Learn More
                      </button>

                      <div
                        className="modal fade"
                        id={`restoModal-${restaurant.id}`}
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
                                      src={restaurant.image}
                                      alt=""
                                    />
                                  </div>

                                  <div className="resto-name mb-3">
                                    <h5 className="fw-bold title-font">
                                      {restaurant.restaurant_name}
                                    </h5>
                                    <div className="facility-item d-flex gap-1">
                                      {[
                                        ...Array(Math.floor(restaurant.rating)),
                                      ].map((_, index) => (
                                        <i
                                          key={index}
                                          className="bi bi-star-fill text-warning"
                                        ></i>
                                      ))}
                                      <span className="fs-7">
                                        ({restaurant.rating}/5)
                                      </span>
                                    </div>
                                  </div>

                                  <div className="detail-facility">
                                    <div className="facility-item mb-1">
                                      <i className="bi bi-cart2"></i>
                                      <span className="mx-2 fs-8">
                                        {restaurant.category_name}
                                      </span>
                                    </div>
                                    <div className="facility-item mb-1">
                                      <i className="bi bi-wallet2"></i>
                                      <span className="mx-2 fs-8">
                                        {restaurant.price_name}
                                      </span>
                                    </div>
                                    <div className="facility-item mb-3">
                                      {restaurant.status === 1 ? (
                                        <span>
                                          <i className="bi bi-circle-fill text-success fs-8"></i>
                                          <span className="mx-2 fs-8">
                                            Open Now
                                          </span>
                                        </span>
                                      ) : (
                                        <span>
                                          <i className="bi bi-circle-fill text-danger fs-8"></i>
                                          <span className="mx-2 fs-8">
                                            Close
                                          </span>
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                  <div className="d-flex flex-column flex-lg-column-reverse">
                                    <div className="user-feedback">
                                      <h6 className="fw-bold title-font my-3">
                                        Ringkasan Ulasan
                                      </h6>
                                      {restaurant.feedbacks.map((feedback) => (
                                        <>
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
                                                  {feedback.name}
                                                </span>
                                                <div className="facility-item d-flex gap-1 mb-1">
                                                  {[
                                                    ...Array(
                                                      Math.floor(
                                                        feedback.rating
                                                      )
                                                    ),
                                                  ].map((_, index) => (
                                                    <i
                                                      key={index}
                                                      className="bi bi-star-fill text-warning fs-8"
                                                    ></i>
                                                  ))}
                                                  <span className="fs-8">
                                                    ({feedback.rating})
                                                  </span>
                                                </div>
                                                <div className="message">
                                                  <p className="fs-8">
                                                    {feedback.feedback_message}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                    <div className="location">
                                      <h6 className="fw-bold title-font">
                                        Lokasi Restaurant
                                      </h6>
                                      <iframe
                                        src={restaurant.lokasi}
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {filteredRestaurantsByPrice.length === 0 && (
          <div className="text-center py-4">
            <p> -- Tidak ada data -- </p>
          </div>
        )}
        {visibleRestaurants < filteredRestaurantsByPrice.length && (
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-secondary fw-bold fs-7"
              onClick={loadMoreData}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default MainPage;
