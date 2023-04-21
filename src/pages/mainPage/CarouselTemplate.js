import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useWIndowSize from '../../hooks/useWIndowSize';
import Figure from 'react-bootstrap/Figure'

const CarouselTemplate = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    //get current window size
    const {screenDim} = useWIndowSize();
    //const currentWidth = screenDim.width

    const [imageHeight, setImageHeight] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    
    useEffect(() => {
      if (screenDim.width <= 570) {
        setImageHeight(screenDim.height * 0.8);
        setImageWidth(screenDim.width * 0.8);
      } else {
        setImageHeight(screenDim.height * 0.5);
        setImageWidth(screenDim.width * 0.5);
      }
    }, [screenDim]);
    


  
    return (
        <>          
            <Carousel slide activeIndex={index} onSelect={handleSelect} interval={1500}>
                {Object.values(props.picList).map((x,key)=>
                    <Carousel.Item>
                        <Figure>
                            <Figure.Image
                                width={imageWidth}
                                height={imageHeight}
                                key={key}
                                alt={x.id}
                                src={x.img}
                            />
                        </Figure>
                        {/* <img
                        key={key}
                        className="d-block w-100"
                        src={x.img}
                        alt={x.img}
                        /> */}
                    </Carousel.Item>
                )}

            </Carousel>
        </>
    )
}

export default CarouselTemplate
