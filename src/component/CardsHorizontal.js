// import React from 'react'
// import { Card, Row } from 'react-bootstrap';

// const CardsHorizontal = (props) => {
//   return (
//     <>
//       <Card>
//             <Row>
//                 <Card.Img variant="left" src={props.img} />
//                 <Card.Body>
//                 <   Card.Title>
//                         {props.title}
//                     </Card.Title>
//                     <Card.Text>
//                         {props.content}
//                     </Card.Text>
//                 </Card.Body>
//             </Row>
//         </Card>
//     </>
//   )
// }

// export default CardsHorizontal

//******************************************************************* */
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';


// function CardsHorizontal(props) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Row>
//         <Card.Img variant="left" src={props.img} />
//         <Card.Body>
//           <Card.Title>{props.title}</Card.Title>
//           <Card.Text class="line-clamp-6">
//             {props.content}
//           </Card.Text>
//           <Button variant="primary">{props.buttonText}</Button>
//         </Card.Body>
//       </Row>
//     </Card>
//   );
// }

// export default CardsHorizontal;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, {useContext} from 'react';
import { Context } from '../hooks/Wrapper';
import { useNavigate } from 'react-router-dom';

function CardsHorizontal(props) {

  const context = useContext(Context)
  const navigate = useNavigate()

  const handleClick = (e)=>{
    context.setPageDetails({
      img:props.img,
      title:props.title,
      content:props.content
    })
    
    navigate("/eventDetails")
  }

  return (
    <Container>
      <Card style={{ width: '100%', height: '305px' }} border="primary">
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Img variant="left" src={props.img} style={{height: '100%', objectFit: 'cover'}} />
            </Col>
            <Col sm={8}>
              <Card.Title><p class="font-bold">{props.title}</p></Card.Title>
              <Card.Text class="line-clamp-4">
                {props.content}
              </Card.Text>
              <Button onClick={handleClick} variant="primary">{props.buttonText}</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardsHorizontal;