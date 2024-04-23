import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function Section5(){
    return(
        <>
        <div className="py-5">
        <center>
  <h1 className="color text text-center" >Our ayurvedic approach </h1>
  <p  className="text3 py-3 color2" >At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions. </p>
        </center>
        <Container className="mb-5">
           <Row>
           <Swiper
      slidesPerView={4}
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
          slidesPerView: 4,
          spaceBetween: 25,
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
          <SwiperSlide>
            
                <Card style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF",borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C",borderTop: "5px solid #3A643B"}}>
                   <center className="py-5 px-2">
                   <h1 className="text-white" style={{padding:"18px",width:"90px",backgroundColor:"#3A643B",borderRadius:"50%"}}>1</h1>
                   <h4 className="color font py-2">Make Appointment</h4>
                   <p className="  color2">You must make an <br/> appointment  in advance,to <br/> choose the service and date.</p>
                   </center>
                </Card>  
                
           </SwiperSlide>
           <SwiperSlide>
                <Card style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF",borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C",borderTop: "5px solid #3A643B"}}>
                   <center className="py-5 px-2">
                   <h1 className="text-white" style={{padding:"18px",width:"90px",backgroundColor:"#3A643B",borderRadius:"50%"}}>2</h1>
                   <h4 className="color font py-2">Consultations</h4>
                   <p className="  color2">The next stage involves a<br/> thorough consultation with <br/> an Ayurveda practitioner.</p>
                   </center>
                </Card>  
            </SwiperSlide>
            <SwiperSlide>
                <Card style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF",borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C",borderTop: "5px solid #3A643B"}}>
                   <center className="py-5 px-2">
                   <h1 className="text-white" style={{padding:"18px",width:"90px",backgroundColor:"#3A643B",borderRadius:"50%"}}>3</h1>
                   <h4 className="color font py-2">Treatment Planning</h4>
                   <p className="  color2">The Ayurvedic practitioner<br/> creates a personalized <br/> treatment plan for you</p>
                   </center>
                </Card>  
            </SwiperSlide>
            <SwiperSlide>
                <Card style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF",borderRadius:"25px",boxShadow:" 0px 4px 9px 0px #0000001C",borderTop: "5px solid #3A643B"}}>
                   <center className="py-5 px-2">
                   <h1 className="text-white" style={{padding:"18px",width:"90px",backgroundColor:"#3A643B",borderRadius:"50%"}}>4</h1>
                   <h4 className="color font py-2">Maintenance</h4>
                   <p className="  color2">These visits allow for<br/> assessment of progress,<br/> adjustments to the treatment.</p>
                   </center>
                </Card>  
            </SwiperSlide>
           </Swiper>
           </Row>
        </Container>
        </div>
        </>
    )
}

export default Section5;