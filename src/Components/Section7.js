import { Container,Row,Col,Card, Nav } from "react-bootstrap";
import profile from "../assests/profile.png";
import card from "../assests/card-image.png";
import scholar from "../assests/scholar.png";
import Cap1 from "../assests/caption.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Section7() {
  return (
    <div className="py-5">
      <center>
        <h1 className="color text text-center" style={{ width: '70vw' }}>
          Meet our Ayurveda experts
        </h1>
      </center>
      <Container className="py-5">
        <Row className="swiper-container">
          <Swiper
           cssMode={true}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              300: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1000: { slidesPerView: 3, spaceBetween: 30 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={true}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '" style="background-color: #3A643B"></span>'
                );
              },
            }}
            modules={[Pagination,Autoplay,Navigation]}
            className="mySwiper"
          
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <center className="py-5">
                  <Card
                    style={{
                      background: 'rgba(255, 247, 226, 1)',
                      borderColor: '#FFF1CF',
                      borderRadius: '25px',
                      boxShadow: '0px 4px 9px 0px #0000001C',
                      width: '17rem',
                    }}
                  >
                    <Card.Body>
                      <div className="px-2">
                        <img src={profile} alt="profile" />
                        <Card.ImgOverlay>
                          <img src={card} alt="4.5-star" />
                        </Card.ImgOverlay>
                        <h5 className="font">Dr. Vaishali sharma</h5>
                        <p className="data py-0 mb-2 color2 text-center">
                          Ayurveda Practitioner (BAMS, MD)
                        </p>
                        <p className="py-0 mb-2">
                          <img src={scholar} alt="profile-card" /> 25 years of
                          experience
                        </p>
                        <img src={Cap1} alt="caption" />
                      </div>
                    </Card.Body>
                    <h6
                      className="mb-0 text-white text-center"
                      style={{
                        padding: '15px',
                        borderRadius: '0px 0px 25px 25px',
                        background: '#3A643B',
                        fontSize: '20px',
                      }}
                    >
                      Book a session
                    </h6>
                  </Card>
                </center>
              </SwiperSlide>
            ))}
             
          </Swiper>
       
        </Row>
      </Container>
    </div>
  );
}

export default Section7;
