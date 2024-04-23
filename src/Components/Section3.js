import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../assests/card-image1.png";
import Image2 from "../assests/card-image2.png";
import Image3 from "../assests/card-image3.png";
function Section3(){
    return(
        <div className="background py-5">
             <div className="py-5">
      <center>
<h1 className="color text text-center" style={{width:"70vw"}}>What sets Ayurvedic consultations apart? </h1>
</center>
</div>
<Container  className="mb-5">
    <Row >
      <Col lg={5}>
      <Card style={{boxShadow: "0px 4px 8.9px 0px #0000000F",padding:"35px",borderRadius: "20px",borderTop: "5px solid #3A643B"}}>
        <p className="color text-center text4 " >स्वस्थस्य स्वास्थ्य रक्षणं,<br/> आतुरस्य विकार प्रशमनं ।"</p>
        <p className="color text-center " style={{fontSize:"18px"}}>[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
      </Card> 
      </Col>
      <Col>
      <img src={Image1} alt='health-oil-hair'></img>
      </Col>
      <Col lg={3}>
      <Card style={{boxShadow: "0px 4px 8.9px 0px #0000000F",padding:"45px",borderRadius: "20px",borderTop: "5px solid #3A643B"}}>
        <p className="color  font text5" >precise diagnosis</p>
        <p  className="text6">Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
      </Card> 
      </Col>
      <Col lg={3}>
      <Card style={{boxShadow: "0px 4px 8.9px 0px #0000000F",padding:"51px",borderRadius: "20px",borderTop: "5px solid #3A643B"}}>
        <p className="color  font text5" >Zero side-effects</p>
        <p  className="text6">Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs </p>
      </Card> 
      </Col>
      <Col lg={3}>
        <center>
      <img src={Image2} alt='health-oil-hair'></img>
      </center>
      </Col>
      <Col lg={3}>
      <Card style={{boxShadow: "0px 4px 8.9px 0px #0000000F",padding:"40px",borderRadius: "20px",borderTop: "5px solid #3A643B"}}>
        <p className="color  font text5" >Individual Treatment</p>
        <p  className="text6">all Treatments are personalized based on a person's unique constitution and health concerns.</p>
      </Card> 
      </Col>
      <Col lg={3}>
        <center>
      <img src={Image3} alt='health-oil-hair'></img>
      </center>
      </Col>
    </Row>

</Container>
        </div>

    )
}

export default Section3;