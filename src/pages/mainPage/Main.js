import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../hooks/Wrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import {ChurchEvents} from './Data/ChurchEvents';
//import { ChurchEvents } from './Data/ChurchEvents';
// import { DonationPage } from './Data/Donation'
// import { SocialService } from './Data/SocialServices';
// import { NewsComment } from './Data/News'
import { FormattedMessage } from 'react-intl';
import CarouselTemplate from './CarouselTemplate';
import { AllEvents } from '../../database/EventsData';
import CardsHorizontal from '../../component/CardsHorizontal';

export const Main = () => {

  const context = useContext(Context)

  const [lang, setLang] = useState("")

  useEffect(()=>{
    String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
  },[context.locale])


  return (
    <>
      <div className="d-flex justify-content-center">
        <CarouselTemplate picList={ChurchEvents}/>
      </div>

      <Container fluid>
        <Row>
          {AllEvents.map((x) => (
            <Col xs={12} lg={6} className="mb-4">
              <CardsHorizontal img={x.img} title={lang === "ZH"? x.titleZH : x.titleEN} content={x.descriptionEN}
              buttonText={<FormattedMessage id="app.clickViewMore" defaultMessage="Click to view more"/>}/>
            </Col>
          ))}
        </Row>
      </Container>
      <br/>

    </>
  )
}

export default Main
