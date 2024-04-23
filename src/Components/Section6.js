import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import image from "../assests/profile.png"
import Star from "../assests/star.png"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function Section6(){
    return(
       <div className="background">
         <div className="py-5">
      <center>
<h1 className="color text text-center" style={{width:"70vw"}}>Stories from our valued customers!</h1>
</center>

<Container className="py-4">
    <Row>

      <Swiper
      
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          300:{
            slidesPerView: 1,
            spaceBetween:0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '" style="background-color: #3A643B"></span>';
            }
        }}
      
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="py-5">
        <Card style={{borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C"}} >
        <h6 className="font" style={{padding:'15px',borderRadius:"25px 25px 0px 0px",background:"#ECE7FF"}}>Consulted for Skin</h6> 
        <Container className="px-5 ">
        <Row className="py-4">
            <Col lg={3} sm={4} xs={3}>
            <img src={image} alt="circle" stryle={{backgroundColor:"#515151"}} width={60}></img>
            </Col>
            <Col lg={6} sm={4} xs={4}>
            <p className="para1">Sophie Moore</p>
            <p className="para2">Chennai </p>
            </Col>
           <Col>
           <p className="data">17/02/24</p>
            </Col>
        </Row>
        <img src={Star} alt="5-Star"></img>
<p className="text7 mt-3">“One of a kind service”</p>
<p className="mb-5 para3">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
        </Container>
       </Card>
       </SwiperSlide >
      
        <SwiperSlide className="py-5">
        <Card style={{borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C"}} >
        <h6 className="font" style={{padding:'15px',borderRadius:"25px 25px 0px 0px",background:"#ECFEE7"}}>Consulted for hair</h6> 
        <Container className="px-5 ">
        <Row className="py-4">
        <Col lg={3} sm={4} xs={3}>
            <img src={image} alt="circle" width={60}></img>
            </Col>
            <Col lg={6} sm={4} xs={4}>
            <p className="para1">Sophie Moore</p>
            <p className="para2">Chennai </p>
            </Col>
           <Col>
           <p className="data">17/02/24</p>
            </Col>
        </Row>
        <img src={Star} alt="5-Star"></img>
<p className="text7 mt-3">“One of a kind service”</p>
<p className="mb-5 para3">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
        </Container>
       </Card>
       </SwiperSlide>
        
       
        <SwiperSlide className="py-5">
        <Card style={{borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C"}} >
        <h6 className="font" style={{padding:'15px',borderRadius:"25px 25px 0px 0px",background:"#ECFEE7"}}>Consulted for hair</h6> 
        <Container className="px-5 ">
        <Row className="py-4">
        <Col lg={3} sm={4} xs={3}>
            <img src={image} alt="circle" width={60}></img>
            </Col>
            <Col lg={6} sm={4} xs={4}>
            <p className="para1">Sophie Moore</p>
            <p className="para2">Chennai </p>
            </Col>
           <Col>
           <p className="data">17/02/24</p>
            </Col>
        </Row>
        <img src={Star} alt="5-Star"></img>
<p className="text7 mt-3">“One of a kind service”</p>
<p className="mb-5 para3">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
        </Container>
       </Card>
       </SwiperSlide>
       <SwiperSlide className="py-5">
        <Card style={{borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C"}} >
        <h6 className="font" style={{padding:'15px',borderRadius:"25px 25px 0px 0px",background:"#ECE7FF"}}>Consulted for Skin</h6> 
        <Container className="px-5 ">
        <Row className="py-4">
        <Col lg={3} sm={4} xs={3}>
            <img src={image} alt="circle" width={60}></img>
            </Col>
            <Col lg={6} sm={4} xs={4}>
            <p className="para1">Sophie Moore</p>
            <p className="para2">Chennai </p>
            </Col>
           <Col>
           <p className="data">17/02/24</p>
            </Col>
        </Row>
        <img src={Star} alt="5-Star"></img>
<p className="text7 mt-3">“One of a kind service”</p>
<p className="mb-5 para3">Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
        </Container>
       </Card>
       </SwiperSlide>
        </Swiper>
    </Row>

</Container>
</div>
       </div>
    )
}

export default Section6;