import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import MapPopUp from './MapPopUp'
import { ContactLogo } from '../../database/ContactData';
import { Context } from '../../hooks/Wrapper';
import { ContactAddress } from "../../database/ContactData";
import { FormattedMessage } from 'react-intl';


let imgCss = "hover:scale-125 cursor-pointer"

const Footer = () => {

  const context = useContext(Context)

  return (
    <>
      <footer className="bg-dark text-white">
        <Container Fluid>
          {/* for contact logo */}
          <Row className="pt-3 pb-1">
            {Object.values(ContactLogo).map((x, num)=>
              <Col>
                {x.directLink.length === 0 ? 
                // for logo give further message when hoover
                <OverlayTrigger
                key='bottom'
                placement='bottom'
                width="25%"
                overlay={
                  <Tooltip id='tooltip-bottom'>
                    <p>{x.popupWord}</p>
                  </Tooltip>
                  }
                >
                  <img 
                    src={x.contactImage} 
                    alt={x.name} 
                    className={imgCss}
                    width="25%"
                  />
                </OverlayTrigger>

                :
                //for logo direct to other link
                <img 
                  src={x.contactImage} 
                  alt={x.name}
                  className={imgCss}
                  width="25%"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(x.directLink, "_blank")
                    }}
                />
                }
              </Col>
            )}
          </Row>
          
          {/* address and picture of map */}
          <Row>
            {Object.values(ContactAddress).map((x, num)=>
              <Col xs={2} md={3}>
                <div className="leading-3">
                  <p className = "pt-3 pb-2">{x.location} {String(context.locale).includes("en")? "Address":"地址"}:</p>
                  {x.address}

                  <MapPopUp
                    heading={<p>{x.location} {String(context.locale).includes("en")? "Church Address":"教會地址"}</p>}
                    pic={x.pic} 
                    buttonWord = {<p>{x.location}{String(context.locale).includes("en")? "Church Map":"教會地圖"}</p>}
                    closeButton = {<FormattedMessage id="app.Close" defaultMessage="Close"/>}
                  />                  
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
