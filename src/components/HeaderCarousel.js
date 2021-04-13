import React, { useState } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import img1 from './assets/images/Carousel/1.jpg';
import img2 from './assets/images/Carousel/2.jpg';
import img3 from './assets/images/Carousel/3.jpg';


const items = [
    {
      src: img1,
      altText: 'Slide 1',
      caption: 'FEATURED PRODUCT',
      header: 'SHOP INDUSTRIAL INSTRUMENTS & SUPPLIES',
      key: '1'
    },
    {
      src: img2,
      altText: 'Slide 2',
      caption: 'EXPERT SERVICES',
      header: 'Services oil & gas instruments',
      key:'2'
    },
    {
      src: img3,
      altText: 'Slide 3',
      caption: 'ABOUT US',
      header: 'Through our network. A million-plus products in the palm of your hand.We can supply it',
      key: '3'
    }
  ];

const HeaderCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img className="carousel" src={item.src} alt={item.altText} width="100%" height="450px"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HeaderCarousel;