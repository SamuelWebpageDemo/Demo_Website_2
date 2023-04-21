import React, {useContext, useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormattedMessage } from 'react-intl';
import logo from "../pic/nav/logo.jpg"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Context } from '../hooks/Wrapper';
import English from "../lang/en-GB.json"
import Chinese from "../lang/zh-HK.json"
import Collapse from 'react-bootstrap/Collapse';
import useScrollListener from '../hooks/useScrollListener';
import { Link } from 'react-router-dom';

export const NavScroll = () => {

  const context = useContext(Context)

  //for check box, ture for english, false for chinese
  const [isChecked, setIsChecked] = useState(String(context.locale).includes("en")? true:false)

  //for navbar collpase or return
  const [open, setOpen] = useState(true)

  const locationHandler = (props) => {
    context.setLocation(props)
    console.log(context.location)
  }

  //function for changing language
  const checkHandler = () => {
    setIsChecked(!isChecked)
    context.setMessages(isChecked===true? Chinese : English)
    context.setLocale(isChecked===true? "zh" : "en")
  }

  //for checking scroll height
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    if (open === true) {
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0){
        setOpen(false)
      }
    } else {
      if (scroll.y < 50 || scroll.y - scroll.lastY < -50){
        setOpen(true)
      }
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <nav>
      <Collapse in={open} timeout="0.001">
        <Navbar bg="dark" variant="dark" expand="md" className="py-0" sticky="top">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              {/* logo img */}
              <div className="md:hidden block">
                <img src={logo} className="w-35" alt="logo"/>
              </div>
              {/* logo line 1 */}
              <div className="hidden md:block lg:text-3xl md:text-lg font-logo font-bold">
                <FormattedMessage id="app.title" defaultMessage="英倫好鄰舍教會" />
              </div>
              {/* logo line 2 */}
              <div className="hidden xl:block text-lg font-logo font-bold">
                <FormattedMessage id="app.subTitle" defaultMessage="行公義、好憐憫、存謙卑" />
              </div>
              {/* logo line 3 */}
              <div className="hidden md:block lg:text-base md:text-sm font-logo">
                <FormattedMessage id="app.charityDetail" defaultMessage="慈善團體註冊號碼 No: 1195452" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end whitespace-nowrap">
              <Nav
                className="my-2"
                // style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {/* home */}
                <Nav.Link as={Link} to="/">
                  <FormattedMessage id="app.home" defaultMessage="Home"/>
                </Nav.Link>
                {/* Donation */}
                <Nav.Link as={Link} to="/donation">
                  <FormattedMessage id="app.donation" defaultMessage="Donation"/>
                </Nav.Link>
                {/* About Us */}
                <Nav.Link as={Link} to="/aboutUs">
                  <FormattedMessage id="app.aboutUs" defaultMessage="AboutUs"/>
                </Nav.Link>
                {/* activaties dropdown*/}
                <NavDropdown
                  title={<FormattedMessage id="app.activities" defaultMessage="Activities"/>}
                  menuVariant="dark"
                  id="navbarScrollingDropdown">
                  {/* Manchester */}
                  <NavDropdown.Item as={Link} to="/activaties" onClick={(e)=>{locationHandler("app.manchester")}} className="text-center">
                    <FormattedMessage id="app.manchester" defaultMessage="Manchester"/>
                  </NavDropdown.Item>
                  {/* Bristol */}
                  <NavDropdown.Item as={Link} to="/activaties" onClick={(e)=>{locationHandler("app.bristol")}} className="text-center">
                    <FormattedMessage id="app.bristol" defaultMessage="Bristol"/>
                  </NavDropdown.Item>
                  {/* London */}
                  <NavDropdown.Item as={Link} to="/activaties" onClick={(e)=>{locationHandler("app.london")}} className="text-center">
                    <FormattedMessage id="app.london" defaultMessage="London"/>
                  </NavDropdown.Item>
                  {/* Birmingham */}
                  <NavDropdown.Item as={Link} to="/activaties" onClick={(e)=>{locationHandler("app.birmingham")}} className="text-center">
                    <FormattedMessage id="app.birmingham" defaultMessage="Birmingham"/>
                  </NavDropdown.Item>
                  {/* All location */}
                  <NavDropdown.Item as={Link} to="/activaties" onClick={(e)=>{locationHandler("app.all")}} className="text-center">
                    <FormattedMessage id="app.all" defaultMessage="All Locations"/>
                  </NavDropdown.Item>
                </NavDropdown>
                {/* language toggle switch */}
                <div className="d-flex align-items-center justify-content-center">
                  <BootstrapSwitchButton
                    checked={isChecked}
                    onlabel="中"
                    onstyle="dark outline-light"
                    offlabel="Eng"
                    offstyle="dark outline-light"
                    style="border"
                    onChange={checkHandler}
                  />
                </div>
              </Nav> 
            </Navbar.Collapse>


          </Container>
          
        </Navbar>
        
      </Collapse>

      
    </nav>
  )
}

