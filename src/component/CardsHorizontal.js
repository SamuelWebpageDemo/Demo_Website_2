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
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../hooks/Wrapper';
import { useNavigate } from 'react-router-dom';
import useWIndowSize from '../hooks/useWIndowSize';

function CardsHorizontal(props) {

  const context = useContext(Context)
  const navigate = useNavigate()
  const size = useWIndowSize()

  const handleClick = (e)=>{
    context.setPageDetails({
      img:props.img,
      title:props.title,
      content:props.content
    })
    
    navigate("/eventDetails")
  }

  const [cardPicLoc, setCardPicLoc] = useState("left")
  const [showContent, setShowContent] = useState(true)
  const [cardHeight, setCardHeight] = useState(true)

  useEffect(()=>{
    size.screenDim.width <= 760 ? setCardPicLoc("top"):setCardPicLoc("left")

    size.screenDim.width <= 760 ? setShowContent(false):setShowContent(true)

    size.screenDim.width <= 760 ? setCardHeight(false):setCardHeight(true)
  },[size])

  return (
    <Container>
      <Card style={{ width: '100%', height: cardHeight ? '305px' : 'auto' }} border="primary">
        <Card.Body>
          <Row>
            <Col sm={4} xs={6}>
              <Card.Img variant={cardPicLoc} src={props.img} style={{height: '90%', objectFit: 'cover'}} />
            </Col>
            <Col sm={8}>
              <Card.Title><p class="font-bold">{props.title}</p></Card.Title>
              {showContent&&<Card.Text class="line-clamp-4">
                {props.content}
              </Card.Text>}
              <Button onClick={handleClick} variant="primary">{props.buttonText}</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardsHorizontal;