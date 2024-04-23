import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/heart.png";
import Image2 from "../assests/prevention.png";
import Image3 from "../assests/mediation.png";
import Image4 from "../assests/healing.png";
import Image5 from "../assests/remedies.png";
import Image6 from "../assests/immunity.png";
import { Card } from "react-bootstrap";
import Yoga from "../assests/yoga.png"
function Section2(){
    return(
        <>
        <div className="py-5">
      <center>
<h1 className="color text text-center" >Discover Ayurveda’s magic with us </h1>
<p  className="text3 py-3 color2" >Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
a totally effective approach for a better life. </p>
<img src={Yoga} className="d-block d-sm-none img-fluid w-75" ></img>
      </center>
      
      </div>
    
<Container  className="mb-5">
    <Row className="mb-5   ">
      
        <Col className="justify-content-center justify-content-lg-between">
       
      <Row className="mb-5">
        <Col lg={2}>
        </Col>
       <Col style={{direction:"rtl"}} lg={8}>
      <h5 className="font">Personalized Wellness</h5>
      <p className="color2">Get treatments made just for you based on your individual doshas ( body type)</p>
       </Col> 
       <Col lg={2}>
        <img src={Image6} alt="message" className="py-1"></img>
       </Col>
      </Row>
      <Row className="mb-5">
       <Col lg={1}></Col>
       <Col style={{direction:"rtl"}} lg={8}>
      <h5 className="font">Focus on prevention</h5>
      <p className="color2">Stop problems even <br/>before they start</p>
       </Col> 
       <Col lg={2}>
        <img src={Image5} alt="message" className="py-1"></img>
       </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={2}>
        </Col>
       <Col style={{direction:"rtl"}}>
      <h5 className="font">Mind-Body Connection</h5>
      <p className="color2">Keep your mind and body in sync for a happy life</p>
       </Col> 
       <Col lg={2}>
        <img src={Image4} alt="message" className="py-1"></img>
       </Col>
      </Row>
        </Col>
       
        <Col className="d-none d-sm-block">
        <center >
        <img src={Yoga} className="img-fluid" alt="yoga"></img>
        </center>
        </Col>
        <Col>
        <Row className="mb-5">
        <Col lg={3}>
        <img src={Image3} alt="message" className="py-1"></img>
       </Col>
       
       <Col lg={8}>
      <h5 className="font">Holistic Healing</h5>
      <p className="color2">Fix the root problem for<br/> long-lasting health</p>
       </Col> 
       
      </Row>
      <Row className="mb-5">
        <Col></Col>
        <Col lg={3}>
        <img src={Image2} alt="message" className="py-1"></img>
       </Col>
       
       <Col lg={8}>
      <h5 className="font">Natural Remedies</h5>
      <p className="color2">Using herbs and natural <br/> therapies for healing</p>
       </Col> 
       
      </Row>
      <Row className="mb-5">
        <Col lg={3}>
        <img src={Image1} alt="message" className="py-1"></img>
       </Col>
       
       <Col lg={8}>
      <h5 className="font">Boosting immunity</h5>
      <p className="color2 ">Stay strong and healthy for life, <br/>not just for today</p>
       </Col> 
       
      </Row>
        </Col>
        
        </Row>
      
        </Container>
        </>
    )
}
export default Section2;