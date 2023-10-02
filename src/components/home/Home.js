import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss'
import RecipeCard from '../card/RecipeCard';
import ProfileCard from '../card/ProfileCard';
import RestaurantCard from '../restaurant/RestaurantCard';
const Home = () => {
  return (
    <>
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ height: "100vh", objectFit: "cover" }} className="w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1696209092/ojs2worxc5u8iqlff7tv.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div style={{ color: "white" }} className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">ENJOY THE WORLD</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{ height: "100vh", objectFit: "cover" }} className="w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1696208616/fg5rpw5nruik5xcsqvtg.webp" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div style={{ color: "white" }} className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">
                        Experience
                      </h1>
                      <h1 className="display-2 mb-5 animated slideInDown">
                        the best trip ever
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
              <h1 style={{ fontWeight: "700" }} className="display-5 mb-3">Tour nổi bật</h1>
              <p>Những tour được yêu thích nhiều nhất.</p>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RecipeCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RecipeCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RecipeCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RecipeCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RecipeCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RecipeCard />
                </div>
                <div className="col-12 text-center">
                  <Link className="btn btn-primary rounded-pill py-3 px-5" to="/search">Hiển thị thêm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
              <h1 style={{ fontWeight: "700" }} className="display-5 mb-3">Quán ăn nổi bật</h1>
              <p>Những tour mới của các hướng dẫn viên được yêu thích nhất.</p>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RestaurantCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RestaurantCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RestaurantCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RestaurantCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RestaurantCard />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <RestaurantCard />
                </div>
                <div className="col-12 text-center">
                  <Link className="btn btn-primary rounded-pill py-3 px-5" to="/search">Hiển thị thêm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light bg-icon py-6 mb-5">
        <div className="container">
          <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 style={{ fontWeight: "700",fontSize:"28px" }} className="display-5 mb-3">Hướng dẫn viên được yêu thích</h1>
            <p>Những hướng dẫn viên có số lượng theo dõi lớn nhất với cũng cống hiến vô cùng lớn của họ.</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <ProfileCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfileCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfileCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfileCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Home