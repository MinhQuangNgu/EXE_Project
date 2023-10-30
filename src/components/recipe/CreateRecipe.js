import React, { useCallback, useState } from 'react'
import './style.scss'
import { Editor } from "react-draft-wysiwyg";
import { useDropzone } from 'react-dropzone'
import {
    EditorState,
    ContentState,
    convertToRaw,
    Modifier,
    convertFromHTML,
} from "draft-js";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const CreateRecipe = () => {


    const navigate = useNavigate();

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, [])

    const [image, setImage] = useState('asds');

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleChange = (data) => {
        setEditorState(data);
    };
    const onImageUpload = (file) => {
        return new Promise((resolve, reject) => {
            uploadCallback(file)
                .then((response) => {
                    // setUploadImage(true);
                    resolve({ data: { link: response.data.link } });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const uploadCallback = (file) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "sttruyenxyz");
            // axios
            //     .post(
            //         "https://api.cloudinary.com/v1_1/sttruyen/image/upload",
            //         formData,
            //         {
            //             headers: { "X-Requested-With": "XMLHttpRequest" },
            //             onUploadProgress: (progressEvent) => {
            //                 const percentCompleted = Math.round(
            //                     (progressEvent.loaded * 100) / progressEvent.total
            //                 );
            //             },
            //         }
            //     )
            //     .then((response) => {
            //         resolve({ data: { link: response.data.secure_url } });
            //     })
            //     .catch((error) => {
            //         reject(error);
            //     });
        });
    };
    const handleBackPage = () => {
        navigate(-1);
    }
    return (
        <div style={{marginTop:"20px"}} className='container'>
            <div className='tour_detail'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='tour_calendar'>
                            <div className='tour_calendar_title'>
                                <div className='tour_calendar_icons'>
                                    <i className="fa-solid fa-info"></i>
                                </div>
                                <i>Điểm nhấn lịch trình</i>
                            </div>
                            <div className='tour_calendar_content'>
                                <div contentEditable={true}>
                                    Du lịch Hà Nội mùa Thu - Yên Tử - Hạ Long - Sapa bay Vietnam Airlines từ Sài Gòn 2023. Tạm biệt cái nắng hè oi bức, mùa Thu Hà Nội từ tháng 9 đến hết tháng 11 mang đến không khí dễ chịu hơn nhiều với những cơn gió hanh hao khi thì mát mẻ, khi se lạnh. Đây cũng là khoảng thời gian lý tưởng nhất để các du khách khắp nơi có thể bắt đầu hành trình thăm thú và khám phá khắp các phố phường Hà Nội. Du lịch mùa Thu trong nước tại Hà Nội, bạn sẽ được đắm chìm trong không gian dịu dàng trầm lặng, hít hà hương cốm thoang thoảng trong gió thu và khắp các con phố phảng phất mùi hoa sữa nồng nàn đến xao xuyến. Hãy cùng Du Lịch Việt tận hưởng chuyến hành trình khám phá du lich mua thu Ha Noi với những điểm đến đẹp và lãng mạn nhất dưới đây nhé.
                                </div>
                            </div>
                        </div>
                        <div className='tour_calendar_2'>
                            <div className='tour_calendar_title'>
                                <div className='tour_calendar_icons'>
                                    <i className="fa-solid fa-info"></i>
                                </div>
                                <i>Lịch trình</i>
                            </div>
                            <div className='tour_calendar_content'>
                                <div contentEditable={true}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='tour_guide'>
                            <div className='tour_guide_title'>
                                <i>Hướng dẫn viên</i>
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
                        <div className='tour_summary'>
                            <div className='tour_summary_title'>
                                <h1 contentEditable={true}>Du lịch Hà Nội mùa Thu - Yên Tử - Hạ Long - Sapa bay Vietnam Airlines từ Sài Gòn 2023</h1>
                            </div>
                            <div className='tour_summary_item'>
                                <div>
                                    Thời gian
                                </div>
                                <span contentEditable={true}>6 ngày 5 đêm</span>
                            </div>
                            <div className='tour_summary_item'>
                                <div>
                                    Lượt thích
                                </div>
                                <span>0 <i style={{ color: 'red' }} className="fa-solid fa-heart"></i></span>
                            </div>
                            <div className='tour_summary_item'>
                                <div>
                                    Lượt đặt
                                </div>
                                <span>0 <i className="fa-regular fa-calendar"></i></span>
                            </div>
                            <div className='tour_summary_item'>
                                <div>
                                    Giá
                                </div>
                                <span contentEditable={true}>2.000.000 VNĐ</span>
                            </div>
                            <div className='tour_summary_item'>
                                <div>
                                    Vận chuyển
                                </div>
                                <span contentEditable={true}>Xe du lịch, máy bay</span>
                            </div>
                        </div>
                        <div className='tour_image'>
                            <div className='tour_guide_title'>
                                <i>Ảnh chuyến đi
                                    <button className='btn btn-primary' style={{marginLeft:"10px",height:"30px",fontSize:"11px"}}>Thêm ảnh</button>
                                </i>
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
            <div className='back_button'>
                <button onClick={handleBackPage}> <i style={{ marginRight: "10px" }} className="fa-solid fa-arrow-left"></i>Quay lại</button>
            </div>
        </div>
    )
}

export default CreateRecipe