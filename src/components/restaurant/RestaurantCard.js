import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';
const RestaurantCard = () => {

    const navigate = useNavigate();

    const [contents, setContents] = useState([
        {
            image: "https://res.cloudinary.com/sttruyen/image/upload/v1696214117/j4wrt1usv3uacubdtnlf.jpg",
            name: "Hải Phòng",
            place: "Ăn là nhớ",
            description: "Ăn là nhớ là quán ăn tại Hải Phòng với hơn 29 năm thành lập cùng với 30 món ăn các loại"
        },
        {
            image: "https://res.cloudinary.com/sttruyen/image/upload/v1696214240/xvliu6abxg44kmreufnz.jpg",
            name: "Hải Phòng",
            place: "Ăn là nhớ",
            description: "Với hơn 20 món ăn các loại được nấu bởi các đầu bếp chuyên nghiệp,"
        }
    ]);
    const [index, setIndex] = useState(0);
    return (
        <div className="product_card">
            <div className='product_img'>
                <img src={contents[index].image} />
            </div>
            <div className='product_content restaurant_content'>
                <div className='product_content_1'>
                    <div className='product_content_country'>
                        <h1>{contents[index].name}</h1>
                    </div>
                    <div className='product_content_name'>
                        <h3>{contents[index].place}</h3>
                    </div>
                    <div className='product_content_description'>
                        <p>{contents[index].description}</p>
                    </div>
                    <div className='product_content_btn'>
                        <button onClick={() => {
                            setIndex(prev => prev > 0 ? prev - 1 : 0);
                        }}><i className="fa-solid fa-caret-left"></i></button>
                        <button onClick={() => {
                            setIndex((prev) => prev >= contents.length - 1 ? 0 : prev + 1);
                        }}><i className="fa-solid fa-caret-right"></i></button>
                        <button onClick={() => {
                            navigate('/restaurant/asdsd')
                        }}>Chi tiết</button>
                    </div>
                </div>
            </div>
            <div className='product_love restaurant_love'>
                2000 <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    )
}

export default RestaurantCard