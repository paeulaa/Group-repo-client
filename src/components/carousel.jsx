import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import carousel01 from '../img/carousel01.svg';
import carousel02 from '../img/carousel02.svg';
import logo from '../img/favicon-f.svg';

const data = [
    {
     image: require('../img/carousel01.svg'), 
     caption:"Image 1",
     description:"Description Here",
     
    },
    {
      image:{carousel02}, 
      caption:"Image 2",
      description:"Description Here"
     },
     {
      image:{carousel01}, 
      caption:"Image 3",
      description:"Description Here"
     } 
]

function BootstrapCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
            height={500} 
            width={10}
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
    );
  }
  export default BootstrapCarousel; 