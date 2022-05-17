import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../../Images/banner/image-5.jpg'
import image2 from '../../../../Images/banner/images.jpg'
import image3 from '../../../../Images/banner/image-4.jpg'

const Baneer = () => {
    return (
        <div>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-90px"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Regal, the warehouse special edition</h3>
      <p>Choose and buy from wide and largest sofa collection of Bangladesh. Regal, the most loved and selling furniture brand in Bangladesh.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src={image3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='text-light'>Contemporary master bedroom furniture design</h3>
      <p className='text-light'> Furniture bedroom Double box Solid wood Simple bed-in Beds ... Simple Wooden Bedroom Furniture Designs 2015 - Modern Home Decor</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='text-dark'>Open Concept Living Room Furniture</h3>
      <p className='text-light'>Turning the backs of chairs and sofas to the rest of a space is an immediate way to signal a separate area.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Baneer;