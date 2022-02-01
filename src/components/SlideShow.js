import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const SlideShow = (props) => {
    // Need what is actually being passed in props
    let slides = props;
    
    let slidesList = slides.map((slide, index) => {
       return (
        <Carousel.Item interval={2000}>
            <img 
                className="d-block w-100"
                src={slide.url}
                alt={slide.title}
            />
            <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.date}</p>
            </Carousel.Caption>
        </Carousel.Item>
       )
    })
    
    return (
        <Carousel>
            {slidesList}
        </Carousel>
    )
}

export default SlideShow;