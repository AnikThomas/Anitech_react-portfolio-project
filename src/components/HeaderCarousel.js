import React,{Component} from 'react';
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
      header: 'SERVICES OIL AND GAS INSTRUMENTS',
      key:'2'
    },
    {
      src: img3,
      altText: 'Slide 3',
      caption: 'ABOUT US',
      header: 'OUR SUPPLIER CODE OF CONDUCT IS DESIGNED TO UPHOLD THAT COMMITMENT',
      key: '3'
    }
  ];

class HeaderCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

    onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

  next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}
    render(){
        const {activeIndex} = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem 
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={item.src}>
                    <img className="d-block w-100" src={item.src} alt={""}/>
                    <CarouselCaption className="carouselCaption" captionText={item.caption} captionHeader={item.header} />
                </CarouselItem>
            );
          });
    return(
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        </div>  
    );
  }
}

export default HeaderCarousel;