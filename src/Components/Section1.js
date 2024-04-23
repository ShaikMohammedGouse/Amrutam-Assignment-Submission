import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import icon3 from "../assests/icon3.png";
import icon4 from "../assests/icon4.png";
function Section1(){
    return(
        <>
        <div className="background">
<Container>
    <Row>
        <Col lg={3} md={3} sm={6} xs={12}>
        <Card  style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF"}}>
      <Row >
        <Col lg={4} md={3} sm={3} xs={3}>
        <img src={icon1} alt="message" className="py-1"></img>
       </Col>
       <Col>
       <p className="py-3 color font">convenient online & <br/>
In-clinic consultations</p>
       </Col> 
      </Row>
        </Card>
        </Col>
        <Col lg={3} md={3} sm={6} xs={12}>
        <Card  style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF"}}>
      <Row>
      <Col lg={4} md={3} sm={3} xs={3}>
        <img src={icon2} alt="message" className="py-1"></img>
       </Col>
       <Col>
       <p className="py-3 color font">Safe and effective <br/> treatment</p>
       </Col> 
      </Row>
        </Card>
        </Col> 
        <Col lg={3} md={3} sm={6} xs={12}>
        <Card  style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF"}}>
      <Row>
      <Col lg={4} md={3} sm={3} xs={3}>
        <img src={icon3} alt="message" className="py-1"></img>
       </Col>
       <Col>
       <p className="py-3 color font">Experienced Ayurvedic <br/> Practitioners</p>
       </Col> 
      </Row>
        </Card>
        </Col>
        <Col lg={3} md={3} sm={6} xs={12}>
        <Card  style={{background:"rgba(255, 247, 226, 1)",borderColor:"#FFF1CF"}}>
      <Row>
      <Col lg={4} md={3} sm={3} xs={3}>
        <img src={icon4} alt="message" className="py-1"></img>
       </Col>
       <Col>
       <p className="py-3 color font">personalized Treatment <br/>
Plans & Guidance</p>
       </Col> 
      </Row>
        </Card>
        </Col>
      
    </Row>
</Container>
</div>
</>
    )
}
export default Section1;