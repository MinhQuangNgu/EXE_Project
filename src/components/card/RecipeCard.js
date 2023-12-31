import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss';
const RecipeCard = ({ imageHeight = 350 }) => {

    const navigate = useNavigate();

    const [contents, setContents] = useState([
        {
            image: "https://res.cloudinary.com/sttruyen/image/upload/v1696209023/kjahvx90jdli2kokqcm1.jpg",
            name: "Việt Nam",
            place: "Hạ Long Bay",
            description: "Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. Thành phố được đặt theo tên của vịnh Hạ Long,"
        },
        {
            image: "https://res.cloudinary.com/sttruyen/image/upload/v1696208616/fg5rpw5nruik5xcsqvtg.webp",
            name: "Việt Nam",
            place: "Phú Quốc",
            description: "Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. Thành phố được đặt theo tên của vịnh Hạ Long,"
        }
    ]);
    const [index, setIndex] = useState(0);
    return (
        <div className="product_card">
            <div className='product_img'>
                <img src={contents[index].image} />
            </div>
            <div className='product_content'>
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
                            navigate('/tour/adsd');
                        }}>Chi tiết</button>
                    </div>
                </div>
            </div>
            <div className='product_love'>
                2000 <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    )
}

export default RecipeCard