import React from 'react';
import { Card } from 'react-bootstrap';
import "../css/css.css"
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Image3 from  "../assests/card.png"
import Image from "../assests/mobile.png"
function ImgOverlayExample() {
  return (
 <>
 <Card className="bg-dark text-white">
 <Card.Img src={Image} alt="Card image for small screens" className="d-block d-sm-none img-fluid" style={{ height: "70vh" }} />
<Card.Img src={Image3} alt="Card image for large screens" className="d-none d-sm-block" style={{ height: "70vh" }} />
      <Card.ImgOverlay>
      <Container  className='py-5'>
      <p className='text-white textt py-2' style={{fontWeight:"100"}} >Namaste, Welcome to Amrutam </p>
      <h1 className="text-white py-2 text2">
      Step into Holistic Healing with <u>Ayurveda</u> <br/>Book Consultation with certified Experts. 
      </h1>
      <p  style={{fontWeight:"250"}} className="py-2" >Dive into the world of ayurveda and Experience Personalized Health Solutions and <br/> Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
   <div className='py-3'> <Button  variant="success"className="p-3" style={{borderRadius:"12px",fontSize:"20px"}}>Book an Appointment</Button></div>  
   </Container>
      </Card.ImgOverlay>
    </Card>
</>
  );
}

export default ImgOverlayExample; 
