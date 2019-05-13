import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import image1 from "../../img/puzzle1.jpg"; // Tell Webpack this JS file uses this image
import image2 from '../../img/roundAbout-Logo.jpg';
import image3 from '../../img/adult-celebrate.jpg';

const items = [
  {
    src:  image1,
    altText: 'Immunization Puzzle',
    caption:  'Comprehensive, One-Stop Vaccination Tracker',
    captionText: '#vaccineswork'
  },
  {
    src: image2,
    altText: '#vaccineswork',
    caption: 'Tips, Tools And Resources For Vaccinations As An Adult',
    captionText: '#vaccineswork'

  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: 'Want a reason to celebrate... Vaccinate!',
    // captionText: '#vaccineswork'

  }
];

class roundAbout extends Component {
  constructor (props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting () {
    this.animating = true;
  }

  onExited () {
    this.animating = false;
  }

  next () {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous () {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex (newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render () {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            // className="text-danger"
            className="carousel-caption h4 a"
            captionText={item.captionText}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }
              .carousel-caption h3 {
                color: #20c997;
                text-shadow: 2px 2px black;
              }
              p {
                color: #red;
                text-shaddow: 2px 2px black;
              }
              `
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl direction="prev"
            directionText="Previous" onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next" onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default roundAbout;
