import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';
import { ChurchEvents } from './Data/ChurchEvents';
import { DonationPage } from './Data/Donation'
import { SocialService } from './Data/SocialServices';
import { NewsComment } from './Data/News'
import { FormattedMessage } from 'react-intl';
import CarouselTemplate from './CarouselTemplate';

export const Main = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="donation">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="donation">
                  <FormattedMessage id="app.urgentDonation" defaultMessage="Urgently Require Donation"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="social">
                  <FormattedMessage id="app.socialService" defaultMessage="Social Service"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="event">
                  <FormattedMessage id="app.churchEvents" defaultMessage="Church Events"/>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comment">
                  <FormattedMessage id="app.newsComment" defaultMessage="News Comment"/>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} >
            <Tab.Content>
              <Tab.Pane eventKey="donation">
                <Container>
                  <Row className="justify-content-center">
                    <Col xs={12}>
                      <CarouselTemplate picList={DonationPage}/>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="social">
                <CarouselTemplate picList={SocialService}/>
              </Tab.Pane>
              <Tab.Pane eventKey="event">
                <CarouselTemplate picList={ChurchEvents}/>
              </Tab.Pane>
              <Tab.Pane eventKey="comment">
                <CarouselTemplate picList={NewsComment}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}
