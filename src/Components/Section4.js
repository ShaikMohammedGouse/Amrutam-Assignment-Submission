import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "../assests/card-background.png"
import Button from "react-bootstrap/Button"
function Section4(){
    return(
      <Card className="bg-dark text-white mt-5" >
        <Card.Img src={Image}  alt="Card image" style={{height:"65vh"}}/>
        <Card.ImgOverlay style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <center style={{alignItems:"center",justifyContent:"center"}}>
                <p className="card-text">
                Ready to restore harmony in <br/> your mind, body and spirit?
                </p>
                <div className='py-3'> <Button  variant="success"className="p-3" style={{borderRadius:"12px",fontSize:"20px",boxShadow:" 0px 4px 20.8px 0px #0000002B"
}}>Book a consultation</Button></div> 
            </center>
        </Card.ImgOverlay>
      </Card>
    )
}

export default Section4;