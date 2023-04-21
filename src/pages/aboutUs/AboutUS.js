import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VisionCN from './VisionCN';
import VisionEN from './VisionEN';
import { Context } from '../../hooks/Wrapper';

const AboutUS = () => {

    const context = useContext(Context)

    return (
        <>
            <Container fluid>    
                <Row className="justify-content-md-center"> 
                    <Col lg="10" md="10" sm="12" xs="12">
                        {String(context.locale).includes("en")? <VisionEN/>:<VisionCN/>}
                    </Col>  
                </Row>
            </Container>    
        </>
    )
}

export default AboutUS
