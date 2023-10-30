import React, { useEffect, useState } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const RestaurantDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const [comment, setComment] = useState('');
  const [defaultStar, setDefaultStar] = useState(5);
  const [rating, setRating] = useState(0);
  const [showIcons, setShowICons] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    // You can implement the logic to post the comment here
    console.log('Comment posted:', comment);
  };



  const handleRatingChange = (value) => {
    setRating(value);
  };

  const renderStars = () => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= defaultStar;
      starIcons.push(
        <i
          style={{ margin: "0 3px", color: filled && "#CF3700" }}
          key={i}
          className={`fa-solid fa-star`}
        ></i>
      );
    }
    return starIcons;
  };
  return (
    <div className='recipe_bg'>
      <div className='container'>
        <div className='tour_detail'>
          <div className='row'>
            <div className='col-8'>
              <div className='tour_calendar'>
                <div className='tour_calendar_title'>
                  <div className='tour_calendar_icons'>
                    <i className="fa-solid fa-info"></i>
                  </div>
                  <i>Điểm nhấn nhà hàng</i>
                </div>
                <div className='tour_calendar_content'>
                  <div>
                    Nhà hàng mới khai trương cần có chiến lược và nguyên tắc giới thiệu nhà hàng hấp dẫn. Điều này sẽ giúp nhà hàng tiếp cận được nhiều khách hàng tiềm năng. Đây cũng là cách để gây ấn tượng đối với khách hàng. Trong quá trình kinh doanh, để đảm bảo phát triển bền vững, nhà hàng cần không ngừng quảng bá và giới thiệu thương hiệu. Vậy giới thiệu sao cho ấn tượng và in đậm dấu ấn trong lòng khách hàng? Cùng Nhà Hàng Số khám phá ngay những cách giới thiệu nhà hàng qua bài viết dưới đây.</div>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='tour_guide'>
                <div className='tour_guide_title'>
                  <i>Người đăng</i>
                </div>
                <div className='tour_guide_detail'>
                  <div className='tour_guide_img'>
                    <img src="https://res.cloudinary.com/sttruyen/image/upload/v1696214240/xvliu6abxg44kmreufnz.jpg" />
                  </div>
                  <div className='tour_guide_content'>
                    <div>
                      Nguyễn Minh Quang
                    </div>
                    <div>
                      Follower: 200
                    </div>
                    <div className='tour_guid_btn'>
                      <button>Theo dõi</button>
                      <button>Chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tour_image'>
                <div className='tour_guide_title'>
                  <i>Vị trí</i>
                </div>
                <div className='tour_guid_location'>
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://res.cloudinary.com/sttruyen/image/upload/v1698671237/qcrredoxqjuqjoqjgmrl.png" />
                </div>
              </div>
              <div className='tour_image'>
                <div className='tour_guide_title'>
                  <i>Ảnh nhà hàng</i>
                </div>
                <div className='tour_guid_img'>
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className='tour_guide_img_detail'>
                        <img src="https://res.cloudinary.com/sttruyen/image/upload/v1696209023/kjahvx90jdli2kokqcm1.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='tour_guide_img_detail'>
                        <img src="https://res.cloudinary.com/sttruyen/image/upload/v1696208616/fg5rpw5nruik5xcsqvtg.webp" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='tour_guide_img_detail'>
                        <img src="https://res.cloudinary.com/sttruyen/image/upload/v1696208559/ro1jxaq2stfrxdtgy5zj.webp" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe-comments-rate'>
          <section>
            <div style={{ marginTop: "50px" }} className="container text-dark">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-10 col-xl-10">
                  <div className="card">
                    <div className="card-body p-4">
                      <div className="d-flex flex-start w-100">
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                          alt="avatar"
                          width="65"
                          height="65"
                        />
                        <div className="w-100">
                          <h5>Minh Quang</h5>
                          <div className="rating">
                            <input
                              type="radio"
                              id="star1"
                              name="rating"
                              value="1"
                              checked={rating === 1}
                              onChange={() => handleRatingChange(1)}
                            />
                            <label htmlFor="star1">
                              <i className="fa-solid fa-star"></i>
                            </label>

                            <input
                              type="radio"
                              id="star2"
                              name="rating"
                              value="2"
                              checked={rating === 2}
                              onChange={() => handleRatingChange(2)}
                            />
                            <label htmlFor="star2">
                              <i className="fa-solid fa-star"></i>
                            </label>

                            <input
                              type="radio"
                              id="star3"
                              name="rating"
                              value="3"
                              checked={rating === 3}
                              onChange={() => handleRatingChange(3)}
                            />
                            <label htmlFor="star3">
                              <i className="fa-solid fa-star"></i>
                            </label>

                            <input
                              type="radio"
                              id="star4"
                              name="rating"
                              value="4"
                              checked={rating === 4}
                              onChange={() => handleRatingChange(4)}
                            />
                            <label htmlFor="star4">
                              <i className="fa-solid fa-star"></i>
                            </label>

                            <input
                              type="radio"
                              id="star5"
                              name="rating"
                              value="5"
                              checked={rating === 5}
                              onChange={() => handleRatingChange(5)}
                            />
                            <label htmlFor="star5">
                              <i className="fa-solid fa-star"></i>
                            </label>
                          </div>
                          <div className="form-outline">
                            <textarea placeholder='What is your view?' className="form-control" id="textAreaExample" rows="4"></textarea>

                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <div className='icons_container'>
                              {/* <div onClick={() => {
                                                                setShowICons(!showIcons);
                                                            }}>
                                                            🙂
                                                            </div>
                                                            {showIcons && <div className='icons_picker'>
                                                            <Picker
                                                            data={data}
                                                            onEmojiSelect={(e) => {
                                                                // const content = contentRef.current;
                                                                // if (!content) {
                                                                //     return;
                                                                // }
                                                                // content.innerHTML = comment + e?.native;
                                                                // setComment(content.innerHTML);
                                                            }}
                                                        />
                                                            </div>} */}
                            </div>
                            <button type="button" className="btn btn-primary">
                              Gửi <i className="fas fa-long-arrow-alt-right ms-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='recipe-comments'>
          <section>
            <div className="container my-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 col-lg-10 col-xl-10">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-start align-items-center">
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                          alt="avatar"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                          <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
                        </div>
                      </div>

                      <p className="mt-3 mb-4 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                      </p>

                      <div className="small d-flex justify-content-start">
                        <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                          <i className="far fa-thumbs-up me-2"></i>
                          <p className="mb-0">Like</p>
                        </div>
                        <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                          <i className="far fa-comment-dots me-2"></i>
                          <p className="mb-0">Comment</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                      <div style={{ marginLeft: "40px" }} className="card-body">
                        <div className="d-flex flex-start align-items-center">
                          <img
                            className="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            alt="avatar"
                            width="60"
                            height="60"
                          />
                          <div>
                            <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                            <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
                          </div>
                        </div>

                        <p className="mt-3 mb-4 pb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                        </p>

                        <div className="small d-flex justify-content-start">
                          <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                            <i className="far fa-thumbs-up me-2"></i>
                            <p className="mb-0">Like</p>
                          </div>
                          <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                            <i className="far fa-comment-dots me-2"></i>
                            <p className="mb-0">Comment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-start align-items-center">
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                          alt="avatar"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                          <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
                        </div>
                      </div>

                      <p className="mt-3 mb-4 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                      </p>

                      <div className="small d-flex justify-content-start">
                        <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                          <i className="far fa-thumbs-up me-2"></i>
                          <p className="mb-0">Like</p>
                        </div>
                        <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                          <i className="far fa-comment-dots me-2"></i>
                          <p className="mb-0">Comment</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                      <div class="d-flex flex-start w-100">
                        <img class="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                          height="40" />
                        <div class="form-outline w-100">
                          <textarea placeholder='Bình luận' class="form-control" id="textAreaExample" rows="4"
                            style={{ backgroundColor: "#fff" }}></textarea>
                        </div>
                      </div>
                      <div class="float-end mt-2 pt-1">
                        <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                        <button style={{ marginLeft: "10px" }} type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
                      </div>
                    </div>
                    <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                      <div style={{ marginLeft: "40px" }} className="card-body">
                        <div className="d-flex flex-start align-items-center">
                          <img
                            className="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            alt="avatar"
                            width="60"
                            height="60"
                          />
                          <div>
                            <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                            <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
                          </div>
                        </div>

                        <p className="mt-3 mb-4 pb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                        </p>

                        <div className="small d-flex justify-content-start">
                          <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                            <i className="far fa-thumbs-up me-2"></i>
                            <p className="mb-0">Like</p>
                          </div>
                          <div style={{ cursor: "pointer" }} className="d-flex align-items-center me-3">
                            <i className="far fa-comment-dots me-2"></i>
                            <p className="mb-0">Comment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetail