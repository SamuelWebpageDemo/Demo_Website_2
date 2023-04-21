import React, {useContext} from "react";
import { Context } from '../../hooks/Wrapper';
import {StackedCarousel, ResponsiveContainer} from "react-stacked-center-carousel";
import Fab from '@mui/material/Fab'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { data } from "../../database/donationMethod";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from "react-intl";
import { Remark } from "../../database/donationRemark";
//export const data = DonationMethodEN


export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  const numOfMethod = Object.keys(data).length
  const context = useContext(Context)


  return (
    
  <div>
    <div style={{ width: "100%", position: "relative" }}> 
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 800) currentVisibleSlide = 1;
          return (
            <div className="grid place-content-center">
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Dcard}
                //slideWidth={parentWidth < 800 ? parentWidth: 950}
                slideWidth={parentWidth < 800 ? 330:parseInt(parentWidth/(parseInt(numOfMethod)+1))}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={numOfMethod}
                useGrabCursor
                centerMode={true}
                //disableSwipe
                //transitionTime={450}
                
                customScales={[1, 0.9, 0.2]}
              />
            </div>
          );
        }}
      />
      <>
        <Fab
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext();
          }}
        >
          <ArrowForwardIcon />
        </Fab>
      </>
    </div>
    <br/>
    <div className="pl-10 pr-10">
      {String(context.locale).includes("en")? Remark[0].remarkEN:Remark[0].remarkZH}
    </div>
    
    <br/>
  </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below 
export const Dcard = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { logo } = data[dataIndex];
  const { titleZH } = data[dataIndex];
  const { titleEN } = data[dataIndex];
  const { content } = data[dataIndex];
  const {link} = data[dataIndex];
  const context = useContext(Context)
  return (
    <div
      style={{
        //width: "40.5%",
        height: "100%",
        //height: "2050px",
        // userSelect: "none",
      }}
      className="my-slide-component border-2 border-dark rounded"
    >        
        <Card style={{ width: "20rem", height:"35rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{String(context.locale).includes("en")? titleEN:titleZH}</Card.Title>
            <Card.Text>
              {content}
            </Card.Text>
            {link === ""? "":<Button href={link} variant="primary" className="whitespace-nowrap">
              <FormattedMessage id="app.donateNow" defaultMessage="Donation Now"/>
            </Button>}
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
    </div> 
  );
});