import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../assests/image1.png"
import image2 from "../assests/image11.png"
import Phone from "../assests/phone.png"
function Section8(){
    return(
<div className="background">
    <Container className="py-5">
    <Row>
        <Col lg={6}>
         <h1 className="text2 color">Amrutam home App</h1>
         <p className="color2 ">The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
        <h2 className="mb-5 d-none d-sm-block">Get a Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe </h2>
        <h2 className="font d-none d-sm-block">Get The App Now</h2>
        <div className="d-none d-sm-block">
        <Row>
            <Col>
            <img src={Image} gap={20} alt="get-app"/>
            </Col>
            <Col>
            <img src={image2} alt="data-app"></img>
            </Col>
        </Row>
 </div>
        </Col>
        <Col lg={6}>
        <img src={Phone} alt="phone-app" className="img-fluid"></img>
        </Col>

    </Row>
    <h2 className="mb-5 d-block d-sm-none text-center" >Get a Diet & Lifestyle <br/> Consultation With Ayurvedic <br/>Experts Across The Globe </h2>
        <h2 className="font d-block d-sm-none text-center">Get The App Now</h2>
        <div className="d-block d-sm-none text-center">
        <Row>
            <Col>
            <img src={Image} gap={20} alt="get-app"/>
            </Col>
            <Col>
            <img src={image2} alt="data-app"></img>
            </Col>
        </Row>
 </div>
    </Container>
</div>
    )
}

export default Section8;
