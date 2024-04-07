import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide_1 from "../../assets/images/mai-chain-gallery-hanoi-hotel-pc.webp"
import Slide_2 from "../../assets/images/mai-chain-gallery-seoul-signiel-pc.webp"
import Slide_3 from "../../assets/images/mai-chain-gallery-busan-signiel-pc.webp"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { FaAngleRight } from "react-icons/fa6";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const SliderHotel = () => {
    return (
        <>
            <div className='DescHotel'>
                <div className='container'>
                    <Swiper
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper2">
                        <SwiperSlide>
                            <div className='row'>
                                <img src={Slide_2} loading='lazy'>
                                </img>
                                <div className='DescContent'>
                                    <div className='DescContent__title'>
                                        HOTEL SEOUL
                                    </div>
                                    <div className='DescContent__desc'>
                                    LOTTE HOTEL SEOUL, Korea's premier luxury business hotel, boasts 1,015 rooms and is located in Sogong-dong, Seoul. The hotel’s optimal location makes it easily accessible from Seoul’s major sightseeing spots such as Myeong-dong, Euljiro, and Cheonggyecheon.
                                    </div>
                                    <div className='DescContent__button'>
                                        <Link to="detail">
                                            Vui lòng bấm vào đây
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                                <img src={Slide_3} loading='lazy'>
                                </img>
                                <div className='DescContent'>
                                    <div className='DescContent__title'>
                                        SIGNIEL BUSAN
                                    </div>
                                    <div className='DescContent__desc'>
                                        SIGNIEL BUSAN is a 260-room luxury hotel located in the LCT Tower, a landmark in Haeundae. As the second hotel from SIGNIEL following SIGNIEL SEOUL, SIGNIEL BUSAN provides the perfect journey to enjoy true relaxation with fantastic ocean views of Haeundae, Busan.
                                    </div>
                                    <div className='DescContent__button'>
                                        <Link to="detail">
                                            Vui lòng bấm vào đây
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                                <img src={Slide_1} loading='lazy'>
                                </img>
                                <div className='DescContent'>
                                    <div className='DescContent__title'>
                                        HOTEL HANOI
                                    </div>
                                    <div className='DescContent__desc'>
                                        Nằm trên những tầng cao nhất của toà nhà 65 tầng tráng lệ, khách sạn Lotte Hà Nội tự hào là đại diện cho tiêu chuẩn khách sạn 5 sao quốc tế mới tại Hà Nội nói riêng và Việt Nam nói chung.
                                    </div>
                                    <div className='DescContent__button'>
                                        <Link to="detail">
                                            Vui lòng bấm vào đây
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderHotel;