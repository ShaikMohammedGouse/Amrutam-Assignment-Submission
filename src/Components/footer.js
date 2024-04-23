import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import foot1 from "../assests/foot1.png"
import foot2 from "../assests/foot2.png"
import foot3 from "../assests/foot3.png"
import foot4 from "../assests/foot4.png"
import foot5 from "../assests/foot5.png"
import foot6 from "../assests/foot6.png"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function footer(){
    return( 
       <div  className="background2">
       <Container className="py-5">
        <Row className="p-3">
            <Col lg={4}>
                <p className="color font" style={{fontSize:"18px"}}>Get in touch</p>
                <p>support@amrutam.co.in</p>
            <p> Amrutam Pharmaceuticals Pvt Ltd.,<br/> Chitragupt ganj, <br/> Nai Sadak,<br/> Lashkar, Gwalior - 474001</p>
            <p>+91 9713171999</p>
<p><img src={foot1} alt="facebook"></img> <img src={foot2} alt="facebook"></img> <img src={foot3} alt="insta"></img> <img src={foot4} alt="facebook"></img> <img src={foot5} alt="facebook"></img> <img src={foot6} alt="facebook"></img></p>
                        </Col>
                        <Col lg={4}>
                            <p className="color font" style={{fontSize:"18px"}}>Information</p>
                         <p className="color2"> About Us <br/>
Terms and Conditions  <br/>
Privacy Policy  <br/>
Privacy Policy for Mobile Apps  <br/>
Shipping and Returns Policy  <br/>
International Delivery  <br/>
For Businesses, Hotels and Resorts</p>
                        </Col>
                        <Col>
                        <p className="color font" style={{fontSize:"18px"}}>Subscribe to our Newsletter and join Amrutam Family today!</p>
                        <InputGroup className="mb-3" >
        <Form.Control style={{borderRadius:"50px 0px 0px 50px",borderColor:"rgba(58, 100, 59, 1)"}}
          placeholder="Your Email Address"
          aria-label="Email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className="p-3 font" style={{background:"black",color:"white",borderRadius:"0px 50px 50px 0px",fontWeight:"700",padding:"10px"}}>Subscribe</InputGroup.Text>
      </InputGroup>
                        </Col>
        </Row>
       </Container>
       </div>
    )
}

export default footer;